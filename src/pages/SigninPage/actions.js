import { SIGNIN_USER_SUCCESS } from '../../utils/constants';

export const signInUserSuccess = ({ email }) => ({
  type: SIGNIN_USER_SUCCESS,
  payload: { email }
});
