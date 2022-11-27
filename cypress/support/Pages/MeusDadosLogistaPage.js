import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

class MeusDadosLogistaPage {

    inputCep = () => { return '#cep'}
    inputLogradouro = () => { return '#logradouro'}
    inputNumero = () => { return '#numero'}
    inputBairro = () => { return '#bairro'}
    inputEstado = () => { return '#estado'}
    inputCidade = () => { return '#cidade'}
    inputLogista = () => { return '#cep'}
    btnBuscarCep = () => { return '.btn-buscar-cep'}

    campoObrigatorioCep = () => { return ':nth-child(1) > :nth-child(1) > .form-group > .invalid-feedback > .ng-star-inserted'}
    campoObrigatorioLogradouro = () => { return '.col-12 > .form-group > .invalid-feedback > .ng-star-inserted'}
    campoObrigatorioNumero = () => { return ':nth-child(2) > .form-group > .invalid-feedback > .ng-star-inserted'}
    campoObrigatorioBairro = () => { return ':nth-child(3) > .form-group > .invalid-feedback > .ng-star-inserted'}
    campoObrigatorioEstado = () => { return ':nth-child(4) > .form-group > .invalid-feedback > .ng-star-inserted'}
    campoObrigatorioCidade = () => { return ':nth-child(5) > .form-group > .invalid-feedback > .ng-star-inserted'}


}

export default new MeusDadosLogistaPage();