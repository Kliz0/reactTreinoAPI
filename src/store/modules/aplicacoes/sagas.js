import { call, put, all, takeLatest, select } from "redux-saga/effects";

import api from "../../../services/api";

import { addAplicacaoSucess } from "./actions";

function* addAplicacao({ id, nome }) {
  const aplicacaoExiste = yield select(state =>
    state.aplicacao.find(a => a.nome === nome)
  );

  if (aplicacaoExiste) {
    console.log("Erro, nome igual na API");
  } else {
    const response = yield call(api.post, `/aplicacao/${id}`);
    const data = {
      ...response.data,
      id: Math.random * 1000
    };

    yield put(addAplicacaoSucess(data));
    console.log(this.state.aplicacoes);
  }
}

export default all([takeLatest("@aplicacoes/ADD_REQUEST", addAplicacao)]);