import reducer from "./reducers";
import { post as postAction } from "./actions";
import * as types from "./types";
import postSagas from "./sagas";

export { postAction, types, postSagas };
export default reducer;
