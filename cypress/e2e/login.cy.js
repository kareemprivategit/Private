import { loginPage } from './loginPage';  // Corrected the import path

describe('Login Page Tests', () => {
  it('should login successfully with valid credentials', () => {
    loginPage.visit();
    //cy.wait(500); // Give Angular time to load fully
    loginPage.fillUsername('780000011');
    loginPage.fillPassword('P@ss0rd1234');
    loginPage.submit();
    cy.url().should('include', '/dashboard');
    cy.contains('Welcome, testuser');
  });

  it('should show error message for invalid login', () => {
    loginPage.visit();
    loginPage.fillUsername('7800000133');
    loginPage.fillPassword('wrongpassword');
    loginPage.submit();
    cy.contains('Invalid username or password');
  });
});

// Close browser after a failed test
afterEach(() => {
  if (Cypress.mocha.getRunner().failures > 0) {
    cy.window().then(window => {
      window.close();  // Close the browser window on failure
    });
  }
});
