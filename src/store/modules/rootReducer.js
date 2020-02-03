import { combineReducers } from "redux";
import aplicacoesReducer from "./aplicacoes/reducer";
import servicosReducer from "./servicos/reducer";

const reducers = combineReducers({
  // Remova essa linha depois de adicionar seus ducks
  aplicacoesReducer,
  servicosReducer
});

export default reducers;
