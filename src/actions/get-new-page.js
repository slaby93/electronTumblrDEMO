import { GET_NEW_PAGE, END_GET_NEW_PAGE, END_GET_NEW_PAGE_ERROR } from './../ducks/Tumblr'
import getUser from './../logic/Tumblr/get_user'
function getNewPageAction (offset) {
  return function (dispatch, getState) {
    const userName = getState().get('tumblr').get('user').get('name')
    const limit = getState().get('tumblr').get('limit')
    dispatch(GET_NEW_PAGE())
    getUser(userName, limit, offset)
      .then((data) => {
        dispatch(END_GET_NEW_PAGE({
          total: data.response.total_posts,
          posts: data.response.posts,
          offset
        }))
      })
      .catch(() => {
        dispatch(END_GET_NEW_PAGE_ERROR())
      })

  }
}

export default getNewPageAction