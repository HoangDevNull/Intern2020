import { COMMENT, ADD_COMMENT, DROP_COMMENT } from "constant/action";

const initState = {
  isLoading: false,
  data: [
    {
      id: null,
      author: {
        username: "",
        image: "",
      },
      content: "",
      dateUpdate: null,
    },
  ],
  error: null,
};

const commentReducer = (state = initState, action) => {
  switch (action.type) {
    case COMMENT.LOAD: {
      return { ...state, isLoading: true, error: null };
    }
    case COMMENT.SUCCESS: {
      return { ...state, data: action.payload, isLoading: false, error: null };
    }
    case COMMENT.ERROR: {
      return { ...state, isLoading: false, error: action.errors };
    }
    case ADD_COMMENT.LOAD: {
      return { ...state, isLoading: true, error: null };
    }
    case ADD_COMMENT.SUCCESS: {
      return { ...state, data: action.payload, isLoading: false, error: null };
    }
    case ADD_COMMENT.ERROR: {
      return { ...state, isLoading: false, error: action.errors };
    }
    case DROP_COMMENT.LOAD: {
      return { ...state, isLoading: true, error: null };
    }
    case DROP_COMMENT.SUCCESS: {
      return { ...state, data: action.payload, isLoading: false, error: null };
    }
    case DROP_COMMENT.ERROR: {
      return { ...state, isLoading: false, error: action.errors };
    }
    default:
      return state;
  }
};

export default commentReducer;
