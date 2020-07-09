import { TAG } from "./types";

const initState = {
  isLoading: false,
  tagList: [],
  error: null,
};
const tagReducer = (state = initState, action) => {
  switch (action.type) {
    case TAG.LOAD: {
      // update loading and error state
      return { ...state, isLoading: true, error: null };
    }
    case TAG.SUCCESS: {
      // merge init state with new tags
      return { ...state, isLoading: false, tagList: action.tags };
    }
    case TAG.ERROR: {
      // update error state
      return { ...state, isLoading: false, error: action.error };
    }
    default:
      return state;
  }
};

export default tagReducer;
