import {
   MailSlurp
} from "mailslurp-client"
import {
   runTests
} from "tslint/lib/test"
const mailslurp = new MailSlurp({
   apiKey: "7d0ee1cabfb1b1be65c9d2ebdf26bf1f8f74469f39a49c5768e2e204da5690b1"
})

class LoginPage {
   // username = 'adminagent'
   // password = 'Passenger2019!'
   invalid_password = 'testt'
   new_password = "Passenger2019!"
   LOGIN_NAME = 'input.app-input:not(#password)'
   LOGIN_NAME_ON_RESET_PASSWORD = 'input[placeholder="Login Name"]'
   PASSWORD = 'input.app-input#password'
   LOGIN_ERROR = 'div.login-errormessage'
   LOGIN_BUTTON = '.mat-raised-button span.mat-button-wrapper'
   PASSWORD_HELP = '//a[.//text()[contains(., "Password Help")]]'
   RESEND_VERIFICATION_CODE = '//a[.//text()[contains(., "Resend Verification Code")]]'
   LOGIN_NAME_TEXTFIELD = 'input[placeholder="Login Name"]'
   PASSWORD_RESET_CONTENT = '.login-dialog .login-subtitle'
   SEND_CODE_BUTTON = '//div/button/span[.//text()[contains(., "Send Code")]]'
   HAVE_CODE_ALREADY_BUTTON = '//div/button/span[.//text()[contains(., "Have Code Already")]]'
   CANCEL_BUTTON = '//div/button/span[.//text()[contains(., "Cancel")]]'
   ERROR_MESSAGE_ON_RESET_MODAL = '.error-message'
   UPDATE_USER_ERROR = '[role="dialog"] .mb-body .site-nav-text:nth-of-type(2) div.mat-list-item-content'
   DIALOG_OK_BUTTON = '.dialog-footer button'
   VERIFICATION_CODE = 'input[placeholder="Verification Code"]'
   OK_BUTTON = '//span[.//text()[contains(., "OK")]]'
   NEW_PASSWORD = 'input[placeholder="Password"]'
   CONFIRM_PASSWORD = 'input[placeholder="Re-enter Password"]'
   SAVE_BUTTON = '.login-footer div:nth-of-type(1) button'
   PASSWORD_RULES = '.login-dialog .rules-panel-content'

   constructor(username, password) {
      this.username = username
      this.password = password
   }
   fillLoginForm() {
      cy.get(this.LOGIN_NAME).type(this.username)
      cy.get(this.PASSWORD).type(this.password)
   }

   submitLoginForm() {
      cy.get(this.LOGIN_BUTTON).click()      
   }

   loginWithInvalidCreds() {
      cy.get(this.LOGIN_NAME).type(this.username).should('have.value', this.username)
      cy.get(this.PASSWORD).type(this.invalid_password).should('have.value', this.invalid_password)
   }

   errorValidationWithInvalidCredentials() {
      cy.get(this.LOGIN_ERROR, {
         timeout: 9000
      }).should(($loginerror) => {
         const text = $loginerror.text()
         expect(text).to.include('Incorrect username or password.')
      })
      // cy.get(this.LOGIN_ERROR, { timeout: 5000 }).should("have.text", " Incorrect username or password. ")
   }

   errorValidationWithoutCredentials() {
      cy.get(this.LOGIN_ERROR).should('be.visible').invoke('text').then((error) => {
         expect(error).to.be.equal(' Login failed, please try again ')
      })
   }

   clearForm() {
      cy.get(this.LOGIN_NAME).clear()
      cy.get(this.PASSWORD).clear()
   }

   clearLoginNameTextField(){
    cy.get(this.LOGIN_NAME_ON_RESET_PASSWORD).clear()
   }

   clickPasswordHelpLink() {
      cy.xpath(this.PASSWORD_HELP, {timeout: 10000}).click()
   }
   clickResendVerificationCode() {
       cy.xpath(this.RESEND_VERIFICATION_CODE, {timeout: 9000}).click()
   }
   clickCancelButton(){
       cy.xpath(this.CANCEL_BUTTON).click()
   }

   verifyResetPasswordContent() {
      cy.get(this.PASSWORD_RESET_CONTENT, {
         timeout: 9000
      }).should(($resetpasscontent) => {
         const resetpasstext = $resetpasscontent.text()
         expect(resetpasstext).to.be.equal(' Enter your login name and a verification code will be sent to your email address ')
      })
   }

   verifyPasswordRulesText(){
       cy.get(this.PASSWORD_RULES).should('be.visible').invoke('text').then((rules) => {
            expect(rules).to.be.equal(' Password Rules Length must be 8 or greaterMust contain uppercase lettersMust contain lowercase lettersMust contain at least one numberMust contain at least one special character')
       }
       )}

   clickSendCodeButton() {
      cy.xpath(this.SEND_CODE_BUTTON).click()
      //cy.wait(10000)
   }

   clickHaveAlreadyCodeButton() {
      cy.xpath(this.HAVE_CODE_ALREADY_BUTTON).click()
   }

   fillLoginNameOnResetDialog(loginName) {
      cy.get(this.LOGIN_NAME_TEXTFIELD).type(loginName)
   }

   errorValidationWithoutLoginName() {
      cy.get(this.ERROR_MESSAGE_ON_RESET_MODAL).should('be.visible').invoke('text').then((error) => {
         expect(error).to.be.equal(' Sending a verification code requires a valid login name, please enter your login name ')
      })
   }
   errorValidationWithWrongLoginName() {
      cy.get(this.UPDATE_USER_ERROR, {
         timeout: 9000
      }).should('be.visible').invoke('text').then((error) => {
         expect(error).to.be.equal(' Error Description: Username/client id combination not found. ' || ' Error Description: Attempt limit exceeded, please try after some time. ')
         cy.get(this.DIALOG_OK_BUTTON).click()
      })
   }

   clickSaveButton() {
      cy.get(this.SAVE_BUTTON).click()
      this.passwordChangeSuccessMessage()
   }

   passwordChangeSuccessMessage() {
      cy.get('div.mb-body', {
         timeout: 8000
      }).should('be.visible').invoke('text').then((error) => {
         expect(error).to.be.equal(" Your password has been updated successfully, please log in with your new password ")
      })
      cy.xpath(this.OK_BUTTON, {timeout: 9000}).click()
   }
  retrievePasswordResetVerificationCode() {
      cy.request({
         method: 'GET',
         url: 'https://api.mailslurp.com/waitForLatestEmail?inboxId=e1191a39-69ca-4115-bd16-5b9beff42fc7',

         headers: {
            'x-api-key': '7d0ee1cabfb1b1be65c9d2ebdf26bf1f8f74469f39a49c5768e2e204da5690b1',
            'x-client': 'mailslurp-client-ts-js',
         },

         body: {
            inboxId: 'e1191a39-69ca-4115-bd16-5b9beff42fc7',
         }
      }).then((response) => {
         let email = response.body.body
         if (email !== "") {
            var code = email.split(" ")
            code = code[code.length - 2]
            var code_string = code.substring(0, code.length - 1)
            mailslurp.deleteEmail(response.body.id)
            this.fillResetPasswordForm(code_string)
         }
      })
   }

   fillResetPasswordForm(verification_code) {
      cy.get(this.VERIFICATION_CODE, {
         timeout: 9000
      }).click()
      cy.get(this.VERIFICATION_CODE).type(verification_code)
      cy.get(this.NEW_PASSWORD).type(this.new_password)
      cy.get(this.CONFIRM_PASSWORD).type(this.new_password)
      this.clickSaveButton()
   }
}

export default LoginPage
