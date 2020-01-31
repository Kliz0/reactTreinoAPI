import produce from "immer";
import api from "../../../services/api";

const INITIAL_STATE = {
  aplicacoes: api.get(aplicacoes)
}

export default function aplicacoes(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@aplicacoes/ADD_SUCESS':
      /* return  this.setState(produce(state, draft => {
        console.log(this.state.aplicacoes);

        const { aplicacao } = action.aplicacao;
        draft.push(aplicacao);
         draft.aplicacao = aplicacao; 

        console.log(this.state.aplicacoes);

         draft.push(action.aplicacao);
      })); */

      return this.setState([...INITIAL_STATE, action.aplicacao]);

    case '@aplicacoes/ADD_REQUEST':
      return {
        ...state.aplicacoes,
        aplicacoes: [...INITIAL_STATE, action.nome]
      };

    /*       

    case "@aplicacoes/GUARDAR_APLICACOES":
      return { ...state, aplicacoes: action.aplicacoes }; */

    default:
      return state;
  }
}
