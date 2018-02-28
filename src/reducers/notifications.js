import { TOGGLE_NOTIFICATION } from '../actions/types'

const initialState = {
  notified: false,
}

export default function notifications (state = initialState, action) {
  switch (action.type) {
    case TOGGLE_NOTIFICATION :
      return {
        ...state,
        ['notified']: !state.notified,
      }
    default:
      return state
  }
}
