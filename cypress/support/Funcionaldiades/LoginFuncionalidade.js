/// <reference types="Cypress" />

import LoginPage from "../Pages/LoginPage";
import LoginMensagens from "../Mensagens/LoginMensagens";

class LonginFuncionalidade {

    preencherCampoCNPJ(valor) {
        cy.get('#user').type(valor, { force: true });

    };

    preechecherCampoSenha(valor) {
        cy.get('#password').type(valor, { force: true });
    };

    clicarBotaoEntrar() {
        cy.get(LoginPage.btnEntrar()).click();
        cy.get('.title-spinner', { timeout: 20000 }).should('not.be.visible')
    
    };

    clicarLinkRecuperarSenha() {
       cy.get('.teste').click();

    };

    retornaValidaMensagemErroCamposLogin() {
        cy.get('.alternativa-erro').then(($error) => {
            const msgErro = $error.text();
            expect(msgErro).is.eq('Preencha os campos com seu CNPJ, usuário e senha válidos para entrar no sistema. ');

        });

    }

    validarMensagemCampoErroCampoCNPJ(txt) {
        cy.get('#user-required-message').then(($error) => {
            const msgErro = $error.text();
            expect(msgErro).is.eq('O campo documento deve ser preenchido');

        });

    }

    validarMensagemCampoErroCampoSenha() {
        cy.get('#password-required-message').then(($error) => {
            const msgErro = $error.text();
            expect(msgErro).is.eq(LoginMensagens.mensagemTelaLoginErro());

        });
    }

    validarLoginDadosInvalidos() {
        cy.get('h6.m-4').then(($error) => {
            const msgErro = $error.text();
            expect(msgErro).is.eq(LoginMensagens.mensagemDadosInvalidos());

        });

    };

    clicarBtnSolicitarContato() {
        cy.get(LoginPage.btnSolicitarContato()).click();
    };

    clicarBtnSolicitarContatoConfirmar() {
        cy.get(LoginPage.btnSolicitarContatoConfirmar()).click();
    };

    preencherCamposSolicitarContato(campo, valor) {
        switch (campo) {
            case 'Nome':
                cy.get(LoginPage.inputSolicitarContatoNome()).type(valor);
                break;
            case 'Telefone':
                cy.get(LoginPage.inputSolicitarContatoTelefone()).type(valor);
                break;

            default:
                break;
        }
    };
    validarCamposObrigatoriosSolicitarContato(campo) {
        switch (campo) {
            case 'Nome':
                cy.get(LoginPage.msgSolicitarContatoErroCampoNome()).then(($nome) => {
                    const msg = $nome.text();
                    expect(msg.trim()).is.eq(LoginMensagens.menssagemErroCampoNomeSolicitarContato());
                });
                break;
            case 'Telefone':
                cy.get(LoginPage.msgSolicitarContatoErroCampoTelefone()).then(($nome) => {
                    const msg = $nome.text();
                    expect(msg.trim()).is.eq(LoginMensagens.menssagemErroCampoTelefoneSolicitarContato());
                });
                break;

            default:
                break;
        }
    };

    validarObrigatoriedadeSolicitarContatoTelefone() {
        cy.get(LoginPage.msgSolicitarContatoErroCampoTelefone1()).then(($nome) => {
            const msg = $nome.text();
            expect(msg.trim()).is.eq(LoginMensagens.menssagemErroCampoTelefoneSolicitarContato());
        });

    }

}

export default LonginFuncionalidade;