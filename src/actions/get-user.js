import { GET_USER, END_GET_USER, END_GET_USER_ERROR } from './../ducks/Tumblr'
import getUserLogic from './../logic/Tumblr/get_user'
export default function getUserAction (userName) {
  return function (dispatch, getState) {
    dispatch(GET_USER())
    getUserLogic(userName)
      .then((userInfo) => {
        dispatch(END_GET_USER(userInfo))
      })
      .catch((error) => {
        dispatch(END_GET_USER_ERROR(error))
      })

  }
}
