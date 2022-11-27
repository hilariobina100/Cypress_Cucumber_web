import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import logista from '../Funcionaldiades/MeusDadosLogistaFuncionalidade';
import meusDados from '../Funcionaldiades/MeusDadosFuncionalidade';


When(/^clico no botao Editar Logista$/, () => {
    meusDados.clicarBtnLogista();
});


When(/^limpo o campo "([^"]*)"$/, (campo) => {
	logista.limparCampos(campo);
});


Then(/^Sistem exibe a mensagem "([^"]*)" para o campo "([^"]*)" na tela Logista$/, (msg,campo) => {
	logista.validarMensagemCampoObrigatorio(campo,msg);
});

