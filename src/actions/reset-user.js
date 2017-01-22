import { RESET_TO_DEFAULT_USER } from './../ducks/Tumblr'

export default function resetUser () {
  return (dispatch, state) => {
    dispatch(RESET_TO_DEFAULT_USER())
  }
}
