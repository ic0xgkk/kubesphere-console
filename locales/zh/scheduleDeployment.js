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

module.exports = {
  SPECIFY_REPLICAS: '指定副本数',
  SPECIFY_WEIGHTS: '指定权重',
  SPECIFY_WEIGHTS_DESC:
    '设置容器组副本总数和每个集群的权重。容器组副本将根据权重调度到每个集群。',
  SPECIFY_REPLICAS_DESC: '手动设置每个集群的容器组副本数。',
  WEIGHT: '权重',
  TOTAL_REPLICAS: '副本总数',
  TOTAL_REPLICAS_EMPTY_DESC: '请输入所有集群容器组副本的总数。',
  ENTER_POSITIVE_INTEGER_DESC: '请输入一个正整数。',
  'Storage Function Manage': '存储卷功能管理',
  'Volume Clone': '存储卷克隆',
  Volume_Clone_Des: '创建一个相同的存储卷。',
  Volume_SnapShot_Des: '创建一个存储卷快照，可用于创建其他存储卷。',
  'Volume Expansion': '存储卷扩容',
  Volume_Expansion_Des:
    '增加存储卷的容量。无法在控制台上减少存储卷的容量，因为数据可能会因此丢失。',
}