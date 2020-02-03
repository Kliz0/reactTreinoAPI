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

export function updateServicosRequest(servicos) {
    return {
      type: "@aplicacoes/UPDATE_REQUEST",
      servicos
    };
  }
  
  export function updateServicosSuccess(servicos) {
    return {
      type: "@aplicacoes/UPDATE_SUCESS",
      servicos
    };
  }