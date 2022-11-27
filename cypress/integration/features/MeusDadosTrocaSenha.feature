Feature: Validar a Tela de Meus Dados/Trocar Senha do portal Portal CREDIMOURA

Scenario: 01 - Validar Troca de Senha sem preencher Nenhum Campo
      Given que acesso a Tela de Login do Portal CREDIMOURA
      When efetuo o login com sucesso com o dados 12000207000145 e 123456
      And clico no link 'Meus Dados'
      And clico no botao Trocar Senha da tela Meus Dados
      And clico no botao Trocar Senha da Tela Troca Senha
      Then Sistema exibe a mensagem "Para continuar, digite sua senha atual." para o campo "Senha Atual" em Trocar Senha

Scenario: 02 - Validar Troca de Senha Digitando Apenas o campo 'Senha Atual'
      Given que acesso a Tela de Login do Portal CREDIMOURA
      When efetuo o login com sucesso com o dados 12000207000145 e 123456
      And clico no link 'Meus Dados'
      And clico no botao Trocar Senha da tela Meus Dados
      And digito o valor "123456" para o campo "Senha Atual" na Tela Troca Senha
      And clico no botao Trocar Senha da Tela Troca Senha
      Then Sistema exibe a mensagem "Para continuar, digite sua nova senha." para o campo "Nova Senha" em Trocar Senha  

Scenario: 03 - Validar Troca de Senha Digitando Apenas os campos 'Senha Atual' e 'Nova Senha'
      Given que acesso a Tela de Login do Portal CREDIMOURA
      When efetuo o login com sucesso com o dados 12000207000145 e 123456
      And clico no link 'Meus Dados'
      And clico no botao Trocar Senha da tela Meus Dados
      And digito o valor "123456" para o campo "Senha Atual" na Tela Troca Senha
      And digito o valor "0597310" para o campo "Nova Senha" na Tela Troca Senha
      And clico no botao Trocar Senha da Tela Troca Senha
      Then Sistema exibe a mensagem "Para continuar, digite sua nova senha novamente em “Confirmar nova senha”." para o campo "Confirmar Senha" em Trocar Senha

Scenario: 04 - Validar Troca de Senha Digitando Apenas os campos 'Senha Atual' e 'Confirmar Atual'
      Given que acesso a Tela de Login do Portal CREDIMOURA
      When efetuo o login com sucesso com o dados 12000207000145 e 123456
      And clico no link 'Meus Dados'
      And clico no botao Trocar Senha da tela Meus Dados
      And digito o valor "123456" para o campo "Senha Atual" na Tela Troca Senha
      And digito o valor "0597310" para o campo "Confirmar Senha" na Tela Troca Senha
      And clico no botao Trocar Senha da Tela Troca Senha
      Then Sistema exibe a mensagem "Para continuar, digite sua nova senha." para o campo "Nova Senha" em Trocar Senha  

Scenario: 05 - Validar Troca de Senha Digitando nos campos 'Senha Atual' e 'Confirmar Atual' valores diferentes
      Given que acesso a Tela de Login do Portal CREDIMOURA
      When efetuo o login com sucesso com o dados 12000207000145 e 123456
      And clico no link 'Meus Dados'
      And clico no botao Trocar Senha da tela Meus Dados
      And digito o valor "123456" para o campo "Senha Atual" na Tela Troca Senha
      And digito o valor "0202020202" para o campo "Nova Senha" na Tela Troca Senha
      And digito o valor "0597310" para o campo "Confirmar Senha" na Tela Troca Senha
      And clico no botao Trocar Senha da Tela Troca Senha
      Then Sistema exibe a mensagem "As senhas digitadas não coincidem. Digite a mesma senha nos dois campos." para Senhas Diferentes

Scenario: 06 - Validar Troca de Senha com campo 'Nova Senha' já utlizada nos ultimos 3 meses
      Given que acesso a Tela de Login do Portal CREDIMOURA
      When efetuo o login com sucesso com o dados 12000207000145 e 123456
      And clico no link 'Meus Dados'
      And clico no botao Trocar Senha da tela Meus Dados
      And digito o valor "123456" para o campo "Senha Atual" na Tela Troca Senha
      And digito o valor "123456" para o campo "Nova Senha" na Tela Troca Senha
      And digito o valor "0597310" para o campo "Confirmar Senha" na Tela Troca Senha
      And clico no botao Trocar Senha da Tela Troca Senha
      And clico no botao Fechar na tela de Trocar Senha
      Then Sistema exibe a mensagem "Você usou esta senha anteriormente. Por favor, não utilize suas 3 últimas senhas." senha já utlizada

Scenario: 07 - Validar Troca de Senha com campo 'Nova Senha' com menos de 6 caracteres
      Given que acesso a Tela de Login do Portal CREDIMOURA
      When efetuo o login com sucesso com o dados 31066144000174 e 123456
      And clico no link 'Meus Dados'
      And clico no botao Trocar Senha da tela Meus Dados
      And digito o valor "123456" para o campo "Senha Atual" na Tela Troca Senha
      And digito o valor "059" para o campo "Nova Senha" na Tela Troca Senha
      And digito o valor "0597310" para o campo "Confirmar Senha" na Tela Troca Senha
      And clico no botao Trocar Senha da Tela Troca Senha
      And clico no botao Fechar na tela de Trocar Senha
      Then Sistema exibe a mensagem "Nova senha não pode ter menos de 6 dígitos." para Menos de 6 caracteres                   