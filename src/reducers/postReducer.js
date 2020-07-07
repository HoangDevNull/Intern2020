import { POST } from "constant/action";

const initState = {
  isLoading: false,
  data: {
    title: "",
    content: "",
    dateUpdate: null,
    tagList: [],
    author: {
      username: "",
      image: "",
    },
  },
  error: null,
};

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case POST.LOAD: {
      return { ...state, isLoading: true, error: null };
    }
    case POST.SUCCESS: {
      return { ...state, data: action.payload, isLoading: false, error: null };
    }
    case POST.ERROR: {
      return { ...state, isLoading: false, error: action.errors };
    }

    default:
      return state;
  }
};

export default postReducer;
