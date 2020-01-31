import { call, put, all, takeLatest, select } from "redux-saga/effects";

import api from "../../../services/api";

import {  addAplicacaoSucess } from "./actions";

function* addAplicacaoRequest({nome}) {
  const aplicacaoExiste = yield select(state =>
    state.aplicacoes.find(a => a.nome === nome),
    console.log(this.state.aplicacoes)
  );

  if (aplicacaoExiste) {
    console.log("Erro, nome igual na API");
  } else {
    const response = yield call(api.post, `/aplicacao/`, {nome});
    

    yield put(addAplicacaoSucess(response.data));
    console.log(this.state.aplicacoes);
  }
}

export default all([
  takeLatest("@aplicacoes/ADD_REQUEST", addAplicacaoRequest)
]);
