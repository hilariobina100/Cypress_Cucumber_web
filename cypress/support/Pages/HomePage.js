class HomePage {

    inputUtimasVendas = () => { return 'app-last-sales > .card > .card-body > filters > .ng-untouched > :nth-child(2) > .row > .col-sm-6 > .form-group > .input-group > .form-control'};
    inputRecebimentoSemana = () => { return 'app-receivements > .card > .card-body > filters > .ng-untouched > :nth-child(2) > .row > .col-sm-6 > .form-group > .input-group > .form-control'}
    laberNameUser = () => { return '.dropdown-toggle > strong'}

}

export default new HomePage();