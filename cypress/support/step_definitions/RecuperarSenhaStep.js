/// <reference types="Cypress" />

import { Before, Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import recuperarSenhaFuncionalidade from '../Funcionaldiades/RecuperarSenhaFuncionaldiade'

const recuperarSenha = new recuperarSenhaFuncionalidade


When('cliclo no botao Recuperar Senha', () => {
    recuperarSenha.clicarBotaoRecuperarSenha();
});

When('preencho o campo EMAIL com o valor {word}', (email) => {
  recuperarSenha.preencherCampoEmail(email);
})


Then('sistema exibe mensagem de erro abaixo dos campos CNPJ e Email', () => {
    recuperarSenha.validarMensagemErroFornularioCNPJ();
    recuperarSenha.validarMensagemErroFornularioEmail();
});

Then('sistema exibe mensagem de erro abaixo dos campos Email', () => {
    recuperarSenha.validarMensagemErroFornularioEmail();
});

Then('sistema exibe mensagem de erro abaixo do campo CNPJ', () => {
    recuperarSenha.validarMensagemErroFornularioCNPJ();
});

Then('sistema exibe uma Tela com Mensagem de erro ao Enviar Email', () => {
    recuperarSenha.validarMenssagemDeEmailInvalidosTela();
});