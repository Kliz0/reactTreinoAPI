import { call, put, all, takeLatest, select } from "redux-saga/effects";

import api from "../../../services/api";

import { addServicoSucess } from "./actions";

function* addServicoRequest({ nome, id, idAplicacao }) {
  const servicoExiste = yield select(state =>
    state.servicosReducer.servicos.find(s => s.nome === nome)
  );
  if (!servicoExiste) {
    id = this.state.servicos.length + 1;
    const response = yield call(
      api.post,
      `/aplicacoes/${idAplicacao}/servicos/`,
      {id}
    );

    yield put(addServicoSucess(response.data));
    console.log(nome);
  } else {
    return Error; // placeholder
  }
}

export default all([
  takeLatest("@servicos/ADD_REQUEST", addServicoRequest),
]);
