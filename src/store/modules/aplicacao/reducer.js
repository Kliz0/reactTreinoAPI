import produce from 'immer';

export default function aplicacao(state = [], action) {
    switch(action.type) {
        case '@aplicacoes/ADD_SUCESS':
            return produce(state, draft => {
                const aplicacaoNome = draft.aplicacaoNome(a => a.Nome)
            })


        default:     
    }
}