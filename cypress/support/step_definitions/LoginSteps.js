/// <reference types="Cypress" />
/// <reference types="Cypress-xpath" />

import { Before, Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import { when } from "jquery";
import LonginFuncionalidade from '../Funcionaldiades/LoginFuncionalidade'
const loginFuncionalidade= new LonginFuncionalidade


Given('que acesso a Tela de Login do Portal CREDIMOURA', () => {
   cy.visit("https://portaldocliente-qa.propig.com.br/login", { onBeforeLoad: (win) => { win.sessionStorage.clear() } });
   //cy.visit("https://portaldocliente-hml.propig.com.br/ ", { onBeforeLoad: (win) => { win.sessionStorage.clear() } });
    
})

And('preencho o campo Senha com o valor {word}', function (username) {
    loginFuncionalidade.preechecherCampoSenha(username);

});

And('preencho o campo CNPJ com o valor {word}', function (cnpj) {
    loginFuncionalidade.preencherCampoCNPJ(cnpj);
});

And('cliclo no botao Entrar', () => {
    loginFuncionalidade.clicarBotaoEntrar();
    
});

And('clico no Botão Fechar', () => {
    cy.get(".col-12 > .btn").click();
});

And('cliclo no Link Recuperar Senha', () => {
    loginFuncionalidade.clicarLinkRecuperarSenha();
});

And('clico no botão Solicitar um contato agora', () => {
    loginFuncionalidade.clicarBtnSolicitarContato();
});

And('preencho o campo "{word}" com o valor "{word}"', (campo, valor) => {
    loginFuncionalidade.preencherCamposSolicitarContato(campo, valor);
})

When('efetuo o login com sucesso com o dados {word} e {word}', (cnpj, senha) => {
    loginFuncionalidade.preencherCampoCNPJ(cnpj);
    loginFuncionalidade.preechecherCampoSenha(senha);
    loginFuncionalidade.clicarBotaoEntrar();
    
});

when('confirmo o envio da solicitação de contato', () => {
    loginFuncionalidade.clicarBtnSolicitarContatoConfirmar();
});

And('confirmo o envio da solicitação de contato', () => {
    loginFuncionalidade.clicarBtnSolicitarContatoConfirmar();
});

Then('sistema exibe uma tela com mensagem de erro', function () {
    loginFuncionalidade.retornaValidaMensagemErroCamposLogin();
    
});

Then('sistema exibe uma mensagem de erro abaixo do campo Senha', function () {
    loginFuncionalidade.validarMensagemCampoErroCampoSenha();
});

Then('sistema exibe uma mensagem de erro abaixo do campo CNPJ', function () {
    loginFuncionalidade.validarMensagemCampoErroCampoCNPJ();
});

Then('sistema exibe uma tela com a mensagem de Dados invalidos', function () {
    loginFuncionalidade.validarLoginDadosInvalidos();
});

Then('sistema exibe mensagem de obrigatóriedade para os campos "{word}" e "{word}"', (nome, telefone) => {
    loginFuncionalidade.validarCamposObrigatoriosSolicitarContato(nome);
    loginFuncionalidade.validarCamposObrigatoriosSolicitarContato(telefone);
});

Then('sistema exibe mensagem de obrigatóriedade no campo "{word}"', (campo) => {
    loginFuncionalidade.validarCamposObrigatoriosSolicitarContato(campo);
});

Then('sistema exibe mensagem de obrigatóriedade no campo Telefone', () => {
    loginFuncionalidade.validarObrigatoriedadeSolicitarContatoTelefone();
});







