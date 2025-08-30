import userData from "../fixtures/userData.json";
import LoginPage from "../pages/loginPage";
import DeshboardPage from "../pages/deshboardPage";


const loginPage = new LoginPage()
const deshboardPage = new DeshboardPage()


describe("Orange HRM Tests", () => {
  
   it("Login - Success", () => { 

    loginPage.accessLogingPage();
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password);
    deshboardPage.checkDeshboardPage();
       
  });

   it("Login - Fail", () => {

    loginPage.accessLogingPage();
    loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAccessInvalid()

  });

});

