import userData from "../fixtures/userData.json";
import LoginPage from "../pages/loginPage";
import DeshboardPage from "../pages/deshboardPage";
import MenuPage from "../pages/menuPage";


const loginPage = new LoginPage()
const deshboardPage = new DeshboardPage()
const menuPage = new MenuPage()

describe("Orange HRM Tests", () => {

  const selectorsList = { 
   
   
    firstNameField: "[name='firstName']",
    middleNameField: "[name='middleName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    inputButton: ".oxd-date-input",
    dateCloseButton: ".--close",
    listPop: ".oxd-select-text--after",
    submitButton: "[type='submit']",
    genericComboBox: ".oxd-select-text--arrow",
    secondItemComboBox: ":nth-child(27) > span",
    thirdItemComboBox: ":nth-child(3) > span",
    submitSave:".orangehrm-left-space",
    fourthItemComboBox:":nth-child(7) > span",
    submitCheckBox:".bi-check",
    submitDel:".bi-trash",
    submitYesDel:".oxd-button--label-danger", 
   
  };

  it.only("Login - Success", () => { 

    loginPage.accessLogingPage();
    loginPage.loginWithAnyUser(userData.userSuccess.userneme, userData.userSuccess.password);
    deshboardPage.checkDeshboardPage();
    menuPage.accessMyInfo();
    menuPage.accessPerformace();
    
     
    cy.get(selectorsList.firstNameField).clear().type("Maria");
    cy.get(selectorsList.middleNameField).clear().type("Jose");
    cy.get(selectorsList.lastNameField).clear().type("silva");
    cy.get(selectorsList.genericField).eq(3).clear().type("99999");
    cy.get(selectorsList.genericField).eq(4).clear().type("888");
    cy.get(selectorsList.genericField).eq(5).clear().type("7777");
    cy.get(selectorsList.genericField).eq(6).clear().type("2025-30-7");
    cy.get(selectorsList.dateCloseButton).click();
    cy.get(selectorsList.listPop).eq(0).click();
    cy.get(selectorsList.submitButton).eq(0).click();
    cy.get(selectorsList.genericComboBox).eq(0).click(); 
    cy.get(selectorsList.secondItemComboBox).click();
    cy.get(selectorsList.genericComboBox).eq(1).click();
    cy.get(selectorsList.thirdItemComboBox).click();
    cy.get(selectorsList.genericField).eq(8).clear().type("1981-22-3");
    cy.get(selectorsList.submitSave).eq(0).click();
    cy.get(selectorsList.genericComboBox).eq(2).click();
    cy.get(selectorsList.fourthItemComboBox).click();
    cy.get(selectorsList.genericField).eq(9).clear().type("888");
    cy.get(selectorsList.submitSave).eq(1).click();
    //cy.get(selectorsList.submitCheckBox).eq(0).click();
    //cy.get(selectorsList.submitDel).click();
    //cy.get(selectorsList.submitYesDel).eq(1).click();
    
  });

  it("Login - Success", () => {
    
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"); 
    cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type("Admin"); 
    cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input").type("admin123");
    cy.get(".oxd-button").click(); 
    cy.location("pathname").should("equal", "/web/index.php/dashboard/index"); 
    cy.get(".oxd-topbar-header-breadcrumb-module").contains("Dashboard"); 
   
  });
  
  it("Login - Fail", () => {

    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.get("[name='username']").type("Test"); 
    cy.get("[name='password']").type("Test");
    cy.get(".oxd-button").click();
    cy.get("[role='alert']");
    
  });
  
  it("Login - Success", () => {

    cy.visit("/auth/login"); 
    cy.get(selectorsList.usernameField).type("Admin"); 
    cy.get(selectorsList.passwordField).type("admin123"); 
    cy.get(selectorsList.loginButton).click(); 
    cy.location("pathname").should("equal", "/web/index.php/dashboard/index");
    cy.get(selectorsList.dashboardGrid); 
    
  });

  it("Login - Fail", () => {

    cy.visit("/auth/login");
    cy.get(selectorsList.usernameField).type(userData.userFail.userneme); 
    cy.get(selectorsList.passwordField).type(userData.userFail.password); 
    cy.get(selectorsList.loginButton).click();
    cy.get(selectorsList.wrongCredentialAlert); 

  });

});

