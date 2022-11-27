Feature: Validar a Tela de Rebebimento Extrato Saldo CREDITMOURA do portal Portal CREDIMOURA

#Scenario: 01 - Validar acesso a pagina "Extrato CREDMOURA" com data do dia conrente
    #Given que acesso a Tela de Login do Portal CREDIMOURA
    #When efetuo o login com sucesso com o dados 31066144000174 e 123456
    #And clico no link "Recebimentos"
    #When clico no Sublink "Extrato CREDMOURA"
    #Then sistema exibe o valor "Agenda de Créditos" para nome da tela e a data do dia atual como default

#Scenario: 02 - Validar valor "Total de Débitos do mês" da aba "Agenda de Creditos" igual ao valor "Débito no período" da aba "Extrato Detalhado"  
    #Given que acesso a Tela de Login do Portal CREDIMOURA
    #When efetuo o login com sucesso com o dados 31066144000174 e 123456
    #And clico no link "Recebimentos"
    #When clico no Sublink "Extrato CREDMOURA"
    #Then o valor Total de Débitos do mês da aba Agenda de Creditos é igual ao Débito no periodo da aba Extrato Detalhado 

#Scenario: 03 - Validar valor "Total de Créditos do mês" da aba "Agenda de Creditos" igual ao valor "Crédito no período" da aba "Extrato Detalhado"  
    #Given que acesso a Tela de Login do Portal CREDIMOURA
    #When efetuo o login com sucesso com o dados 31066144000174 e 123456
    #And clico no link "Recebimentos"
    #When clico no Sublink "Extrato CREDMOURA"
    #Then o valor Total de Total de Créditos do mês da aba Agenda de Creditos é igual ao Crédito no período da aba Extrato Detalhado

Scenario: 04 - Validar Valor "Total liquido" com a soma total da coluna "Valor Liquido Cliente" da Grid  
    Given que acesso a Tela de Login do Portal CREDIMOURA
    When efetuo o login com sucesso com o dados 31066144000174 e 123456
    And clico no link "Recebimentos"
    When clico no Sublink "Extrato de Recebimentos"
    And clico na aba "Detalhados" da tela de Recebimento
    Then Sistema exibe na Label Total liquido o mesmo valor que a soma da coluna Valor Liquido Cliente da Grid  

#Scenario: 05 - Validar Valor "Total Bruto" com a soma total da coluna "Valor Bruto" da Grid  
    #Given que acesso a Tela de Login do Portal CREDIMOURA
    #When efetuo o login com sucesso com o dados 31066144000174 e 123456
    #And clico no link "Recebimentos"
    #When clico no Sublink "Extrato de Recebimentos"
    #And clico na aba "Detalhados" da tela de Recebimento
    #Then Sistema exibe na Label Total Bruto o mesmo valor que a soma da coluna Valor Bruto da Grid
 
#Scenario: 06 - Validar campo "Periodo" com Data Corrente do mês na tela "Extrato Detalhado"
    #Given que acesso a Tela de Login do Portal CREDIMOURA
    #When efetuo o login com sucesso com o dados 31066144000174 e 123456
    #And clico no link "Recebimentos"
    #When clico no Sublink "Extrato de Recebimentos"
    #And clico na aba "Detalhados" da tela de Recebimento
    #Then sistema exibe no campo Periodo a data corrente

#Scenario: 07 - Validar campo "Periodo" com "Data inicio" igual a data atual menos 60 dias na tela "Extrato Detalhado"
    #Given que acesso a Tela de Login do Portal CREDIMOURA
    #When efetuo o login com sucesso com o dados 31066144000174 e 123456
    #And clico link "Créditos a liberar"
    #Then sistema exibe no campo Periodo Data inicio igual a Data corrente e Data Final igual a atual menos 60 dias

#Scenario: 08 - Validar botão "Pesquisar" desabilitado quando o campo "Periodo" estiver vazio
      