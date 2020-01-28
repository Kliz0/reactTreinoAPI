import produce from "immer";

export default function aplicacao(state = [], action) {
  switch (action.type) {
    case "@aplicacoes/ADD_SUCESS":
      return produce(state, draft => {
        draft.push(action.aplicacao);
      });

    case "@aplicacoes/ADD_REQUEST":
      return [...state, action.aplicacao];

    case "@aplicacoes/GUARDAR_APLICACOES_TESTE":
      return state;

    default:
      return state;
  }
}
