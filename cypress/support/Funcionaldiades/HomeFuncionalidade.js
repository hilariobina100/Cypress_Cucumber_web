import vendasOnlinePage from "../Pages/VendasOlinePage";
import homePage from "../Pages/HomePage";

class HomeFuncionalidade {
  selecionarMenuPrincipal(opcao) {
    cy.get(".title-spinner", { timeout: 60000 }).should("not.be.visible");
    cy.get(".nav-item > .dropdown-toggle").click();
    cy.get(vendasOnlinePage.menuPrincipal()).contains(opcao).click();
  }

  clicarOpcaoMeusDados() {
    cy.wait(35000);
   
    cy.get(".nav-item > .dropdown-toggle").click();
    cy.get(".w-100").click();
  }

  clicarExibirTelaDadosCliente() {
    cy.wait(35000);
    cy.get(".nav-item > .dropdown-toggle").click();
  }

  clicarSubLink(opcao) {
    cy.get(".nav-link-dropdown > button").contains(opcao).click();
  }

  limparCampoPeriodoHome(campo) {
    switch (campo) {
      case "Ultimas Vandas":
        cy.get().clear;
        break;
      case "Recebimento da semana":
        cy.get().clear;
        break;
      default:
        break;
    };
  };

  validarBotaoPesquisarHomedesabilitado(campo){
    switch (campo) {
        case 'Ultimas vendas':
            cy.get().should('be.disabled');
            break;
        case 'Ultimas vendas':
            cy.get().should('be.disabled');
            break;    
    
        default:
            break;
    }
  }

  validarDataCorrenteInputUltimasVendas() {
    cy.get(homePage.inputUtimasVendas()).then(($error) => {
      const date = new Date();
      const firtDay = new Date(date.getFullYear(), date.getMonth(), 1);
      const firstDayDate = firtDay.toLocaleDateString();
      const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
      const lasttDayDate = lastDay.toLocaleDateString();
      const dataIncioFim = firstDayDate + " - " + lasttDayDate;
      const msgErro = $error.val();
      expect(msgErro).is.eq(dataIncioFim);
    });
  }

  acessarTelasViaLinks(opcao) {
    cy.wait(35000);
    switch (opcao) {
      case "Saldo CREDMOURA":
        cy.get(
          ".mt-4.ng-star-inserted > :nth-child(1) > .card > .card-footer > .row > :nth-child(1) > b"
        ).click();
        break;
      case "Créditos a liberar":
        cy.get(
          ":nth-child(2) > .card > .card-footer > .row > :nth-child(1) > b"
        ).click();
        break;

      default:
        break;
    }
  }

  validarAcessoComSucessoHome(name) {
    cy.get(".mb-2").then(($err) => {
      const mensagem = $err.text();
      expect(mensagem.trim()).is.eq(name);
    });
  }
}

export default new HomeFuncionalidade();
