import { call, put, all, takeLatest, select } from "redux-saga/effects";

import api from "../../../services/api";

import { addAplicacaoSucess, updateAplicacoesSuccess } from "./actions";

function* addAplicacaoRequest({ nome }) {
  const aplicacaoExiste = yield select(state =>
    state.aplicacoesReducer.aplicacoes.find(a => a.nome === nome)
  );

  if (aplicacaoExiste) {
    console.log("Erro, nome igual na API");
  } else {
    const response = yield call(api.post, `/aplicacoes/`, { nome });

    yield put(addAplicacaoSucess(response.data));
     yield put(updateAplicacoes());
  }
}

function* updateAplicacoes() {
  yield select(state => state.aplicacoesReducer.aplicacoes);
  yield put(updateAplicacoesSuccess());
}

export default all([
  takeLatest("@aplicacoes/ADD_REQUEST", addAplicacaoRequest),
  takeLatest("aplicacoes/UPDATE_REQUEST", updateAplicacoes)
]);
