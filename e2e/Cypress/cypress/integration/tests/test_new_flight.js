import LoginPage from '../pages/login_page'
import DashboardPage from '../pages/dashboard_page'


describe('New Flight test', () => {
   let flight_number
   let recordlocator
   let ORIGINATION_PORT = "LAX"
   let DESTINATION_PORT = "SYD"
   let LAST_NAME = "Sajjad"
   let FIRST_NAME = "Akbar"
   it('Verify that validation message should appear if user leaves the following fields blank on New flight Information modal: Flight Name, Origin Port, Destination Port, Port of disruption', () => {
      cy.visit('/login')
      const login = new LoginPage('adminagent', 'Passenger2019!')
      const dashboard = new DashboardPage()
      login.fillLoginForm()
      login.submitLoginForm()
      dashboard.isNavBarVisible()
      dashboard.clickNewFlightButton()
      dashboard.clickSaveButton()
      dashboard.EmptyFieldsErrorsValidationOnNewFlightForm()
   })

   it('Verify that flight should be displayed under the right panel of the search section once the flight added successfully.', () => {
      const dashboard = new DashboardPage()
      flight_number = dashboard.preserveFlightNum()
      dashboard.fillNewFlightInformationForm(flight_number, ORIGINATION_PORT, DESTINATION_PORT)
      dashboard.clickSaveButton()
      dashboard.clickSearchFlightButton()
      DashboardPage.verifyAddedFlightOnListing(flight_number)
   })

   it('Verify that an error message should be shown when add duplicate records on new flight page.', () => {
      const dashboard = new DashboardPage()
      dashboard.clickNewFlightButton()
      dashboard.fillNewFlightInformationForm(flight_number, ORIGINATION_PORT, DESTINATION_PORT)
      dashboard.clickSaveButton()
      dashboard.flightDuplicateErrorValidation()
      dashboard.clickOkButton()
   })
})
