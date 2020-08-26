import { actionTypes } from './actions'

function reducer(state, action) {
  switch (action.type) {
    case actionTypes.LOAD_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        ...{ data: action.data },
      }
    case actionTypes.LOAD_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        ...{ error: action.error },
      }
    default:
      return state
  }
}

export default reducer
