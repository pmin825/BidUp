import * as UserApiUtil from "../util/users_api_util";
// import { receiveCurrentUser } from "../actions/session_actions"

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS"

const receiveAllUsers = (users) => ({
    type: RECEIVE_ALL_USERS,
    users
})

export const fetchUsers = () => (dispatch) => {
    return UserApiUtil.fetchUsers().then((payload) => {
        dispatch(receiveAllUsers(payload))
    })
}

export const fetchUser = (userId) => (dispatch) => {
    return UserApiUtil.fetchUser(userId).then((payload) => {
        dispatch(receiveCurrentUser(payload))
    })
}
