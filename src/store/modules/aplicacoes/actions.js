export function addAplicacaoRequest(nome) {
  return {
    type: "@aplicacoes/ADD_REQUEST",
    nome
  };
}

export function addAplicacaoSucess(aplicacao) {
  return {
    type: "@aplicacoes/ADD_SUCESS",
    aplicacao
  };
}

export function updateAplicacoesRequest(aplicacoes) {
  return {
    type: "@aplicacoes/UPDATE_REQUEST",
    aplicacoes
  };
}

export function updateAplicacoesSuccess(aplicacoes) {
  return {
    type: "@aplicacoes/UPDATE_SUCESS",
    aplicacoes
  };
}
