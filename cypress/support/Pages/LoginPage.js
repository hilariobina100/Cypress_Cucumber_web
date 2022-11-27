class LoginPage {


 inputCPNJ = () => { return '#user' }
 inputSenha = () => { return '#password' }
 btnEsqueciSenha = () => { return '.teste'}
 btnEntrar = () => {return '.card-body > .btn'}
 labelErroMessagerCNPJ = () => { return '#user-required-message'}
 labelErroMessagerSenha = () => { return '#password-required-message'}
 btnSolicitarContato = () => { return '#btn-contato'}
 inputSolicitarContatoNome = () => { return '#inputNameDuvida'}
 inputSolicitarContatoTelefone = () => { return '#inputPhoneAntecipacao'}
 btnSolicitarContatoConfirmar = () => { return '.col-12 > .btn'}
 msgSolicitarContatoErroCampoNome = () => { return '.form-group > :nth-child(3) > .ng-star-inserted'}
 msgSolicitarContatoErroCampoTelefone = () => { return ':nth-child(6) > .ng-star-inserted'}
 msgSolicitarContatoErroCampoTelefone1 = () => { return ':nth-child(5) > .ng-star-inserted'}
    
}


export default new LoginPage();