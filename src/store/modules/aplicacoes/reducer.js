import produce from "immer";
import api from "../../../services/api";

const INITIAL_STATE = {
  aplicacoes: []
};

export default function aplicacoes(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "@aplicacoes/ADD_SUCESS":
      return this.setState([...INITIAL_STATE, action.aplicacao]);

    case "@aplicacoes/ADD_REQUEST":
      return {
        ...state,
        aplicacoes: [...state.aplicacoes, action.nome]
      };

    case "@aplicacoes/UPDATE_REQUEST":
      return {
        ...state
      };

    case "@aplicacoes/UPDATE_SUCCESS":
      return {
        ...state,
        aplicacoes: action.aplicacoes
      };

    default:
      return state;
  }
}
