class LoginPage {
    visit() {
      cy.visit('https://marketuat.momo.africa:2024/auth/login?tenantId=1');
    }
    fillUsername(username) {
      cy.get('#phone').click().clear().type(username);
    }
    fillPassword(password) {
      cy.get('#Password-input').clear().type(password);
    }
    submit() {
      cy.get('#login-button').click();
    }
  }
  
  export const loginPage = new LoginPage();