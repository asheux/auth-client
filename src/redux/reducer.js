import * as types from './constant.js';

const initialState = {
    data: [],
    errors: null,
    loading: false
};

const registerReducer = (
  state = initialState, action
) => {
  switch(action.type) {
    case types.REGISTER_REQUEST:
      return {
        ...state,
        loading: true
      };
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false
      };
    case types.REGISTER_FAILURE:
      return {
        ...state,
        errors: action.error,
        loading: false
      };
    default:
      return state;
  }
}

export default registerReducer;
