import { call, put, all, takeLatest } from "redux-saga/effects";

import api from "../../../services/api";

import { addServicoSucess } from "./actions";

function* addServico({ id, nome, idAplicacao }) {
  if (nome !== this.state.servicos.servico.nome) {
    id = this.state.servicos.length + 1;
    const response = yield call(api.post, `/aplicacoes/${idAplicacao}/servicos/${id}/detalhar`);

    yield put(addServicoSucess(response.data));
    console.log(id, nome);
  } else {
    return Error; // placeholder
  }
}

export default all([
  takeLatest("@aplicacoes/ADD_REQUEST", addServico),
  takeLatest("@aplicacoes/ADD_SUCESS", addServicoSucess)
]);
