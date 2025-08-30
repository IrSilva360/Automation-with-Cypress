import userData from "../fixtures/userData.json";
import LoginPage from "../pages/loginPage";
import DeshboardPage from "../pages/deshboardPage";
import MenuPage from "../pages/menuPage";
import MyInfoPage from '../pages/myInfoPage';

//const Chance = require('chance') //para uso da biblioteca randomica ChanceJS

//const chance = new Chance() //para uso da biblioteca randomica ChanceJS
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
    myInfoPage.fillPersonalDetails(userData.fullName.fristName,userData.fullName.middleName,userData.fullName.lastName); //(chance.first(), chance.last(), chance.last());//para uso da biblioteca randomica ChanceJS
    myInfoPage.fillEmployeeDetails(userData.employee.employeeId,userData.employee.otherId,userData.employee.driverLicenseNumber,userData.employee.licenseExpiryDate);
    myInfoPage.fillStatus();
    myInfoPage.saveForm();
    
  });
  
  it("Login - Fail", () => {

    loginPage.accessLogingPage();
    loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAccessInvalid()

  });

});

