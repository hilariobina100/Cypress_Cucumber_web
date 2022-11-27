/// <reference types="Cypress" />

import MeusDadosPage from "../Pages/MeusDadosPage";
import MeusDadosMensagens from "../Mensagens/MeusDadosMensagens"

class MeusDadosFuncionalidade {

    validarMensagemBoasVindas() {

        cy.get(MeusDadosPage.labelBoasVindas()).then(($mgs) => {
            const textMensagem = $mgs.text();
            expect(textMensagem.trim()).is.eq(MeusDadosMensagens.mensagemBoasVindas());
        })

    };

    validarMensagemErroTelaContaBancaria() {

        cy.get(MeusDadosPage.erroMensagemTela01()).then(($el) => {
            const msg = $el.text();
            expect(msg).to.contain(MeusDadosMensagens.mensagemErroExibaEmTela01());
        });

        cy.get(MeusDadosPage.erroMensagemTela02()).then(($el2) => {
            const msg = $el2.text();
            expect(msg).is.eq(MeusDadosMensagens.mensagemErroExibaEmTela02());
        });

    }

    clicarBntEnviar() {
        cy.get(MeusDadosPage.btnEnviar()).click();
    }

    clicarBntEditarContaBancaria() {
        cy.get(MeusDadosPage.btnEditarDadosBancarios()).click();
    }

    clicarBntTrocarSenha() {
        cy.get(MeusDadosPage.btnTrocarSenha()).click();
    }

    validarMensagemObrigatoriedadeDadosBancarios(mensagem, campo) {
        switch (campo) {
            case 'Agência':
                cy.get(MeusDadosPage.mensagemCampoObrigatorioAgencia()).then(($banco) => {
                    const bc = $banco.text();
                    expect(bc.trim()).is.eq(mensagem);
                });
                break;
            case 'Banco':
                cy.get(MeusDadosPage.mensagemCampoObrigatorioBanco()).then(($banco) => {
                    const bc = $banco.text();
                    expect(bc.trim()).is.eq(mensagem);
                });
                break;
            case 'Conta':
                cy.get(MeusDadosPage.mensagemCampoObrigatorioConta()).then(($banco) => {
                    const bc = $banco.text();
                    expect(bc.trim()).is.eq(mensagem);
                });
                break;
            case 'Digito':
                cy.get(MeusDadosPage.mensagemCampoObrigatorioDigitoConta()).then(($banco) => {
                    const bc = $banco.text();
                    expect(bc.trim()).is.eq(mensagem);
                });
                break;
            default:
                break;
        };
    };

    preencherCamposDadosBancarios(campo, valor) {
        switch (campo) {
            case 'Agencia':
                cy.get(MeusDadosPage.inputAgencia()).type(valor);
                break;
            case 'Conta':
                cy.get(MeusDadosPage.inputConta()).type(valor);
                break;
            case 'Digito':
                cy.get(MeusDadosPage.inputDigito()).type(valor);
                break;
            default:
                break;
        };
    };

    clicarBtnFechar() {
        cy.get(MeusDadosPage.btnFechar()).click();
    };

    clicarBtnContato() {
        cy.get(MeusDadosPage.btnEditarContato()).click();
    };

    clicarBtnLogista() {
        cy.get(MeusDadosPage.btnEditarLogista()).click();
    };

    selecionarBanco(banco) {
        cy.get(MeusDadosPage.selectBanco()).select(banco);
    };

    limparCamposTelaEditarContato(campo) {
        switch (campo) {
            case 'Nome':
                cy.get(MeusDadosPage.inputContatoNome()).clear();
                break;
            case 'E-mail':
                cy.get(MeusDadosPage.inputContatoEmail()).clear();
                break;
            case 'Telefone':
                cy.get(MeusDadosPage.inputContatoTelefone()).clear();
                break;
            default:
                break;
        }
    };

    validarTelaErroContato(msg1, msg2) {
        cy.get(MeusDadosPage.erroMensagemTela01()).then(($err) => {
            const mensagem = $err.text();
            expect(mensagem.trim()).is.eq(msg1);
        });
        cy.get(MeusDadosPage.erroMensagemTela02()).then(($err) => {
            const mensagem = $err.text();
            expect(mensagem.trim()).is.eq(msg2);
        });
    };

    validarMensagemCampoObrigatorioContato(msg, campo) {
        switch (campo) {
            case 'Nome':
                cy.get(MeusDadosPage.mensagemCampoObrigatórioContatoNome()).then(($err) => {
                    const mensagem = $err.text();
                    expect(mensagem.trim()).is.eq(msg);
                });
                break;
            case 'E-mail':
                cy.get(MeusDadosPage.mensagemCampoObrigatórioContatoEmail()).then(($err) => {
                    const mensagem = $err.text();
                    expect(mensagem.trim()).is.eq(msg);
                });
                break;

            default:
                break;
        }
    };

    validarEmailInvalidoTelaEditarContato(msg) {
        cy.get(MeusDadosPage.mensagemEmailInvalidoContato()).then(($err) => {
            const mensagem = $err.text();
            expect(mensagem.trim()).is.eq(msg);
        });

    };

    preencherCamposTelaEditarContato(campo, valor) {
        switch (campo) {
            case 'Nome':
                cy.get(MeusDadosPage.inputContatoNome()).type(valor);
                break;
            case 'E-mail':
                cy.get(MeusDadosPage.inputContatoEmail()).type(valor);
                break;
            case 'Telefone':
                cy.get(MeusDadosPage.inputContatoTelefone()).type(valor);
                break;
            default:
                break;
        }
    };

}



export default new MeusDadosFuncionalidade(); 