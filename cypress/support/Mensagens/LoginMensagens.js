class LoginErroMensagens {

    mensagemTelaLoginErro(){ return 'O campo senha deve ser preenchido' }

    mensagemDadosInvalidos(){ return ' Usuário e/ou senha inválidos ' }

    menssagemErroCampoNomeSolicitarContato () { return 'Nome é um campo obrigatório.'}

    menssagemErroCampoTelefoneSolicitarContato () { return 'Telefone para contato é obrigatório.'}
}

export default new LoginErroMensagens();