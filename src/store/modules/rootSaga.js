import { all } from "redux-saga/effects";

import aplicacao from "./aplicacao/sagas";
import servico from "./servico/sagas";

export default function* rootSaga() {
  return yield all([aplicacao, servico]);
}
