import { combineReducers } from "redux";
import usuariosReducer from "./usuariosReducer";
import noticias from "./noticias";

const rootReducer = combineReducers({
  usuarios: usuariosReducer,
  noticias: noticias,
});

export default rootReducer;