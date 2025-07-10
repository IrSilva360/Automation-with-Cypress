describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    wrongCredentialAlert: "[role='alert']",
  }

  it('Login - Success', () => { // ao usar ".skip" o comando será ignorado, serve para rodar o teste de forma parcial
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')// no comando ".visit()" informamos o endereço da pagina a ser testada
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin') // o comando ".get()" siginifica procure, já o comando ".type()" é para inserir um texto, seja ele logim, senha ou qualquer que seja a informaçao que o formulario da pagina solicite
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()// o conmando ".click()" é justamente para clicar no botão ao qual o elemento se refere
    cy.location('pathname').should('equal','/web/index.php/dashboard/index') // ao usar ".location" estamos pedidndo para verificar parte do endereço, no caso a pagina especifica, atribuido usamos "('pathname').should('equal','caminho da pagina ou parte do endereço ao qual se refere')"
    cy.get('.oxd-topbar-header-breadcrumb-module').contains('Dashboard') // o comando ".contains()", serve para conferir se a pagina contem um determinado texto para vadidação que estamos na pagina correta
    // para otimizar tbm utilizamos os atributos CSS dentro dos elementos da pagina, sempre buscar usar a referencia unica e mais compacta possivel
  })
  // podemos simplificar utilizando as classes de CSS Selector segue exemplo abaixo
  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('Test') // usando as aspas duplas primeiro uma vez que já está em uso a aspas simples dentro do atributo 
    cy.get("[name='password']").type('Test')
    cy.get('.oxd-button').click()
    cy.get("[role='alert']")
  })
  
  // esta versão estamos ussando a lista de seletores, para se houver alguma alteração não precissar alterar todo o codigo. facilita pois só alteramos na lista.
  it('Login - Success', () => { 
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('Admin') // item da linha 4
    cy.get(selectorsList.passwordField).type('admin123') // item da linha 5
    cy.get(selectorsList.loginButton).click() // item da linha 6
    cy.location('pathname').should('equal','/web/index.php/dashboard/index') 
    cy.get(selectorsList.sectionTitleTopBar).contains('Dashboard') // item da linha 7
    
  })
  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('Test')  
    cy.get(selectorsList.passwordField).type('Test')
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert) // item da linha 8

})

})
