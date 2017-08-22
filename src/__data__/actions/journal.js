import * as types from '../action-types'
import axios from 'axios'

const journalFetchRequest = () => ({
  type: types.JOURNAL_FETCH_REQUEST
})

const journalFetchSuccess = (data) => {
  return {
    type: types.JOURNAL_FETCH_SUCCESS,
    journal: data
  }
}

const journalFetchFailure = () => ({
  type: types.JOURNAL_FETCH_FAILURE
})

export const journalFetch = () => {
  return (dispatch) => {
    dispatch(journalFetchRequest())
    axios.post('/journal', {})
      .then((response) => {
          console.log('reponse', response)
        dispatch(journalFetchSuccess(response.data))
        return Promise.resolve()
      })
      .catch((error) => {
        dispatch(journalFetchFailure())
        return Promise.reject(error)
      })
  }
}
