import produce from "immer";
import api from "../../../services/api";
import aplicacoes from "../aplicacoes/reducer";

const INITIAL_STATE = {
  servicos: []
};

export default function servicosReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "@servicos/ADD_SUCESS":
      return this.setState([...INITIAL_STATE, action.servico]);

    case "@servicos/ADD_REQUEST":
      return { ...state, servicos: [...state.servicos, action.nome] };

    case "@servicos/UPDATE_REQUEST":
      return {
        ...state
      };

    case "@servicos/UPDATE_SUCCESS":
      return {
        ...state,
        servicos: action.servicos
      };

    default:
      return state;
  }
}
