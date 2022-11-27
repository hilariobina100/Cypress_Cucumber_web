Feature: Validar a Tela de Meus Dados/Logista do portal Portal CREDIMOURA


Scenario: 01 - Validar a Edição do dados do Logista sem preencher nenhum campo
      Given que acesso a Tela de Login do Portal CREDIMOURA
      When efetuo o login com sucesso com o dados 31066144000174 e 123456
      And clico no link 'Meus Dados'
      And clico no botao Editar Logista
      And limpo o campo "Cep"
      And limpo o campo "Logradouro"
      And limpo o campo "Numero"
      And limpo o campo "Bairro"
      And limpo o campo "Estado"
      And limpo o campo "Cidade"
      When clico em Enviar
      Then Sistema exibe as mensagens "Campos obrigatórios estão vazios!" e "Preencha os campos obrigatórios marcados." 

Scenario: 02 - Validar a Edição do dados do Logista sem preencher nenhum o campo 'CEP'
      Given que acesso a Tela de Login do Portal CREDIMOURA
      When efetuo o login com sucesso com o dados 31066144000174 e 123456
      And clico no link 'Meus Dados'
      And clico no botao Editar Logista
      And limpo o campo "Cep"
      When clico em Enviar
      And clico no botão Fechar
      Then Sistem exibe a mensagem "CEP é um campo obrigatório." para o campo "Cep" na tela Logista  

Scenario: 03 - Validar a Edição do dados do Logista sem preencher nenhum o campo 'Logradouro'
      Given que acesso a Tela de Login do Portal CREDIMOURA
      When efetuo o login com sucesso com o dados 31066144000174 e 123456
      And clico no link 'Meus Dados'
      And clico no botao Editar Logista
      And limpo o campo "Logradouro"
      When clico em Enviar
      And clico no botão Fechar
      Then Sistem exibe a mensagem "Logradouro é um campo obrigatório." para o campo "Logradouro" na tela Logista   

Scenario: 04 - Validar a Edição do dados do Logista sem preencher nenhum o campo 'Nº'
      Given que acesso a Tela de Login do Portal CREDIMOURA
      When efetuo o login com sucesso com o dados 31066144000174 e 123456
      And clico no link 'Meus Dados'
      And clico no botao Editar Logista
      And limpo o campo "Numero"
      When clico em Enviar
      And clico no botão Fechar
      Then Sistem exibe a mensagem "Número é um campo obrigatório." para o campo "Numero" na tela Logista 

Scenario: 05 - Validar a Edição do dados do Logista sem preencher nenhum o campo 'Bairro'
      Given que acesso a Tela de Login do Portal CREDIMOURA
      When efetuo o login com sucesso com o dados 31066144000174 e 123456
      And clico no link 'Meus Dados'
      And clico no botao Editar Logista
      And limpo o campo "Bairro"
      When clico em Enviar
      And clico no botão Fechar
      Then Sistem exibe a mensagem "Bairro é um campo obrigatório." para o campo "Bairro" na tela Logista    

Scenario: 06 - Validar a Edição do dados do Logista sem preencher nenhum o campo 'Estado'
      Given que acesso a Tela de Login do Portal CREDIMOURA
      When efetuo o login com sucesso com o dados 31066144000174 e 123456
      And clico no link 'Meus Dados'
      And clico no botao Editar Logista
      And limpo o campo "Estado"
      When clico em Enviar
      And clico no botão Fechar
      Then Sistem exibe a mensagem "Estado é um campo obrigatório." para o campo "Estado" na tela Logista  

Scenario: 07 - Validar a Edição do dados do Logista sem preencher nenhum o campo 'Cidade'
      Given que acesso a Tela de Login do Portal CREDIMOURA
      When efetuo o login com sucesso com o dados 31066144000174 e 123456
      And clico no link 'Meus Dados'
      And clico no botao Editar Logista
      And limpo o campo "Cidade"
      When clico em Enviar
      And clico no botão Fechar
      Then Sistem exibe a mensagem "Cidade é um campo obrigatório." para o campo "Cidade" na tela Logista                        