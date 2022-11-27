import trocarSenha from '../Pages/MeusDadosTrocaSenhaPage';

class MeusDadosTrocaSenhaFuncionaldiade {

    clicarBtnTrocarSenha() {
        cy.get(trocarSenha.btnTrocaSenha()).click();
    };

    clicarBtnFechar() {
        cy.get(trocarSenha.btnFecharTrocaSenha()).click();
    };

    preencherCamposTrocarSenha(campo, valor) {
        switch (campo) {
            case 'Senha Atual':
                cy.get(trocarSenha.inputSenhaAtual()).type(valor);
                break;
            case 'Nova Senha':
                cy.get(trocarSenha.inputNovaSenha()).type(valor);
                break;
            case 'Confirmar Senha':
                cy.get(trocarSenha.inputConfirmarSenha()).type(valor);
                break;

            default:
                break;
        }
    };

    validarTrocarSenhaSemPreencherUmCampo(campo, valor) {
        switch (campo) {
            case 'Senha Atual':
                cy.get(trocarSenha.mensagemErroSenhaAtual()).then(($val) => {
                    const msg = $val.text();
                    expect(msg.trim()).is.eq(valor);
                });
                break;
            case 'Nova Senha':
                cy.get(trocarSenha.mensagemErroDigiteNovaSenha()).then(($val) => {
                    const msg = $val.text();
                    expect(msg.trim()).is.eq(valor);
                });
                break;
            case 'Confirmar Senha':
                cy.get(trocarSenha.mensagemErroDigiteSemCampoSenha()).then(($val) => {
                    const msg = $val.text();
                    expect(msg.trim()).is.eq(valor);
                });
                break;

            default:
                break;
        }
    };

    validarSenhaAtualIncorreta(mensagem){
        cy.get(trocarSenha.senhaAtualIncorreta()).then(($val) => {
            const msg = $val.text();
            expect(msg.trim()).is.eq(mensagem);
        });
    };

    validarSenhaAtualMenosSeisDigitos(mensagem){
        cy.get(trocarSenha.campoNovaSenhaMenosSeisDigitos()).then(($val) => {
            const msg = $val.text();
            expect(msg.trim()).is.eq(mensagem);
        });
    };

    validarSenhaAtualJaUtilizda(mensagem){
        cy.get(trocarSenha.mensagemNovaSenhaJaUtilizadaUltimosTresMeses()).then(($val) => {
            const msg = $val.text();
            expect(msg.trim()).is.eq(mensagem);
        });
    };

    validarSenhaAtualConfirmarSenhaDiferentes(mensagem){
        cy.get(trocarSenha.mensagemSenhasDiferentes()).then(($val) => {
            const msg = $val.text();
            expect(msg.trim()).is.eq(mensagem);
        });
    };
   

}

export default new MeusDadosTrocaSenhaFuncionaldiade();