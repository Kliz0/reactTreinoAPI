import { call, put, all, takeLatest } from "redux-saga/effects";

import api from "../../../services/api";

import { addAplicacaoSucess } from "./actions";

function* addAplicacao({ id, nome }) {
  if (nome !== this.state.aplicacoes.aplicacao.nome) {
    id = this.state.aplicacoes.length + 1;
    const response = yield call(api.post, `/aplicacao/${id}`);

    yield put(addAplicacaoSucess(response.data));
    console.log(id, nome);
  } else {
    return Error; // placeholder
  }
}

export default all([
  takeLatest("@aplicacoes/ADD_REQUEST", addAplicacao),
  takeLatest("@aplicacoes/ADD_SUCESS", addAplicacaoSucess)
]);
