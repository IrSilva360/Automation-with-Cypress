import userData from "../fixtures/userData.json";
import LoginPage from "../pages/loginPage";
import DeshboardPage from "../pages/deshboardPage";
import MenuPage from "../pages/menuPage";
import MyInfoPage from '../pages/myInfoPage';




const loginPage = new LoginPage()
const deshboardPage = new DeshboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()



describe("Orange HRM Tests", () => {
  
  it.only("Login - Success", () => { 

    loginPage.accessLogingPage();
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password);
    deshboardPage.checkDeshboardPage();
    menuPage.accessMyInfo();
    myInfoPage.fillPersonalDetails(userData.fullName.fristName,userData.fullName.middleName,userData.fullName.lastName);
    myInfoPage.fillEmployeeDetails(userData.employee.employeeId,userData.employee.otherId,userData.employee.driverLicenseNumber,userData.employee.licenseExpiryDate);
    myInfoPage.fillStatus();
    myInfoPage.saveForm();
    
    //myInfoPage.fillStatus(userData.);
    //menuPage.accessPerformace();
    
    //cy.get(selectorsList.genericComboBox).eq(2).click();
    //cy.get(selectorsList.fourthItemComboBox).click();
    //cy.get(selectorsList.genericField).eq(9).clear().type("888");
    //cy.get(selectorsList.submitSave).eq(1).click();
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

