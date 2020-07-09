import reducer from "./reducers";
import { comment as commentAction } from "./actions";
import * as types from "./types";
import commentSagas from "./sagas";

export { commentAction, types, commentSagas };
export default reducer;
