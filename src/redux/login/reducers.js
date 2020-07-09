import { LOGIN, LOGOUT, USER } from "./types";
import LocalStorageService from "service/localStorageService";
const localStorageService = LocalStorageService.getService();

const initState = {
  isLoading: false,
  isLogin: !!localStorageService.getAccessToken(),
  error: null,
  username: null,
  image: null,
};

const loginReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN.LOAD: {
      return { ...state, isLoading: true, error: null };
    }
    case LOGIN.SUCCESS: {
      console.log(action);
      return {
        ...state,
        isLoading: false,
        isLogin: true,
        error: null,
        username: action.username,
        image: action.image,
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
    case USER.LOAD: {
      return { ...state, isLoading: true, error: null };
    }
    case USER.SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isLogin: true,
        error: null,
        username: action.username,
        image: action.image,
      };
    }
    case USER.ERROR: {
      return {
        ...state,
        isLoading: false,
        isLogin: false,
        error: action.errors,
        username: null,
      };
    }
    default:
      return state;
  }
};

export default loginReducer;
