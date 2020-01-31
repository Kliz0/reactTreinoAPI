import produce from "immer";
import api from "../../../services/api";
import aplicacoes from "../aplicacoes/reducer";

const INITIAL_STATE = {
  servicos: api.get(aplicacoes.servicos)
}

export default function servicos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "@servicos/ADD_SUCESS":
      return produce(state, draft => {
        draft.push(action.servico);
      });

    case "@servicos/ADD_REQUEST":
      return [...state, action.servico];

    case "@servicos/GUARDAR_APLICACOES_TESTE":
      return state;

    default:
      return state;
  }
}
