// This file is part of MinIO Console Server
// Copyright (c) 2020 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

export interface Bucket {
  name: string;
  creation_date: Date;
}

export interface BucketInfo {
  name: string;
  access: string;
}

export interface BucketList {
  buckets: Bucket[];
  total: number;
}

export interface BucketEvent {
  id: string;
  arn: string;
  events: string[];
  prefix: string;
  suffix: string;
}

export interface BucketEventList {
  events: BucketEvent[];
  total: number;
}
