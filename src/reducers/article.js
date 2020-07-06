import { ARTICLE } from "constant/action";

const initState = {
  isLoading: false,
  panes: { activeKey: "Global feed", data: [] },
  error: "",
};

const articleReducer = (state = initState, actions) => {
  switch (actions) {
    case ARTICLE.PENDING: {
      console.log("ARTICLE PENDDING", actions.payload);
      return state;
    }
    case ARTICLE.SUCCESS: {
      console.log("ARTICLE SUCCESS", actions.payload);
      return state;
    }
    case ARTICLE.ERROR: {
      console.log("ARTICLE ERROR", actions.payload);
    }
    default:
      return state;
  }
};

export default articleReducer;
