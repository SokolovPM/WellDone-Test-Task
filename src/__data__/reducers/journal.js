import { Map } from 'immutable'

import * as types from '../action-types'

const initialState = Map({
  isLoading: false,
  error: false,
  journal: []
})

export const journal = (state = initialState, action) => {
  switch (action.type) {
  case types.JOURNAL_FETCH_REQUEST:
    return state
      .set('isLoading', true)
  case types.JOURNAL_FETCH_SUCCESS:
    return state
      .set('isLoading', false)
      .set('journal', action.journal)
  case types.JOURNAL_FETCH_FAILURE:
    return state
      .set('error', true)
  default:
    return state
  }
}
