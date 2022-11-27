import { Before, After, Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import vendasOlineFuncionalidade from '../Funcionaldiades/vendasOlineFuncionalidade'
import MeusDados from '../Funcionaldiades/MeusDadosFuncionalidade';

Then('Sitema exibe mensagem de Boas Vindas com o nome do Usuário', () => {
    MeusDados.validarMensagemBoasVindas();
})

And('clico no botão Editar Conta Bancaria', () => {
    MeusDados.clicarBntEditarContaBancaria();

});

When('clico em Enviar', () => {
    MeusDados.clicarBntEnviar();

});

Then('Sistema exibe uma tela com a mensagem Campos obrigatórios estão vazios!', () => {
    MeusDados.validarMensagemErroTelaContaBancaria();
});

And('preencho o campo {word} com o valor {word}', (campo, valor) => {
    MeusDados.preencherCamposDadosBancarios(campo,valor);

})

And('clico no botão Fechar', () => {
    MeusDados.clicarBtnFechar();
})

And('seleciono o banco no combo Banco', () => {
    const banco = '341 - BANCO ITAÚ';
    MeusDados.selecionarBanco(banco);
})

Then('sistema exibe a mensagem {word} {word} {word}', (campo,campo1,campo2) => {
    const mensagem = campo + " " + campo1 + " " + campo2;
    MeusDados.validarMensagemObrigatoriedadeDadosBancarios(mensagem, campo);
})

Then('sistema exibe a mensagem Digito da Conta é obrigatório.', () =>{
    const mensagem = 'Dígito da conta é obrigatório.';
    const campo = 'Digito';
    MeusDados.validarMensagemObrigatoriedadeDadosBancarios(mensagem, campo);
})


When(/^Clico no botao Editar Contato$/, () => {
	MeusDados.clicarBtnContato();
});

When(/^limpo o campo "([^"]*)" da tela Contato$/, (campo) => {
MeusDados.limparCamposTelaEditarContato(campo);
});

When(/^digito no campo "([^"]*)" o valor "([^"]*)"$/, (campo,valor) => {
	MeusDados.preencherCamposTelaEditarContato(campo,valor);
});

Then(/^Sistema exibe as mensagens "([^"]*)" e "([^"]*)"$/, (args1,args2) => {
	MeusDados.validarTelaErroContato(args1,args2);
});

Then(/^Sistema exibe a mensagem "([^"]*)" para o campo "([^"]*)"$/, (msg,campo) => {
	MeusDados.validarMensagemCampoObrigatorioContato(msg,campo);
});


Then(/^Sistema exibe a mensagem "([^"]*)" para o campo E-mail$/, (msg) => {
	MeusDados.validarEmailInvalidoTelaEditarContato(msg);
});