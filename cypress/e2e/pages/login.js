// LoginPage.js
class LoginPage {
    constructor() {
      this.usernameInput = 'input[name="username"]'
      this.passwordInput = 'input[name="password"]'
      this.loginButton = 'button[type="submit"]:contains("Login")'
    }
  
    login(username, password) {
      cy.get(this.usernameInput).type(username)
      cy.get(this.passwordInput).type(password)
      cy.get(this.loginButton).click()
    }
  }
  
  export default LoginPage