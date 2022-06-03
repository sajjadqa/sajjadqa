class StormxLoginPage {
    new_password = "Passenger2019!"
    USER_NAME = 'input[name="uID"]'
    PASSWORD = 'input[name="uPwd"]'
    LOGIN_ERROR = 'div.login-errormessage'
    SIGNIN_BUTTON = 'button[name="mbrIN"]'
 
    constructor(username, password) {
       this.username = username
       this.password = password
    }
    fillLoginForm() {
       cy.get(this.USER_NAME).type(this.username)
       cy.get(this.PASSWORD).type(this.password)
    }
 
    submitLoginForm() {
       cy.get(this.SIGNIN_BUTTON).click()      
    }
}
    
export default StormxLoginPage
