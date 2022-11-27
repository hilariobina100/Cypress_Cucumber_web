Feature: Validar a Tela de Meus Dados do portal Portal CREDIMOURA

   Scenario: 01 - Validar Acesso a Página Meus Dados
      Given que acesso a Tela de Login do Portal CREDIMOURA
      When efetuo o login com sucesso com o dados 31066144000174 e 123456
      And acesso a pagina Meus Dados
      Then Sitema exibe mensagem de Boas Vindas com o nome do Usuário


   Scenario: 07 - Validar edição de Contato sem enviar nenhum campo Preenchido
      Given que acesso a Tela de Login do Portal CREDIMOURA
      And efetuo o login com sucesso com o dados 31066144000174 e 123456
      And acesso a pagina Meus Dados
      And Clico no botao Editar Contato
      And limpo o campo "Nome" da tela Contato
      And limpo o campo "E-mail" da tela Contato
      And limpo o campo "Telefone" da tela Contato
      When clico em Enviar
      Then Sistema exibe as mensagens "Campos obrigatórios estão vazios!" e "Preencha os campos obrigatórios marcados."

   Scenario: 08 - Validar edição de Contato sem enviar campo 'Nome'
      Given que acesso a Tela de Login do Portal CREDIMOURA
      And efetuo o login com sucesso com o dados 31066144000174 e 123456
      And acesso a pagina Meus Dados
      And Clico no botao Editar Contato
      And limpo o campo "Nome" da tela Contato
      When clico em Enviar
      And clico no botão Fechar
      Then Sistema exibe a mensagem "Nome é um campo obrigatório." para o campo "Nome"

   Scenario: 09 - Validar edição de Contato sem enviar campo 'E-mail'
      Given que acesso a Tela de Login do Portal CREDIMOURA
      And efetuo o login com sucesso com o dados 31066144000174 e 123456
      And acesso a pagina Meus Dados
      And Clico no botao Editar Contato
      And limpo o campo "E-mail" da tela Contato
      When clico em Enviar
      And clico no botão Fechar
      Then Sistema exibe a mensagem "Email é um campo obrigatório." para o campo "E-mail"

   Scenario: 10 - Validar edição de Contato com o campo 'E-mail' com valor Invalido
      Given que acesso a Tela de Login do Portal CREDIMOURA
      And efetuo o login com sucesso com o dados 31066144000174 e 123456
      And acesso a pagina Meus Dados
      And Clico no botao Editar Contato
      And limpo o campo "E-mail" da tela Contato
      And digito no campo "E-mail" o valor "1111@111."
      When clico em Enviar
      Then Sistema exibe a mensagem "Email inválido." para o campo E-mail

