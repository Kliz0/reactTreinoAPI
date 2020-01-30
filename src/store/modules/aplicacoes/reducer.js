import produce from "immer";
import api from "../../../services/api";

export default function aplicacoes(state = [api.get(aplicacoes)], action) {
  switch (action.type) {
    case "@aplicacoes/ADD_SUCESS":
      return produce(state, draft => {
        console.log(this.state.aplicacoes);

        const { aplicacao } = action.aplicacao;
        /* draft.push(aplicacao); */
        draft.aplicacao = aplicacao;

        console.log(this.state.aplicacoes);

        // draft.push(action.aplicacao);
      });

    case "@aplicacoes/ADD_REQUEST":
      return { ...state.aplicacoes, aplicacoes: [...state.aplicacoes, action.nome] }
      
      

    case "@aplicacoes/GUARDAR_APLICACOES":
      return { ...state, aplicacoes: action.aplicacoes };

    default:
      return state;
  }
}
