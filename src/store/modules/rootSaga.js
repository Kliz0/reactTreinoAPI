import { all } from "redux-saga/effects";

import aplicacao from "./aplicacao/sagas";

export default function* rootSaga() {
  return yield all([aplicacao]);
}