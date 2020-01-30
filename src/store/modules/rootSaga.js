import { all } from "redux-saga/effects";

import aplicacao from "./aplicacoes/sagas";
import servico from "./servico/sagas";

export default function* rootSaga() {
  return yield all([aplicacao, servico]);
}
