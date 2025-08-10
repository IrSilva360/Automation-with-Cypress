class MyInfoPage{

    selectorsList() {

        const selectors = {
            
            firstNameField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            inputButton: ".oxd-date-input",
            dateCloseButton: ".--close",
            listPop: ".oxd-select-text--after",
            submitButton: "[type='submit']",
            genericComboBox: ".oxd-select-text--arrow",
            secondItemComboBox: ':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input',
            thirdItemComboBox: ":nth-child(3) > span",
            submitSave:".orangehrm-left-space",
            fourthItemComboBox:":nth-child(7) > span",
            submitCheckBox:".bi-check",
            submitDel:".bi-trash",
            submitYesDel:".oxd-button--label-danger",   
            
        }

        return selectors
    }

    fillPersonalDetails(firsName,middleName,lastName,nickName) {

        cy.get(this.selectorsList().firstNameField).clear().type(firsName);
        cy.get(this.selectorsList().middleNameField).clear().type(middleName);
        cy.get(this.selectorsList().lastNameField).clear().type(lastName);
        //cy.get(this.selectorsList().genericField).eq(4).clear().type(nickName);

    }

    fillEmployeeDetails(employeeId,otherId,driverLicenseNumber,licenseExpiryDate) {

        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId);
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId);
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driverLicenseNumber);
        cy.get(this.selectorsList().genericField).eq(6).clear().type(licenseExpiryDate);
        cy.get(this.selectorsList().dateCloseButton).click();
        
    }

    fillStatus() {

        cy.get(this.selectorsList().listPop).eq(0).click({force: true});
        cy.get(this.selectorsList().genericComboBox).eq(0).click({force: true}); 
        cy.get(this.selectorsList().secondItemComboBox).eq(0).click({force: true});
        cy.get(this.selectorsList().genericComboBox).eq(1).click({force: true});
        cy.get(this.selectorsList().thirdItemComboBox).click({force: true});
        cy.get(this.selectorsList().genericField).eq(8).clear().type("1981-22-3");
        cy.get(this.selectorsList().submitSave).eq(0).click();
    }
        

    

    saveForm() {
        cy.get(this.selectorsList().submitButton).eq(0).click();
    }
   

}

export default MyInfoPage
