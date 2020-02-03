import { call, put, all, takeLatest, select } from "redux-saga/effects";

import api from "../../../services/api";

import { addAplicacaoSucess, updateAplicacoes } from "./actions";

function* addAplicacaoRequest({ nome }) {
  const aplicacaoExiste = yield select(state =>
    state.aplicacoes.aplicacoes.find(a => a.nome === nome)
  );

  if (aplicacaoExiste) {
    console.log("Erro, nome igual na API");
  } else {
    const response = yield call(api.post, `/aplicacoes/`, { nome });

    yield put(addAplicacaoSucess(response.data));
    yield put(updateAplicacoes);
  }
}

export default all([
  takeLatest("@aplicacoes/ADD_REQUEST", addAplicacaoRequest)
]);
