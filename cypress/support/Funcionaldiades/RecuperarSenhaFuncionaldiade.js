/// <reference types="Cypress" />

import recuMensagens from '../Mensagens/RecuperarSenhaMensagens'


class RecuperarSenhaFuncionaldiade {

    clicarBotaoRecuperarSenha() {
        cy.get('#recovery').click();
    }

    validarMensagemErroFornularioCNPJ() {
        cy.get('#required-field-message').then(($error) => {
            const msgErro = $error.text();
            expect(msgErro).is.eq(recuMensagens.mensagemErroCampoCNPJ());

        });

    }

    validarMensagemErroFornularioEmail() {
        cy.get('#email-required-message').then(($error) => {
            const msgErro = $error.text();
            expect(msgErro).is.eq(recuMensagens.mensagemErroCampoSenha());

        });

    }

    preencherCampoEmail(valor) {
        cy.get('#email').type(valor, { force: true });
    }

    validarMenssagemDeEmailInvalidosTela() {
        cy.get('.col-md-9 > h4').then(($error) => {
            const msgErro = $error.text();
            expect(msgErro).is.eq(recuMensagens.mensagemmErroEmailInvalido());

        });

    }
}

export default RecuperarSenhaFuncionaldiade;