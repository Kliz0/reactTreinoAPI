export function addAplicacao(nome) {
    return {
        type: '@aplicacoes/addAplicacao',
        nome,
    };
}