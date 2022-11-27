class MeusDados {

    labelBoasVindas = () => { return '#dados-cadastrais > h3'};
    btnEditarDadosBancarios = () => { return '.icon-editar-bank > i'};
    btnEditarContato = () => { return '.icon-editar-contato > i'};
    btnEditarLogista = () => { return '.icon-editar-endereco-lojistas'};
    erroMensagemTela01 = () => { return '.col-md-9 > h4'};
    erroMensagemTela02 = () => { return '.alternativa-erro'};
    btnEnviar = () => { return '.row > .btn-trocar-senha'};
    btnTrocarSenha = () => { return '.btn-trocar-senha'}

    //Pagina Dados Bancários
    
    selectBanco = () => { return '#banco'};
    checkBoxContaCorrente = () => { return ':nth-child(2) > .checkmark'};
    inputAgencia =() => { return '#agencia'};
    inputConta = () => { return '#conta'};
    inputDigito = () => { return '#digito_conta'};

    mensagemCampoObrigatorioBanco = () => { return '.col-md-12 > .form-group > .invalid-feedback > .ng-star-inserted'};
    mensagemCampoObrigatorioAgencia = () => { return ':nth-child(3) > :nth-child(1) > .form-group > .invalid-feedback > .ng-star-inserted'};
    mensagemCampoObrigatorioConta = () => { return ':nth-child(2) > .form-group > .invalid-feedback > .ng-star-inserted'};
    mensagemCampoObrigatorioDigitoConta = () => { return ':nth-child(3) > .form-group > .invalid-feedback > .ng-star-inserted'};

    btnFechar = () => { return '.col-12 > .btn'};

     //Pagina Contatos

     inputContatoNome = () => { return '#nome'}
     inputContatoTelefone = () => { return '#telefone'}
     inputContatoEmail = () => { return '#email'}

     mensagemCampoObrigatórioContatoNome = () => { return ':nth-child(1) > .form-group > .invalid-feedback > .ng-star-inserted'}
     mensagemCampoObrigatórioContatoEmail = () => { return ':nth-child(3) > .form-group > :nth-child(3) > .ng-star-inserted'}
     mensagemEmailInvalidoContato = () => { return ':nth-child(4) > .ng-star-inserted'}
}

export default new MeusDados();

