Feature: Validar a Tela de Home do portal Portal CREDIMOURA

Scenario: 01 - Validar campo Periodo com Data Conrrete como Default
    Given que acesso a Tela de Login do Portal CREDIMOURA
    When efetuo o login com sucesso com o dados 31066144000174 e 123456
    And clico no link "Vendas"
    When clico no Sublink "Vendas Online"
    And seleciono o valor Todos no campo Selecionar Terminal
    And clico no botao Pesquisar
    Then sistema exibe no campo Periodo a data corrente
  
Scenario: 02 - Validar Botao Pesquisar Desabilitado quando Periodo estiver vazio
    Given que acesso a Tela de Login do Portal CREDIMOURA
    When efetuo o login com sucesso com o dados 31066144000174 e 123456
    And clico no link "Vendas"
    When clico no Sublink "Vendas Online"
    And limpo o campo Periodo
    Then o botao Pesquisar se encontra desabilitado
  
Scenario: 03 - Validar pesquisa de Periodo anterior a data Corrente
    Given que acesso a Tela de Login do Portal CREDIMOURA
    When efetuo o login com sucesso com o dados 31066144000174 e 123456
    And clico no link "Vendas"
    When clico no Sublink "Vendas Online"
    And limpo o campo Periodo
    And Preencher o campo Periodo com os valores 23/08/2022 e 23/08/2022
    And clico no botao Pesquisar
    Then Sistema exibe na Grid de Resultado o valor 23/08/2022 na coluna Data Venda
  
Scenario: 04 - Validar pesquisa de Periodo incorreto ou sem Resultado
    Given que acesso a Tela de Login do Portal CREDIMOURA
    When efetuo o login com sucesso com o dados 31066144000174 e 123456
    And clico no link "Vendas"
    When clico no Sublink "Vendas Online"
    And limpo o campo Periodo
    And Preencher o campo Periodo com os valores 11/11/1111 e 99/99/9999
    And clico no botao Pesquisar
    Then Sistema exibe a mensagem Nenhuma venda foi encontrada!
  
 Scenario: 05 - Validar Valor 'Todos' selecionado como Default no campo Terminal 
    Given que acesso a Tela de Login do Portal CREDIMOURA
    When efetuo o login com sucesso com o dados 31066144000174 e 123456
    And clico no link "Vendas"
    When clico no Sublink "Vendas Online"
    Then Sistema exibe o texto Todos como valor selecionado por Default        