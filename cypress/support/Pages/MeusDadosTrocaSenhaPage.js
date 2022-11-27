class MeusDadosTrocaSenhaPage {

    inputSenhaAtual = () => { return '#senhaAtual'}
    inputNovaSenha = () => { return '#novaSenha'}
    inputConfirmarSenha = () => { return '#confirmarNovaSenha'}

    mensagemErroSenhaAtual = () => { return ':nth-child(17) > .modal-dialog > .modal-content > .modal-body'}
    mensagemErroDigiteNovaSenha = () => { return ':nth-child(17) > .modal-dialog > .modal-content > .modal-body'}
    mensagemErroDigiteSemCampoSenha = () => { return ':nth-child(17) > .modal-dialog > .modal-content > .modal-body'}
    campoNovaSenhaMenosSeisDigitos = () => { return ':nth-child(4) > .ng-star-inserted'}
    mensagemSenhasDiferentes = () => { return ':nth-child(17) > .modal-dialog > .modal-content > .modal-body'}
    mensagemNovaSenhaJaUtilizadaUltimosTresMeses = () => { return '#required-field-message'}
    senhaAtualIncorreta = () => { return '#required-field-message'}

    btnTrocaSenha = () => { return '[ng-reflect-ng-class="btn-descartar"]'}

    btnFecharTrocaSenha = () => { return '.modal-footer > .btn'}

}

export default new MeusDadosTrocaSenhaPage();