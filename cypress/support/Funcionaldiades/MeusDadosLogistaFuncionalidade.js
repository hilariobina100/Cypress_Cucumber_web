/// <reference types="Cypress" />
import logista from '../Pages/MeusDadosLogistaPage';

class MeusDadosLogistaFuncionalidade {


    limparCampos(campo) {
        switch (campo) {
            case 'Cep':
                cy.get(logista.inputCep()).clear();
                break;
            case 'Logradouro':
                cy.get(logista.inputLogradouro()).clear();
                break;

            case 'Numero':
                cy.get(logista.inputNumero()).clear();
                break;
            case 'Bairro':
                cy.get(logista.inputBairro()).clear();
                break;
            case 'Estado':
                cy.get(logista.inputEstado()).clear();
                break;
            case 'Cidade':
                cy.get(logista.inputCidade()).clear();
                break;

            default:
                break;
        }
    }

    validarMensagemCampoObrigatorio(campo, mensagem){
        switch (campo) {
            case 'Cep':
                cy.get(logista.campoObrigatorioCep()).then(($msg)=>{
                    const valorCep = $msg.text();
                    expect(valorCep.trim()).is.eq(mensagem);
                });
                break;
            case 'Logradouro':
                cy.get(logista.campoObrigatorioLogradouro()).then(($msg)=>{
                    const valorCep = $msg.text();
                    expect(valorCep.trim()).is.eq(mensagem);
                });
                break;

            case 'Numero':
                cy.get(logista.campoObrigatorioNumero()).then(($msg)=>{
                    const valorCep = $msg.text();
                    expect(valorCep.trim()).is.eq(mensagem);
                });
                break;
            case 'Bairro':
                cy.get(logista.campoObrigatorioBairro()).then(($msg)=>{
                    const valorCep = $msg.text();
                    expect(valorCep.trim()).is.eq(mensagem);
                });
                break;
            case 'Estado':
                cy.get(logista.campoObrigatorioEstado()).then(($msg)=>{
                    const valorCep = $msg.text();
                    expect(valorCep.trim()).is.eq(mensagem);
                });
                break;
            case 'Cidade':
                cy.get(logista.campoObrigatorioCidade()).then(($msg)=>{
                    const valorCep = $msg.text();
                    expect(valorCep.trim()).is.eq(mensagem);
                });
                break;
        
            default:
                break;
        }
    }

    validarRetornoBucaCep(campo, mensagem){
        switch (campo) {
            case 'Logradouro':
                cy.get(logista.inputLogradouro()).then(($msg)=>{
                    const valorCep = $msg.text();
                    expect(valorCep.trim()).is.eq(mensagem);
                });
                break;            
            case 'Bairro':
                cy.get(logista.inputBairro()).then(($msg)=>{
                    const valorCep = $msg.text();
                    expect(valorCep.trim()).is.eq(mensagem);
                });
                break;
            case 'Estado':
                cy.get(logista.inputEstado()).then(($msg)=>{
                    const valorCep = $msg.text();
                    expect(valorCep.trim()).is.eq(mensagem);
                });
                break;
            case 'Cidade':
                cy.get(logista.inputCidade).then(($msg)=>{
                    const valorCep = $msg.text();
                    expect(valorCep.trim()).is.eq(mensagem);
                });
                break;
        
            default:
                break;
        }
    }

    digitarCampo(campo, valor){
        switch (campo) {
            case 'Cep':
                cy.get(logista.inputCep()).type(valor);
                break;
            case 'Logradouro':
                cy.get(logista.inputLogradouro()).type(valor);
                break;

            case 'Numero':
                cy.get(logista.inputNumero()).type(valor);
                break;
            case 'Bairro':
                cy.get(logista.inputBairro()).type(valor);
                break;
            case 'Estado':
                cy.get(logista.inputEstado()).type(valor);
                break;
            case 'Cidade':
                cy.get(logista.inputCidade).type(valor);
                break;

            default:
                break;
        }
    }

}

export default new MeusDadosLogistaFuncionalidade();