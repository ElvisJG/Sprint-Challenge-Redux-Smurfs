import { LOGIN_SUCCESS } from './actions';

const useToken = store => next => action => {
  if (action.type === LOGIN_SUCCESS) {
    localStorage.setItem('userToken', action.payload.token);
  }
  next(action);
};

export default useToken;
