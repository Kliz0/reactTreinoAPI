export function addAplicacaoRequest(nome) {
    return {
        type: '@servicos/ADD_REQUEST',
        nome,
    };
}

export function addAplicacaoSucess(servico) {
    return {
        type: '@servicos/ADD_SUCESS',
        servico,
    }
}