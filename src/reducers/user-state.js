import { SIGNIN_USER_SUCCESS, LOGOUT_USER_SUCCESS } from '../utils/constants';

const initialState = {
  user: null
};

const userState = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload
      };

    case LOGOUT_USER_SUCCESS:
      return {
        ...state,
        user: null
      };
    default:
      return state;
  }
};
export default userState;
