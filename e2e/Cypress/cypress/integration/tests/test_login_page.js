import DashboardPage from '../pages/dashboard_page'
import LoginPage from '../pages/login_page'
import LoginApi from '../helpers/login_api'

describe('Login tests', () => {
   it('Verify that Passengers Accomodation modal appears by clicking Password Help link on Login modal.', () => {
      cy.visit('/login')
      const login = new LoginPage('sajjadakbar', 'Arb1s0ft123@')
      login.clickPasswordHelpLink()
      login.verifyResetPasswordContent()
      login.fillLoginNameOnResetDialog('sajjadqa')
      login.clickSendCodeButton()
      login.verifyPasswordRulesText()
      login.retrievePasswordResetVerificationCode()
   })
   
   it('Verify that user should redirected to the password reset modal by clicking on Have send code already button.', () => {
       const login = new LoginPage('sajjadakbar', 'Arb1s0ft123@')
       login.clickPasswordHelpLink()
       login.verifyResetPasswordContent()
       login.clickHaveAlreadyCodeButton()
       login.verifyPasswordRulesText()
       login.clickCancelButton()
   })

   it('Verify that validation message should appear if user leaves the field of login name blank', () => {
       const login = new LoginPage('sajjadakbar', 'Arb1s0ft123@')
       login.clickPasswordHelpLink()
       login.verifyResetPasswordContent()
       login.clearLoginNameTextField()
       login.clickSendCodeButton()
       login.errorValidationWithoutLoginName()
   })

   it('Verify that validation message should appear if user gives wrong login name', () => {
       const login = new LoginPage('sajjadakbar', 'Arb1s0ft123@')
       login.fillLoginNameOnResetDialog("sajjad1232")
       login.clickSendCodeButton()
       login.errorValidationWithWrongLoginName()
   })

   it('Verify that user is not able to login with an invalid username and password.', () => {
       const invalidlogin = new LoginPage('adminagent', '456454564')
       invalidlogin.fillLoginForm()
       invalidlogin.submitLoginForm()
       invalidlogin.errorValidationWithInvalidCredentials()
   })

   it('Verify that validation message gets displayed in case the user leaves the username or password field as blank.', () => {
       const login = new LoginPage('', '')
       login.clearForm()
       login.submitLoginForm()
       login.errorValidationWithoutCredentials()
   })
   it('Verify that user redirected to the Home Page once logged in successfully and click on Admin button to logout.', () => {
       const login = new LoginPage('adminagent', 'Passenger2019!')
       const dashboard = new DashboardPage()
       login.clearForm()
       login.fillLoginForm()
       login.submitLoginForm()
       dashboard.isNavBarVisible()
       dashboard.clickLogoutButton()
   })

})
