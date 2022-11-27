import { Before, After, Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"
import trocarSenha from '../Funcionaldiades/MeusDadosTrocaSenhaFuncionalidade';
import meusDados from '../Funcionaldiades/MeusDadosFuncionalidade';


When(/^clico no botao Trocar Senha da tela Meus Dados$/, () => {
    meusDados.clicarBntTrocarSenha();
});


When(/^clico no botao Trocar Senha da Tela Troca Senha$/, () => {
    trocarSenha.clicarBtnTrocarSenha();
});


When(/^clico no botao Fechar na tela de Trocar Senha$/, () => {
	trocarSenha.clicarBtnFechar()
});



When(/^digito o valor "([^"]*)" para o campo "([^"]*)" na Tela Troca Senha$/, (valor, campo) => {
    trocarSenha.preencherCamposTrocarSenha(campo, valor);
});



Then(/^Sistema exibe a mensagem "([^"]*)" para o campo "([^"]*)" em Trocar Senha$/, (mensagem, campo) => {
    trocarSenha.validarTrocarSenhaSemPreencherUmCampo(campo, mensagem);
});

Then(/^Sistema exibe a mensagem "([^"]*)" para Senhas Diferentes$/, (mensagem) => {
	trocarSenha.validarSenhaAtualConfirmarSenhaDiferentes(mensagem);
});


Then(/^Sistema exibe a mensagem "([^"]*)" senha já utlizada$/, (mensagem) => {
	trocarSenha.validarSenhaAtualJaUtilizda(mensagem);
});


Then(/^Sistema exibe a mensagem "([^"]*)" para Menos de 6 caracteres$/, (mensagem) => {
	trocarSenha.validarSenhaAtualMenosSeisDigitos(mensagem);
});