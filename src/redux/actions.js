import axios from 'axios';
import * as types from './constant.js';

const baseUrl = process.env.REACT_APP_BASE_URL;

export const registerRequest = () => ({
  type: types.REGISTER_REQUEST
});

export const registerSuccess = (data) => ({
  type: types.REGISTER_SUCCESS,
  data
});

export const registerFailure = (error) => ({
  type: types.REGISTER_FAILURE,
  error
});

const registerActions = (data) => dispatch => {
    dispatch(registerRequest());
    const url = `${baseUrl}/register`;
    return axios.post(url, data)
        .then(response => dispatch(registerSuccess(response.data)))
        .catch(error => dispatch(registerFailure(error)));
}

export default registerActions;
