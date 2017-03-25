/* @flow */

import * as Immutable from 'immutable'
import WebAPI from '@api'

export const REPOSITORIES_FETCH_REQUESTED = 'REPOSITORIES_FETCH_REQUESTED'
export const REPOSITORIES_FETCH_SUCCEEDED = 'REPOSITORIES_FETCH_SUCCEEDED'
export const REPOSITORIES_FETCH_FAILED = 'REPOSITORIES_FETCH_FAILED'

type Repositories = {
  [key: number]: {
    name: string,
  },
}

type Action = {
  types: Array<string>,
  promise: Promise<any>,
}

export default function repositories(
  state: Repositories = Immutable.fromJS({}),
  action: Action,
): Repositories {
  switch (action.types) {
    default:
      return {}
  }
}

export const fetchRepositories = (): Action => ({
  types: [REPOSITORIES_FETCH_REQUESTED, REPOSITORIES_FETCH_SUCCEEDED, REPOSITORIES_FETCH_FAILED],
  promise: WebAPI.fetchRepositories(),
})
