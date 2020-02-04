import { all } from "redux-saga/effects";

import aplicacoes from "./aplicacoes/sagas";
import servicos from "./servicos/sagas";

export default function* rootSaga() {
  return yield all([aplicacoes, servicos]);
}
