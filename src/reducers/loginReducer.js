import { LOGIN, LOGOUT } from "constant/action";
import LocalStorageService from "service/localStorageService";
const localStorageService = LocalStorageService.getService();

const initState = {
  isLoading: false,
  isLogin:
    !!localStorageService.getUsername() &&
    !!localStorageService.getAccessToken(),
  error: null,
  username: localStorageService.getUsername() || null,
};

const loginReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN.LOAD: {
      return { ...state, isLoading: true, error: null };
    }
    case LOGIN.SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isLogin: true,
        error: null,
        username: action.username,
      };
    }
    case LOGIN.ERROR: {
      return {
        ...state,
        isLoading: false,
        isLogin: false,
        error: action.errors,
        username: null,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        isLoading: false,
        isLogin: false,
        error: null,
        username: null,
      };
    }
    default:
      return state;
  }
};

export default loginReducer;
