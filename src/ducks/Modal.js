import {createAction, handleActions} from 'redux-actions'
import {Map} from 'immutable'

// ACTIONS
export const SHOW_MODAL = createAction('DEMO/MODAL/SHOW_MODAL')
export const HIDE_MODAL = createAction('DEMO/MODAL/HIDE_MODAL')

const defaultState = new Map({
  visible: false
})

const reducer = handleActions({
  [SHOW_MODAL().type]: function (state) {
    return state
            .set('visible', true)
  },
  [HIDE_MODAL().type]: function (state) {
    return state
            .set('visible', false)
  }
}, defaultState)

export default reducer
