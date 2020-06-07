/*
 * This file is part of KubeSphere Console.
 * Copyright (C) 2019 The KubeSphere Console Authors.
 *
 * KubeSphere Console is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * KubeSphere Console is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with KubeSphere Console.  If not, see <https://www.gnu.org/licenses/>.
 */

import { inject } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import { Component as Base } from 'core/containers/Base/Detail/Page'
import ClusterStore from 'stores/cluster'
import ProjectStore from 'stores/project'

@inject('rootStore')
@withRouter
export default class DetailPage extends Base {
  get inCluster() {
    return this.props.match.path.startsWith('/clusters')
  }

  get enabledActions() {
    const { cluster, namespace } = this.props.match.params
    return globals.app.getActions({
      module: this.authKey,
      ...(this.inCluster ? { cluster } : { cluster, project: namespace }),
    })
  }

  async init() {
    const { cluster, namespace } = this.props.match.params
    if (cluster) {
      this.stores.clusterStore = new ClusterStore()
      this.stores.projectStore = new ProjectStore()

      await Promise.all([
        this.stores.clusterStore.fetchDetail({ name: cluster }),
        this.stores.projectStore.fetchDetail({ cluster, namespace }),
      ])

      const { workspace } = this.stores.projectStore.detail

      if (workspace) {
        await this.props.rootStore.getRules({ workspace })
      }

      await this.props.rootStore.getRules(
        this.inCluster ? { cluster } : { cluster, workspace, namespace }
      )
    }

    this.setState({ initializing: false })
  }
}
