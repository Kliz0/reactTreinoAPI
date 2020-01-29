import produce from "immer";

export default function servico(state = [], action) {
  switch (action.type) {
    case "@servicos/ADD_SUCESS":
      return produce(state, draft => {
        draft.push(action.servico);
      });

    case "@servicos/ADD_REQUEST":
      return [...state, action.servico];

    case "@aplicacoes/GUARDAR_APLICACOES_TESTE":
      return state;

    default:
      return state;
  }
}
