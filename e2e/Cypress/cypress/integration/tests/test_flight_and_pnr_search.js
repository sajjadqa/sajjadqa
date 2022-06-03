import DashboardPage from '../pages/dashboard_page'
import LoginPage from '../pages/login_page'
import FlightSearch from '../pages/flight_search'
import PnrOffers from '../pages/pnr_offers'
import HotelOffers from '../pages/offer_hotels'

describe('Flights and PNR search tests', () => {
   let flight_number
   let record_locator1
   let record_locator2
   let record_locator3
   let record_locator4
   let record_locator5
   let ORIGINATION_PORT = "ORD"
   let DESTINATION_PORT = "SYD"

   it('Verify that user is able to search flight by giving flight number as an input.', () => {
      cy.visit('/login')
      const login = new LoginPage('adminagent', 'Passenger2019!')
      const dashboard = new DashboardPage()
      const flightsearch = new FlightSearch()
      let past_date = flightsearch.generateDate(false, true)
      login.fillLoginForm()
      login.submitLoginForm()
      dashboard.isNavBarVisible()
      flight_number = dashboard.preserveFlightNum()
      dashboard.clickNewFlightButton()
      dashboard.fillNewFlightInformationForm(flight_number, ORIGINATION_PORT, DESTINATION_PORT)
      dashboard.clickSaveButton()
      dashboard.clickSearchFlightButton()
      DashboardPage.verifyAddedFlightOnListing(flight_number)
      flightsearch.searchByFlightNumber(flight_number.toString())
      dashboard.clickSearchFlightButton()
      flightsearch.verifySearchedFlightNumber(flight_number.toString(), ORIGINATION_PORT, DESTINATION_PORT)
   })

   it("Verify that PNR's with accessible option should be displayed in flight list by clicking on 'filter list to accessible ' option.", () => {
      const login = new LoginPage('adminagent', 'Passenger2019!')
      const dashboard = new DashboardPage()
      const flightsearch = new FlightSearch()
      record_locator1 = dashboard.clickAddPnrButton()
      dashboard.clickNextButton()
      dashboard.clickAddPassengerButton()
      dashboard.fillPnrPaxRecords(true, true, false, true, true, true)
      dashboard.clickSavePnrButton()
      dashboard.clickCloseButton()
      expect(dashboard.verifyNewPnrOnListing()).to.be.equal(record_locator1)
      DashboardPage.verifyAddedFlightOnListing(flight_number)
      record_locator2 = dashboard.clickAddPnrButton()
      dashboard.clickNextButton()
      dashboard.clickAddPassengerButton()
      dashboard.fillPnrPaxRecords(true, true, false, true, false, false)
      dashboard.clickSavePnrButton()
      dashboard.clickCloseButton()
      expect(dashboard.verifyNewPnrOnListing()).to.be.equal(record_locator2)
      // Add PNR with no email.
      DashboardPage.verifyAddedFlightOnListing(flight_number)
      record_locator3 = dashboard.clickAddPnrButton()
      dashboard.clickNextButton()
      dashboard.clickAddPassengerButton()
      dashboard.fillPnrPaxRecords(false, true, true, false, false, false)
      dashboard.clickSavePnrButton()
      dashboard.clickCloseButton()
      expect(dashboard.verifyNewPnrOnListing()).to.be.equal(record_locator3)
      // Add PNR with no phone number.
      DashboardPage.verifyAddedFlightOnListing(flight_number)
      record_locator4 = dashboard.clickAddPnrButton()
      dashboard.clickNextButton()
      dashboard.clickAddPassengerButton()
      dashboard.fillPnrPaxRecords(true, false, true, false, true, false)
      dashboard.clickSavePnrButton()
      dashboard.clickCloseButton()
      expect(dashboard.verifyNewPnrOnListing()).to.be.equal(record_locator4)
      // Add PNR with no email, phone number, pets and child.
      DashboardPage.verifyAddedFlightOnListing(flight_number)
      record_locator5 = dashboard.clickAddPnrButton()
      dashboard.clickNextButton()
      dashboard.clickAddPassengerButton()
      dashboard.fillPnrPaxRecords(false, false, false, true, false, true)
      dashboard.clickSavePnrButton()
      dashboard.clickCloseButton()
      expect(dashboard.verifyNewPnrOnListing()).to.be.equal(record_locator5)
      flightsearch.filterPnrListToAccessible()
   })

   it("Verify that PNR's with pets option should be displayed in PNR list by clicking on 'filter list to pets ' option.", () => {
      const flightsearch = new FlightSearch()
      flightsearch.filterPnrListToPets()
   })

   it("Verify that PNR's with child option should be displayed in PNR list by clicking on 'filter list to child ' option.", () => {
      const flightsearch = new FlightSearch()
      flightsearch.filterPnrListToChild()
   })

   it("Verify that PNR's with email option should be displayed in PNR list by clicking on 'filter list to email ' option.", () => {
      const flightsearch = new FlightSearch()
      flightsearch.filterPnrListToEmail()
   })

   it("Verify that PNR's with phone option should be displayed in PNR list by clicking on 'filter list to phone' option.", () => {
      const flightsearch = new FlightSearch()
      flightsearch.filterPnrListToPhone()
   })

   it("Verify that PNR's without accommodation should be displayed in PNR list by clicking on 'filter list to without accommodation' option.", () => {
      const flightsearch = new FlightSearch()
      const dashboard = new DashboardPage()
      const pnroffer = new PnrOffers()
      const hotel_offer = new HotelOffers()
      let pnr_record = pnroffer.pnrRecordOnListing()
      pnroffer.clickLabelImportantButton()
      expect(pnroffer.pnrRecordOnOfferSection()).to.equal(pnr_record)
      pnroffer.clickMealsOnlyButton()
      pnroffer.clickMealDropdown()
      pnroffer.clickSaveButton()
      pnroffer.preserveMealAmount()
      pnroffer.clickConfirmSendButton()
      hotel_offer.clickMealsOnlyOfferDetailsBackButton()
      hotel_offer.clickOfferHotelButton()
      hotel_offer.clickSaveButton(true)
      hotel_offer.clickConfirmSendButton()
      dashboard.clickFlightsTab()
      pnroffer.verifyAddedMealOffer()
      pnroffer.verifyAddedHotelOffer()
      flightsearch.filterPnrListToWithoutAccommodation()
   })

   it("Verify that PNR's without hotel accommodation should be displayed in PNR list by clicking on 'filter list to without hotel accommodation' option.", () => {
      const flightsearch = new FlightSearch()
      flightsearch.filterPnrListToWithoutHotelAccommodation()
   })

   it("Verify that PNR's with accommodation should be displayed in PNR list by clicking on 'filter list to with accommodation' option.", () => {
      const flightsearch = new FlightSearch()
      flightsearch.filterPnrListToWithAccommodation()
   })

   it("Verify that PNR's with all options should be displayed by clicking on clear filters button.", () => {
      const flightsearch = new FlightSearch()
      flightsearch.clearSearchFilter()
   })

   it('Verify that user is able to search flight by giving record locator as an input.', () => {
      const dashboard = new DashboardPage()
      const flightsearch = new FlightSearch()
      flightsearch.clickMoreOptionButton()
      flightsearch.searchByRecordLocator()
   })

   it('Verify that user is able to search flight by giving pax last name as an input.', () => {
      const dashboard = new DashboardPage()
      const flightsearch = new FlightSearch()
      flightsearch.searchByPaxName()
   })

   it('Verify that user is able to search past flights by giving flight\'s past date as an input.', () => {
      const login = new LoginPage('adminagent', 'Passenger2019!')
      const dashboard = new DashboardPage()
      const flightsearch = new FlightSearch()
      let past_date = flightsearch.generateDate(false, true)
      flight_number = dashboard.preserveFlightNum()
      dashboard.clickNewFlightButton()
      dashboard.fillNewFlightInformationForm(flight_number, ORIGINATION_PORT, DESTINATION_PORT, past_date, true)
      dashboard.clickSaveButton()
      flightsearch.clearSearchFileds(true)
      dashboard.openSearchFlightCalendar()
      dashboard.selectPastDate(past_date)
      dashboard.clickSearchFlightButton()
      DashboardPage.verifyAddedFlightOnListing(flight_number)
   })
})
