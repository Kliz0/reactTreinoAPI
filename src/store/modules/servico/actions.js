export function addServicoRequest(nome) {
    return {
        type: '@servicos/ADD_REQUEST',
        nome,
    };
}

export function addServicoSucess(servico) {
    return {
        type: '@servicos/ADD_SUCESS',
        servico,
    }
}