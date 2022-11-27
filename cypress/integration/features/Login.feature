Feature: Validar a Tela de de Login do portal Portal CREDIMOURA

    Scenario: 01 - Validar Login do portal Portal CREDIMOURA sem Preencher nenhum Campo
        Given que acesso a Tela de Login do Portal CREDIMOURA
        When cliclo no botao Entrar
        Then sistema exibe uma tela com mensagem de erro

    Scenario: 02 - Validar Login do portal Portal CREDIMOURA sem Preencher o campo Senha
        Given que acesso a Tela de Login do Portal CREDIMOURA
        And preencho o campo Senha com o valor 123456
        When cliclo no botao Entrar
        Then sistema exibe uma tela com mensagem de erro
    #Then sistema exibe uma mensagem de erro abaixo do campo Senha

    Scenario: 03 - Validar Login do portal Portal CREDIMOURA sem Preencher o campo CNPJ
        Given que acesso a Tela de Login do Portal CREDIMOURA
        And preencho o campo CNPJ com o valor 31066144000174
        When cliclo no botao Entrar
        Then sistema exibe uma tela com mensagem de erro

    Scenario: 04 - Validar Login sem preencher o campo Senha
        Given que acesso a Tela de Login do Portal CREDIMOURA
        And preencho o campo CNPJ com o valor 31066144000174
        When cliclo no botao Entrar
        And clico no Botão Fechar
        Then sistema exibe uma mensagem de erro abaixo do campo Senha

    Scenario: 05 - Validar Login sem preencher o campo CNPJ
        Given que acesso a Tela de Login do Portal CREDIMOURA
        And preencho o campo Senha com o valor 123456
        When cliclo no botao Entrar
        And clico no Botão Fechar
        Then sistema exibe uma mensagem de erro abaixo do campo CNPJ

    Scenario: 06 - Validar Login do portal Portal CREDIMOURA preenchendo o campo CNPJ com dados invalidos
        Given que acesso a Tela de Login do Portal CREDIMOURA
        And preencho o campo CNPJ com o valor AAAAAAAAAA
        And preencho o campo Senha com o valor 123456
        When cliclo no botao Entrar
        Then sistema exibe a mensagem 'O campo documento deve ser preenchido'
    #Then sistema exibe uma tela com a mensagem de Dados invalidos

    Scenario: 07 - Validar Login do portal Portal CREDIMOURA preenchendo o campo SENHA com dados invalidos
        Given que acesso a Tela de Login do Portal CREDIMOURA
        And preencho o campo CNPJ com o valor 31066144000174
        And preencho o campo Senha com o valor 12345678
        When cliclo no botao Entrar
        Then sistema exibe uma tela com a mensagem de Dados invalidos

    Scenario: 08 - Validar solicitação de contato sem preencher nenhum campo
        Given que acesso a Tela de Login do Portal CREDIMOURA
        And clico no botão Solicitar um contato agora
        #When confirmo o envio da solicitação de contato
        And confirmo o envio da solicitação de contato
        Then sistema exibe mensagem de obrigatóriedade para os campos "Nome" e "Telefone"

    Scenario: 09 - Validar solicitação de contato sem preencher o campo Nome
        Given que acesso a Tela de Login do Portal CREDIMOURA
        And clico no botão Solicitar um contato agora
        And preencho o campo "Telefone" com o valor "3456891023"
        #When confirmo o envio da solicitação de contato
        And confirmo o envio da solicitação de contato
        Then sistema exibe mensagem de obrigatóriedade no campo "Nome"
       
