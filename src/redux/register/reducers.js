import { REGISTER } from "./types";

const initState = {
  isLoading: false,
  isRegisSuccess: false,
  error: null,
};

const registerReducer = (state = initState, action) => {
  switch (action.type) {
    case REGISTER.LOAD: {
      return { ...state, isLoading: true, error: null };
    }
    case REGISTER.SUCCESS: {
      return { ...state, isLoading: false, isRegisSuccess: true, error: null };
    }
    case REGISTER.ERROR: {
      return {
        ...state,
        isLoading: false,
        isRegisSuccess: false,
        error: action.errors,
      };
    }
    default:
      return state;
  }
};

export default registerReducer;
