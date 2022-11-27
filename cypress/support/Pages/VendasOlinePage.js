class VendasOlinePage {

    selecionarTerminal = () => { return '#inputState'};

    btnPessquisar = () => { return '.col-sm-4 > .btn'};

    inputPeriodo = () => { return '.col-xl-3 > .form-group > .input-group > .form-control'};

    btnSair = () => { return '.text-truncate'};

    btnSairTelaConfirmar = () => { return '.modal-footer > :nth-child(2) > .btn'};

    headerGridResultados = () => { return 'thead > tr > th'};

    valuesGridResultados = () => { return '.table > .ng-star-inserted > tr > td'} ;

    menuPrincipal = () => { return '.nav-propig-title'};

    extratoRecebimento = () => { return 'a[href="/shell/payments"]'};

    extratoSaldoCreditoMoura = () => { return 'a[href="/shell/partners"]'};

    vendasOnline = () => { return '.dropdown-menu > a[href="/shell/sales"]'};
    
    transacoesdetalhadas = () => { return 'a[href="/shell/transactions"]'};

}

export default new VendasOlinePage();