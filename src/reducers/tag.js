import { TAG } from "constant/action";

const initState = {
  isLoading: false,
  panes: { activeKey: "Global feed", data: [] },
  error: "",
};

const tagReducer = (state = initState, actions) => {
  switch (actions) {
    case TAG.PENDING: {
      console.log("tag PENDDING", actions.payload);
      return state;
    }
    case TAG.SUCCESS: {
      console.log("tag SUCCESS", actions.payload);
      return state;
    }
    case TAG.ERROR: {
      console.log("tag ERROR", actions.payload);
    }
    default:
      return state;
  }
};

export default tagReducer;
