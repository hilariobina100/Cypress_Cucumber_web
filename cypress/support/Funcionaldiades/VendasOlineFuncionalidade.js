/// <reference types="Cypress" />

import vendasOnlinePage from '../Pages/VendasOlinePage';
import RecebimentoMensagens from '../Mensagens/RecebimentoMensagens';


class VendasOlineFuncionalidade {

    selecionarValorSelecionadoComboTerminal(opcao) {
        cy.get('.title-spinner', { timeout: 40000 }).should('not.be.visible')
        cy.get(vendasOnlinePage.selecionarTerminal()).select(opcao);
    };

    clicarBotaoPesquisar() {
        cy.get(vendasOnlinePage.btnPessquisar()).click();
    };

    validarDataCorrenteInputPeriodo() {
        cy.get(vendasOnlinePage.inputPeriodo()).then(($error) => {
            const date = new Date();
            const firtDay = new Date(date.getFullYear(), date.getMonth(), 1);
            const firstDayDate = firtDay.toLocaleDateString();
            const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
            const lasttDayDate = lastDay.toLocaleDateString();
            const dataIncioFim = firstDayDate + ' - ' + lasttDayDate
            const msgErro = $error.val();
            expect(msgErro).is.eq(dataIncioFim);

        });

    };

    clicarBtnSair() {
        cy.get(vendasOnlinePage.btnSair()).click();
    };

    clicarBtnSairTelaConfirmar() {

        cy.get(vendasOnlinePage.btnSairTelaConfirmar()).click();

    };

    limparCampoPeriodo() {
       cy.get(vendasOnlinePage.inputPeriodo()).clear();
    };

    digitarCampoPeriodo(periodo) {
        cy.get(vendasOnlinePage.inputPeriodo()).type(periodo);
    };

    validarBtnPesquisarDesabilitado() {
        cy.get(vendasOnlinePage.btnPessquisar()).should('be.disabled');
    };

    validarGridResultadoPesquisa(valor) {
       cy.get(':nth-child(2) > tr > :nth-child(2)').then(($error) => {
            const msgErro = $error.text();
            expect(msgErro.trim()).is.eq(valor);

        }); 

    };

    validarGridResultadoSemRetorno(){
        cy.get('.text-no-results').then(($error)=> {
            const msgErro = $error.text();
            expect(msgErro).is.eq(RecebimentoMensagens.gridSemResultadoDeRetorno());

        });
    };

    validarValorSelecionadoDefaultCampoTerminal(valor){
        const terminal = cy.get('#inputState option:selected');
        expect(terminal.contains(valor)).to.be.ok;
            
    };

    selecionarMenuPrincipal(opcao){
        cy.get('.title-spinner', { timeout: 60000 }).should('not.be.visible')
        cy.get(vendasOnlinePage.menuPrincipal()).contains(opcao).click();
    };

    clicarSubLink(opcao){
        cy.get('.nav-link-dropdown > button').contains(opcao).click();
    }

}


export default new VendasOlineFuncionalidade();