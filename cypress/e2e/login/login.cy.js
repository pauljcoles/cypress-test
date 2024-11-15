import LoginPage from "../pages/login";

context("Login", () => {
  beforeEach(() => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  });

  describe("Login tests", () => {
    it("Verifies successful login", () => {
      cy.fixture("login-data").then((userData) => {
        const loginPage = new LoginPage();
        loginPage.login(
          userData.validUser.username,
          userData.validUser.password
        );
        cy.url().should("include", "/dashboard");
      });
    });

    it("Verifies invalid username and password cannot log in", () => {
      cy.fixture("login-data").then((userData) => {
        const loginPage = new LoginPage();
        loginPage.login(
          userData.invalidUser.username,
          userData.invalidUser.password
        );
        cy.get('p.oxd-alert-content-text').should('contain.text', 'Invalid credentials');
      });
    });
  });
});
