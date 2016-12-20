import { getUser, endGetUser, endGetUserError } from './../ducks/Tumblr'
import getUserLogic from './../logic/Tumblr/get_user'
export default function getUserAction (userName) {
  return function (dispatch, getState) {
    dispatch(getUser())
    getUserLogic(userName)
      .then((userInfo) => {
        dispatch(endGetUser(userInfo))
      })
      .catch((error) => {
        dispatch(endGetUserError(error))
      })
  }
}
