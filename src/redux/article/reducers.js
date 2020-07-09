import { ARTICLE, REMOVE_ARTICLE } from "./types";

let initState = {
  isLoading: false,
  error: null,
  page: 1,
  panes: {
    activeKey: "Global feed",
    data: [
      {
        tag: "Global feed",
        content: [],
      },
    ],
  },
};

const articleReducer = (state = initState, action) => {
  switch (action.type) {
    case ARTICLE.LOAD: {
      return { ...state, ...{ isLoadding: true } };
    }
    case ARTICLE.SUCCESS: {
      const stateClone = { ...state };
      stateClone.page = action.page;
      stateClone.panes.activeKey = action.activeKey;
      // 1. Only global feed render
      // 2. Render another tag
      if (action.activeKey.includes("Global feed")) {
        stateClone.panes.data = [action.data];
      } else {
        const newData = [stateClone.panes.data[0], action.data];
        stateClone.panes.data = newData;
      }
      return stateClone;
    }
    case ARTICLE.ERROR: {
      return { ...state, ...{ isLoadding: false, error: action.payload } };
    }

    case REMOVE_ARTICLE.SUCCESS: {
      // remove pane
      let stateClone = { ...state };
      stateClone.page = 1;
      stateClone.panes.data = stateClone.panes.data.filter((value) =>
        value.tag.includes("Global feed"),
      );
      stateClone.panes.activeKey = "Global feed";
      return stateClone;
    }
    default:
      return state;
  }
};

export default articleReducer;
