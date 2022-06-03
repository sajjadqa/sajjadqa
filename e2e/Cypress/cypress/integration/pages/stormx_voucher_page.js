class StormxVoucherPage {
    new_password = "Passenger2019!"
    VOUCHER_TAB = 'li a[href="vouchers.php"]'
    PASSWORD = 'input[name="uPwd"]'
    LOGIN_ERROR = 'div.login-errormessage'
    SIGNIN_BUTTON = 'button[name="mbrIN"]'
 
    clickVoucherTab() {
       cy.get(this.VOUCHER_TAB).click()
       
    }
 
    submitLoginForm() {
       cy.get(this.SIGNIN_BUTTON).click()      
    }
}
    
export default StormxVoucherPage
