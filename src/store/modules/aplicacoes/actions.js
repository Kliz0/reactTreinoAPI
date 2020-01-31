export function addAplicacaoRequest(nome) {
    return {
        type: '@aplicacoes/ADD_REQUEST',
        nome
    };
}

export function addAplicacaoSucess(aplicacao) {
    return {
        type: '@aplicacoes/ADD_SUCESS',
        aplicacao

        
    }
}

export function guardarAplicacao(aplicacoes) {
    return {
        type: "@aplicacoes/GUARDAR_APLICACOES",
        aplicacoes
    }
}