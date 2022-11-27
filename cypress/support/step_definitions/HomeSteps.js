/// <reference types="Cypress" />

import homeFuncionalidade from '../Funcionaldiades/HomeFuncionalidade';
import extratoCredMoura from '../Funcionaldiades/ExtratoSaldoCreditoMouraFuncionalidade';

When(/^clico no link "([^"]*)"$/, (link) => {
	homeFuncionalidade.selecionarMenuPrincipal(link);
});

When(/^acesso a pagina Meus Dados$/, () => {
	homeFuncionalidade.clicarOpcaoMeusDados();
});

When(/^clico na seta para exibir o nome do usuario$/, () => {
	homeFuncionalidade.clicarExibirTelaDadosCliente();
});

When(/^clico link "([^"]*)"$/, (opcao) => {
	homeFuncionalidade.acessarTelasViaLinks(opcao);
});


When(/^limpo o campo Periodo da aba "([^"]*)"$/, (campo) => {
	homeFuncionalidade.limparCampoPeriodoHome(campo);
});


Then(/^sistema exibe no campo Ultimas vendas a data corrente$/, () => {
	homeFuncionalidade.validarDataCorrenteInputUltimasVendas();
});

Then(/^sistema exibe aba "([^"]*)" selecionada na tela Extrato CredMoura$/, (texto) => {
	extratoCredMoura.validarAbaSelecionada(texto);
});



Then(/^sistema exibe na Home o valor "([^"]*)"$/, (name) => {
	homeFuncionalidade.validarAcessoComSucessoHome(name);
});


Then(/^sistema exibe  O botão Pesquisar desabilitado para a aba "([^"]*)"$/, (campo) => {
	homeFuncionalidade.validarBotaoPesquisarHomedesabilitado(campo);
});





