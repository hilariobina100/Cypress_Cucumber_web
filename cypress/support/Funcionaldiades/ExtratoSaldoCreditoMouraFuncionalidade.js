import suporte from '../Funcionaldiades/SuporteFuncionaldiade'


class ExtratoSaldoCreditoMoura {

    validarValoresPositivosAgendaCredito() {
        const array = []
        const arrayAgendaCredito = cy.get('.fc-event-title').then(($el) => {
            return array.push(Array.from($el).map(el => el.innerHTML))
        });

        expect(arrayAgendaCredito).is.eq(5500);
    };

    validarAbaSelecionada(aba) {

        expect(valor.trim()).is.eq(aba); 
        cy.get('.active > strong').then(($err) => {
            const mensagem = $err.text();
            expect(mensagem.trim()).is.eq(aba);
        }); 

    };

    retornaDataDiaString() {
        const now = new Date();
        const monName = new Array("janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro");
        const data = "0" + now.getDate() + " de " + monName[now.getMonth() - 2] + " de " + now.getFullYear();
        return data;

    };

    valiDataDefaultAbaAgendaCreditos(data) {
       
        cy.get('.card-body > h4').then(($err) => {
            const mensagem = $err.text();
            expect(mensagem.trim()).is.eq(data);
        });

    };

    ValidaDebitoMesXDebitoPerido() {
        window.mensagem = "";
        window.mensagem01 = "";
        cy.get(':nth-child(8) > p > .total-recebimentos').then(($err) => {
            var mensagem = $err.val();
            expect(mensagem).is.eq(mensagem)
            this.clicarAba('Extrato Detalhado');
        }).then(($err) => {
            cy.get('.valor-debito').then(($val) => {
                mensagem01 = $val.text();
                expect($err.mensagem).is.eq(mensagem01);
            });
        });

    };

    ValidaCreditoMesXCreditoPerido() {
        window.mensagem = "";
        window.mensagem01 = "";
        cy.get('').then(($err) => {
            var mensagem = $err.val();
            expect(mensagem).is.eq(mensagem)
            this.clicarAba('Extrato Detalhado');
        }).then(($err) => {
            cy.get('.valor-credito').then(($val) => {
                mensagem01 = $val.text();
                expect($err.mensagem).is.eq(mensagem01);
            });
        });

    }; 

    clicarAba(aba) {
        switch (aba) {
            case "Agenda de Créditos":
                cy.get('.container > .row > :nth-child(1)').click();
                break;
            case "Extrato Detalhado":
                cy.get(':nth-child(2) > strong').click();
                break;

            default:
                break;
        }
    };

    clicarAbaTelaRecebimento(aba) {
        switch (aba) {
            case "Agenda Futura":
                cy.get('#container-recebimentos > .row > :nth-child(1)').click();
                break;
            case "Detalhados":
                cy.get('#container-recebimentos > .row > :nth-child(2)').click();
                break;

            default:
                break;
        }
    };

    validarTotalLiquidoDetalhadosPorDia() {
        cy.wait(20000);
             
        cy.get('tbody > tr > td[name="clientNetValue"]')
            .then(($ele) => {
                const valor = $ele.text();
                const novoValor = valor.split(" ");
                const arrayLiquido = this.converterArrayDeElementosEmNumeroFinal(novoValor);
                console.log(arrayLiquido);

                cy.get(':nth-child(3) > .row > :nth-child(2) > .pt-4 > .text-credmoura').then(($valor) => {
                    const valorTotal = $valor.text();
                    expect(arrayLiquido.toFixed(2).replace('.', ',')).is.eq(valorTotal.replace('R$', ' ').trim().replace('.',''));
                });


            });

            
    };

    validarRecebimentoDeHojeDetalhadosPorDia() {
        cy.wait(20000);

        cy.get('tbody > tr > td[name="clientNetValue')
            .then(($ele) => {
                const valor = $ele.text();
                const novoValor = valor.split(" ");
                const arrayLiquido = this.converterArrayDeElementosEmNumeroFinal(novoValor);

                cy.get(':nth-child(3) > .row > :nth-child(2) > .pt-4 > .text-credmoura').then(($valor) => {
                    const valorTotal = $valor.text();
                    expect(arrayLiquido.toFixed(2).replace('.', ',')).is.eq(valorTotal.replace('R$', ' ').trim().replace('.',''));
                });


            });

            
    }; 

    validarTotalBrutoDetalhadosPorDia() {
        cy.wait(20000);

        cy.get('tbody > tr > td[name="grossValue')
            .then(($ele) => {
                const valor = $ele.text();
                const novoValor = valor.split(" ");
                const arrayLiquido = this.converterArrayDeElementosEmNumeroFinal(novoValor);

                cy.get(':nth-child(3) > .row > :nth-child(1) > .pt-4 > .text-credmoura').then(($valor) => {
                    const valorTotal = $valor.text();
                    expect(arrayLiquido.toFixed(2).replace('.', ',')).is.eq(valorTotal.replace('R$', ' ').trim().replace('.',''));
                });


            }); 

            
    };

    converterArrayDeElementosEmNumeroFinal(array) {
        let list = [];
        let novaList = [];
        let arraySemElementosVazios = [];
                      
        for (let index = 0; index < array.length; index++) {
            let novoValor = array[index].replace('R$', ' ');
            novaList.push(novoValor);

        }
        for (let index = 0; index < novaList.length; index++) {
            const element = novaList[index];
            list.push(element.trim());

        }
        arraySemElementosVazios = list.filter(function (i) { return i });

        let valorComPonto = [];
        for (let index = 0; index < arraySemElementosVazios.length; index++) {
            valorComPonto.push(arraySemElementosVazios[index].replace(',', '.'));

        } 
        var x = 0;
        var len = arraySemElementosVazios.length
        while (x < len) {
            arraySemElementosVazios[x] = parseFloat(arraySemElementosVazios[x]);
            x++
        }

        const arrayFinal = arraySemElementosVazios.reduce(function (acumulador, valor, indice, array) {
            acumulador = acumulador + valor;
            return acumulador
        }, 0);
        console.log(arrayFinal);

        return arrayFinal;
    };

    retornarDataCorrentePeriodo() {
        const data = new Date();
        const dia = String(data.getDate()).padStart(2,'0');
        const mes = String(data.getMonth() + 1).padStart(2,'0');
        const ano = data.getFullYear();
        const dataAtual = dia + '/' + mes + '/' + ano;
        return dataAtual;
                   
    };

    retornarDataCorrentePeriodoMenosDias(dias) {
        const data = new Date();
        data.setDate(data.getDate() - dias);
        const dia = String(data.getDate()).padStart(2,'0');
        const mes = String(data.getMonth() + 1).padStart(2,'0');
        const ano = data.getFullYear();
        const dataAtual = dia + '/' + mes + '/' + ano;
        return dataAtual;
                   
    };

    clicarBotaoPesquisarRecebimentosDetalhados(){
        cy.get('.col-sm-3 > .btn').click();
    };

    validarCampoPeriodoCreditoExtratoDetalhado(data){
        cy.get('.col-sm-6 > .form-group > .input-group > .form-control').then(($valDate) => {
            const texto = $valDate.val();
            expect(texto).is.eq(data);
        })
    }

};

export default new ExtratoSaldoCreditoMoura();