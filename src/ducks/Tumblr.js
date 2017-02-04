import {createAction, handleActions} from 'redux-actions'
import {Map, fromJS} from 'immutable'
// ACTIONS
export const RESET_TO_DEFAULT_USER = createAction('DEMO/TUMBLR/RESET_TO_DEFAULT_USER')
export const GET_USER = createAction('DEMO/TUMBLR/START_GET_USER')
export const END_GET_USER = createAction('DEMO/TUMBLR/END_GET_USER')
export const END_GET_USER_ERROR = createAction('DEMO/TUMBLR/END_GET_USER_ERROR')
export const GET_NEW_PAGE = createAction('DEMO/TUMBLR/GET_NEW_PAGE')
export const END_GET_NEW_PAGE = createAction('DEMO/TUMBLR/END_GET_NEW_PAGE')
export const END_GET_NEW_PAGE_ERROR = createAction('DEMO/TUMBLR/END_GET_NEW_PAGE_ERROR')
export const SET_SELECTED_ITEM = createAction('DEMO/TUMBLR/SET_SELECTED_ITEM')
export const CLEAR_SELECTED_ITEM = createAction('DEMO/TUMBLR/CLEAR_SELECTED_ITEM')
// REDUCER
const defaultState = new Map({
    loading: false,
    offset: 0,
    total: 1,
    limit: 20,
    selectedItem: null
})

const reducer = handleActions({
    [GET_USER().type]: function (state, {payload, type, error}) {
        return state
            .set('loading', true)
            .delete('user')
            .delete('posts')
    },
    [END_GET_USER().type]: function (state, {payload, type, error}) {
        const {blog, posts, total_posts} = payload.response
        return state
            .set('user', fromJS(blog))
            .set('posts', fromJS(posts))
            .set('total', total_posts)
            .set('offset', 0)
            .set('loading', false)
    },
    [END_GET_USER_ERROR().type]: function (state, {payload, type, error}) {
        return state
            .set('loading', false)
    },
    [GET_NEW_PAGE().type]: function (state) {
        return state
            .set('loading', true)
    },
    [END_GET_NEW_PAGE().type]: function (state, {payload}) {
        const {total, posts, offset} = payload
        return state
            .set('offset', offset)
            .set('total', total)
            .set('posts', fromJS(posts))
            .set('loading', false)
    },
    [END_GET_NEW_PAGE_ERROR().type]: function (state) {
        return state
            .set('loading', false)
    },
    [RESET_TO_DEFAULT_USER().type]: function (state) {
        return state
            .set('loading', false)
            .set('offset', 0)
            .set('total', 1)
            .set('limit', 20)
            .delete('user')
            .delete('posts')
    },
    [SET_SELECTED_ITEM().type]: function (state, {payload}) {
        const {id} = payload
        return state
            .set('selectedItem', id)
    },
    [CLEAR_SELECTED_ITEM().type]: function (state, action) {
        return state
            .set('selectedItem', null)
    }
}, defaultState)

export default reducer
