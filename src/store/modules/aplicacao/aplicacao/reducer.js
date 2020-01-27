import produce from 'immer';

export default function aplicacao(state = [], action) {
    switch(action.type) {
        case '@aplicacoes/addAplicacao':
            return produce(state, draft => {
                const aplicacaoId = draft.aplicacaoId(a => a.id)
            })
    }
}