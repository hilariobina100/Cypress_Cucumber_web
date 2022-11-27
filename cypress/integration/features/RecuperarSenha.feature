Feature: Validar a Tela de Recuperar Senha do portal Portal CREDIMOURA

Scenario: 01 - Validar Recuperar Senha sem Preencher nenhum Campo
    Given que acesso a Tela de Login do Portal CREDIMOURA
    And cliclo no 'Link Recuperar Senha'
    When cliclo no botao Recuperar Senha
    Then sistema exibe mensagem de erro abaixo dos campos CNPJ e Email

Scenario: 02 - Validar Recuperar Senha sem Preencher Campo Email
    Given que acesso a Tela de Login do Portal CREDIMOURA
    And cliclo no 'Link Recuperar Senha'
    And preencho o campo CNPJ com o valor 12000207000145
    When cliclo no botao Recuperar Senha
    Then sistema exibe mensagem de erro abaixo dos campos Email   

Scenario: 03 - Validar Recuperar Senha sem Preencher Campo CNPJ
    Given que acesso a Tela de Login do Portal CREDIMOURA
    And cliclo no 'Link Recuperar Senha'
    And preencho o campo EMAIL com o valor text@text.com
    When cliclo no botao Recuperar Senha
    Then sistema exibe mensagem de erro abaixo do campo CNPJ 

#Scenario: 04 - Validar Recuperar Senha digitando Email não Cadastrado
    #Given que acesso a Tela de Login do Portal CREDIMOURA
    #And cliclo no 'Link Recuperar Senha'
    #And preencho o campo CNPJ com o valor 12000207000145
    #And preencho o campo EMAIL com o valor text@Gmail.com
    #When cliclo no botao Recuperar Senha
    #Then sistema exibe uma Tela com Mensagem de erro ao Enviar Email       
