import reducer from "./reducers";
import * as types from "./types";
import { tag as tagAction } from "./actions";
import tagSagas from "./sagas";

export { types, tagSagas, tagAction };

export default reducer;
