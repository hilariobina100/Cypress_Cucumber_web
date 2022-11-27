Feature: Validar a Tela Home do portal Portal CREDIMOURA

    Scenario: 01 - Validar campo "Ultimas vendas" com Data Conrrete como Default
        Given que acesso a Tela de Login do Portal CREDIMOURA
        When efetuo o login com sucesso com o dados 31066144000174 e 123456
        Then sistema exibe no campo Ultimas vendas a data corrente
   
    Scenario: 02 - Validar acesso a Home com Sucesso com usuário "CredMoura"
        Given que acesso a Tela de Login do Portal CREDIMOURA
        When efetuo o login com sucesso com o dados 31066144000174 e 123456
        And clico na seta para exibir o nome do usuario
        Then sistema exibe na Home o valor "GABRIEL HENRIQUE OLIVEIRA RIBEIRO 34637539870"

    Scenario: 03 - Validar acesso a pagina "Extrato CREDMOURA" via link "Saldo CREDMOURA"
        Given que acesso a Tela de Login do Portal CREDIMOURA
        When efetuo o login com sucesso com o dados 31066144000174 e 123456
        And clico link "Saldo CREDMOURA"
        Then sistema exibe aba "Agenda de Créditos" selecionada na tela Extrato CredMoura

    Scenario: 04 - Validar acesso a pagina "Extrato CREDMOURA" via link "Créditos a liberar"
        Given que acesso a Tela de Login do Portal CREDIMOURA
        When efetuo o login com sucesso com o dados 31066144000174 e 123456
        And clico link "Créditos a liberar"
        Then sistema exibe aba "Extrato Detalhado" selecionada na tela Extrato CredMoura

    Scenario: 05 - Validar acesso a Home com Sucesso com usuário "Livre"
        Given que acesso a Tela de Login do Portal CREDIMOURA
        When efetuo o login com sucesso com o dados 08099681000107 e 123456
        And clico na seta para exibir o nome do usuario
        Then sistema exibe na Home o valor "COMBAT COMERCIO DE BATERIAS LTDA"

    Scenario: 06 - Validar acesso a Home com Sucesso com usuário "Cessão"
        Given que acesso a Tela de Login do Portal CREDIMOURA
        When efetuo o login com sucesso com o dados 12000207000145 e 123456
        And clico na seta para exibir o nome do usuario
        Then sistema exibe na Home o valor "O REI DAS BATERIAS COMERCIO E "

    Scenario: 07 - Validar acesso a Home com Sucesso com usuário "MultiAgenda"
        Given que acesso a Tela de Login do Portal CREDIMOURA
        When efetuo o login com sucesso com o dados 23912938000183 e 123456
        And clico na seta para exibir o nome do usuario
        Then sistema exibe na Home o valor "MARIO EDUARDO DA COSTA 03779250470"

    Scenario: 08 - Validar campo "Ultimas vendas" com Data Conrrete como Default com usuário "MultiAgenda"
        Given que acesso a Tela de Login do Portal CREDIMOURA
        When efetuo o login com sucesso com o dados 23912938000183 e 123456
        Then sistema exibe no campo Ultimas vendas a data corrente

    Scenario: 09 - Validar campo "Ultimas vendas" com Data Conrrete como Default com usuário "Livre"
        Given que acesso a Tela de Login do Portal CREDIMOURA
        When efetuo o login com sucesso com o dados 08099681000107 e 123456
        Then sistema exibe no campo Ultimas vendas a data corrente

    Scenario: 10 - Validar campo "Ultimas vendas" com Data Conrrete como Default com usuário "Cessão"
        Given que acesso a Tela de Login do Portal CREDIMOURA
        When efetuo o login com sucesso com o dados 12000207000145 e 123456
        Then sistema exibe no campo Ultimas vendas a data corrente

    Scenario: 11 - Validar acesso a pagina "Extrato CREDMOURA" via link "Saldo CREDMOURA" com usuário "Cessão"
        Given que acesso a Tela de Login do Portal CREDIMOURA
        When efetuo o login com sucesso com o dados 12000207000145 e 123456
        And clico link "Saldo CREDMOURA"
        Then sistema exibe aba "Agenda de Créditos" selecionada na tela Extrato CredMoura

    Scenario: 12 - Validar acesso a pagina "Extrato CREDMOURA" via link "Créditos a liberar" com usuário "Cessão"
        Given que acesso a Tela de Login do Portal CREDIMOURA
        When efetuo o login com sucesso com o dados 12000207000145 e 123456
        And clico link "Créditos a liberar"
        Then sistema exibe aba "Extrato Detalhado" selecionada na tela Extrato CredMoura

    Scenario: 13 - Validar acesso a pagina "Extrato CREDMOURA" via link "Saldo CREDMOURA" com usuário "MultiAgenda"
        Given que acesso a Tela de Login do Portal CREDIMOURA
        When efetuo o login com sucesso com o dados 23912938000183 e 123456
        And clico link "Saldo CREDMOURA"
        Then sistema exibe aba "Agenda de Créditos" selecionada na tela Extrato CredMoura

    Scenario: 14 - Validar acesso a pagina "Extrato CREDMOURA" via link "Créditos a liberar" com usuário "MultiAgenda"
        Given que acesso a Tela de Login do Portal CREDIMOURA
        When efetuo o login com sucesso com o dados 23912938000183 e 123456
        And clico link "Créditos a liberar"
        Then sistema exibe aba "Extrato Detalhado" selecionada na tela Extrato CredMoura

    Scenario: 15 - Validar Botão "Pesquisar" desabilitado na Home aba "Ultimas Vendas" usuário "CREDMOURA"
        Given que acesso a Tela de Login do Portal CREDIMOURA
        When efetuo o login com sucesso com o dados 31066144000174 e 123456
        And limpo o campo Periodo da aba "Ultimas Vendas"
        Then sistema exibe  O botão Pesquisar desabilitado para a aba "Ultimas Vendas"

    Scenario: 16 - Validar Botão "Pesquisar" desabilitado na Home aba "Recebimentos da Semana" usuário "CREDMOURA"
        Given que acesso a Tela de Login do Portal CREDIMOURA
        When efetuo o login com sucesso com o dados 31066144000174 e 123456
        And limpo o campo Periodo da aba "Recebimentos da Semana"
        Then sistema exibe  O botão Pesquisar desabilitado para a aba "Recebimentos da Semana"

    Scenario: 17 - Validar Botão "Pesquisar" desabilitado na Home aba "Ultimas Vendas" usuário "Livre"
        Given que acesso a Tela de Login do Portal CREDIMOURA
        When efetuo o login com sucesso com o dados 08099681000107 e 123456
        And limpo o campo Periodo da aba "Ultimas Vendas"
        Then sistema exibe  O botão Pesquisar desabilitado para a aba "Ultimas Vendas"

    Scenario: 18 - Validar Botão "Pesquisar" desabilitado na Home aba "Ultimas Vendas" usuário "CESSÂO"
        Given que acesso a Tela de Login do Portal CREDIMOURA
        When efetuo o login com sucesso com o dados 12000207000145 e 123456
        And limpo o campo Periodo da aba "Ultimas Vendas"
        Then sistema exibe  O botão Pesquisar desabilitado para a aba "Ultimas Vendas"

    Scenario: 19 - Validar Botão "Pesquisar" desabilitado na Home aba "Recebimentos da Semana" usuário "CESSÂO"
        Given que acesso a Tela de Login do Portal CREDIMOURA
        When efetuo o login com sucesso com o dados 12000207000145 e 123456
        And limpo o campo Periodo da aba "Recebimentos da Semana"
        Then sistema exibe  O botão Pesquisar desabilitado para a aba "Recebimentos da Semana"

    Scenario: 20 - Validar Botão "Pesquisar" desabilitado na Home aba "Ultimas Vendas" usuário "MULTIAGENDA"
        Given que acesso a Tela de Login do Portal CREDIMOURA
        When efetuo o login com sucesso com o dados 23912938000183 e 123456
        And limpo o campo Periodo da aba "Ultimas Vendas"
        Then sistema exibe  O botão Pesquisar desabilitado para a aba "Ultimas Vendas"

    Scenario: 21 - Validar Botão "Pesquisar" desabilitado na Home aba "Recebimentos da Semana" usuário "MULTIAGENDA"
        Given que acesso a Tela de Login do Portal CREDIMOURA
        When efetuo o login com sucesso com o dados 23912938000183 e 123456
        And limpo o campo Periodo da aba "Recebimentos da Semana"
        Then sistema exibe  O botão Pesquisar desabilitado para a aba "Recebimentos da Semana"