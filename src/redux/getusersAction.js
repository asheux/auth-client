import axios from 'axios';
import * as types from './constant.js';

const baseUrl = process.env.REACT_APP_BASE_URL;

export const fetchUsersSuccess = (data) => ({
  type: types.REGISTER_SUCCESS,
  data
});

export const fetchUsersFailure = (errors) => ({
  type: types.REGISTER_FAILURE,
  errors
});

export const fetchUsersRequest = () => ({
  type: types.REGISTER_REQUEST
});

const usersActions = () => dispatch => {
  dispatch(fetchUsersRequest());
  const url = `${baseUrl}/users`;
  return axios(url)
    .then(response => dispatch(fetchUsersSuccess(response.data)))
    .catch(error => dispatch(fetchUsersFailure(error)))
}

export default usersActions;
