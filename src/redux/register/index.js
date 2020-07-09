import reducer from "./reducers";
import { register as registerAction } from "./actions";
import registerSagas from "./sagas";
import * as types from "./types";

export { types, registerSagas, registerAction };

export default reducer;
