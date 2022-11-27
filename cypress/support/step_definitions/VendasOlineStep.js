import { Before, After, Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import vendasOlineFuncionalidade from '../Funcionaldiades/vendasOlineFuncionalidade';

And('seleciono o valor {word} no campo Selecionar Terminal', (opcao) =>{
    vendasOlineFuncionalidade.selecionarValorSelecionadoComboTerminal(opcao);
});

And('clico no botao Pesquisar', () => {
    vendasOlineFuncionalidade.clicarBotaoPesquisar();
});

And('faço logout do sistema', () => {
    vendasOlineFuncionalidade.clicarBtnSair();
    vendasOlineFuncionalidade.clicarBtnSairTelaConfirmar();
});

And('Preencher o campo Periodo com os valores {word} e {word}', (inicio, fim) => {
    const data = inicio + " " + fim;
    vendasOlineFuncionalidade.digitarCampoPeriodo(data);
})

Then('sistema exibe no campo Periodo a data corrente', () => {
    vendasOlineFuncionalidade.validarDataCorrenteInputPeriodo();
});

And('limpo o campo Periodo', () => {
    vendasOlineFuncionalidade.limparCampoPeriodo();
});

Then('o botao Pesquisar se encontra desabilitado', () => {
    vendasOlineFuncionalidade.validarBtnPesquisarDesabilitado();
});

Then('Sistema exibe na Grid de Resultado o valor {word} na coluna Data Venda', (valor) => {
    vendasOlineFuncionalidade.validarGridResultadoPesquisa(valor);
});

Then('Sistema exibe a mensagem Nenhuma venda foi encontrada!', () => {
    vendasOlineFuncionalidade.validarGridResultadoSemRetorno();
});

Then('Sistema exibe o texto {word} como valor selecionado por Default', (valor) => {
    vendasOlineFuncionalidade.validarValorSelecionadoDefaultCampoTerminal(valor);
});