import { When, And, Then } from "cypress-cucumber-preprocessor/steps";
import extratoSaldo from '../Funcionaldiades/ExtratoSaldoCreditoMouraFuncionalidade'
import vendasOlineFuncionalidade from '../Funcionaldiades/vendasOlineFuncionalidade'


When(/^clico no Sublink "([^"]*)"$/, (link) => {
    vendasOlineFuncionalidade.clicarSubLink(link);
});

When(/^clico na aba "([^"]*)" da tela de Recebimento$/, (aba) => {
	extratoSaldo.clicarAbaTelaRecebimento(aba);
    
});

When(/^digito no campo Periodo o data corrente em incio e fim$/, () => {
	const data = extratoSaldo.retornarDataCorrentePeriodo() + '-' + extratoSaldo.retornarDataCorrentePeriodo();
    vendasOlineFuncionalidade.digitarCampoPeriodo(data);
});

When(/^clico no botao Pesquisar da tela de Recebimentos Detalhados$/, () => {
	extratoSaldo.clicarBotaoPesquisarRecebimentosDetalhados();
});

Then(/^Sistema exibe na Label Total liquido o mesmo valor que a soma da coluna Valor Liquido Cliente da Grid$/, () => {
	extratoSaldo.validarTotalLiquidoDetalhadosPorDia();
});

Then(/^Sistema exibe na Label Total Bruto o mesmo valor que a soma da coluna Valor Bruto da Grid$/, () => {
	extratoSaldo.validarTotalBrutoDetalhadosPorDia();
});

Then(/^o valor Total de Total de Créditos do mês da aba Agenda de Creditos é igual ao Crédito no período da aba Extrato Detalhado$/, () => {
	extratoSaldo.ValidaCreditoMesXCreditoPerido();
});

Then(/^sistema exibe o valor "([^"]*)" para nome da tela e a data do dia atual como default$/, (abaSelecionada) => {
    extratoSaldo.validarAbaSelecionada(abaSelecionada);
    
	
});

Then(/^o valor Total de Débitos do mês da aba Agenda de Creditos é igual ao Débito no periodo da aba Extrato Detalhado$/, () => {
    extratoSaldo.ValidaDebitoMesXDebitoPerido();
    
 });
 
Then(/^Sistema exibe na Label Recebimento de hoje o mesmo valor que a soma da coluna valor Liquido Cliente da Grid$/, () => {
	extratoSaldo.validarRecebimentoDeHojeDetalhadosPorDia();
});


Then(/^sistema exibe no campo Periodo Data inicio igual a Data corrente e Data Final igual a atual menos 60 dias$/, () => {
	const data = extratoSaldo.retornarDataCorrentePeriodoMenosDias(60) + ' - ' + extratoSaldo.retornarDataCorrentePeriodo();
    extratoSaldo.validarCampoPeriodoCreditoExtratoDetalhado(data);
});