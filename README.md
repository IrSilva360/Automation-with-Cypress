# My Cypress Automation
Anotações durante o estudo e desenvolvimento da automação

// o comando ".only" roda somento o bloco ao qual se refere

 //sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module", //desta maneira funciona porem na linha abaixo fica melhor por mitigar a possibilidade de quebra por mudança inesperada na linguagem/idioma ou na escrita/grafia da pagina

 //const userData = { "foi abstraido para [fixtures / userData.json]"
  //  userSuccess: {
  //    userneme: 'Admin',
  //    password: 'admin123',
  //  },

  //  userFail: {
  //    userneme: 'test',
  //     password: 'test',
  //   }
  // }

  // o comando "{force: true}" usado parametro do ".click()" serve para força uma ação independente do elemento que esteja sobreposto

  // ao usar ".skip" o comando será ignorado, serve para rodar o teste de forma parcial

  // no comando ".visit()" informamos o endereço da pagina a ser testada

 // o comando ".get()" siginifica procure, já o comando ".type()" é para inserir um texto, seja ele logim, senha ou qualquer que seja a informaçao que o formulario da pagina solicite

  // o conmando ".click()" é justamente para clicar no botão ao qual o elemento se refere

  // ao usar ".location" estamos pedidndo para verificar parte do endereço, no caso a pagina especifica, atribuido usamos "('pathname').should('equal','caminho da pagina ou parte do endereço ao qual se refere')"

  // o comando ".contains()", serve para conferir se a pagina contem um determinado texto para vadidação que estamos na pagina correta

   // para otimizar tbm utilizamos os atributos CSS dentro dos elementos da pagina, sempre buscar usar a referencia unica e mais compacta possivel

   // podemos simplificar utilizando as classes de CSS Selector segue exemplo abaixo

 // usando as aspas duplas primeiro uma vez que já está em uso a aspas simples dentro do atributo

   // esta versão estamos ussando a lista de seletores, para se houver alguma alteração não precissar alterar todo o codigo. facilita pois só alteramos na lista.

   // em relação aos comandos anteriores acima, foi configurado o Cypress para ter uma URL Base que fica no arquivo cypress.confing.js, lembrando que sempre que fizer alguma alteração nos arquivos o salvamenti tem que ser individual ou seja cada arquivo do projeto tem que ser salvo para ter efetividade nas mudanças caso contrario vai haver erros

   // item da linha 4

   // item da linha 5

   // item da linha 6

  // item da linha 8

  //cy.get(selectorsList.sectionTitleTopBar).contains('Dashboard') esse linha funciona tbm porem a linha superior funciona melhor por ser um item praticamente imutavel, pois já nessa versão o nome pode mudar e quebrar a automação

  // usando a linha 19 nessa versão estamos usando o mesmo principio para que o automação não quebre, estamos substituindo o comando expecifico por um seletor em lista que vai facilitar em caso de necessidade de mudança de algum dado de entrada

  // usando a linha 20, na realidade uma composição das linhas 12 a 20

  // item da linha 8

