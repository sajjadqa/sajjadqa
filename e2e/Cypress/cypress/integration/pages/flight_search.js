import DashboardPage from '../pages/dashboard_page'
class FlightSearch {
   DATE = 'input[data-cy="flight-inp-flightdate"]'
   FLIGHT_NUMBER = 'input[data-cy="flight-inp-flightnumber"]'
   DEPARTURE_PORT = 'input[data-cy="flight-inp-departport"]'
   RECORD_LOCATOR = 'input[data-cy="flight-inp-recordlocator"]'
   LAST_NAME = 'input[data-cy="flight-inp-lastname"]'
   FIRST_NAME = 'input[data-cy="flight-inp-firstname"]'
   SEARCH_BUTTON = 'button[data-cy="flight-btn-search"]'
   MORE_OPTIONS = 'button[data-cy="flight-btn-moreoptions"]'
   OPEN_CALENDAR = '.flight-panel .mat-icon-button[aria-label="Open calendar"]'
   FLIGHTS_LIST = '[data-cy="flight-li-flight"] .card-flight-content'
   PNR_RECORD_ON_LISTING = '[role="row"]:nth-of-type(1).mat-row [data-cy="pnrhome-text-li-pnr-recordlocator"]'
   FLIGHT_NUM_AND_DATE_ON_DETAILS = 'div .flight-hdr-text'
   PAX_NAMES_ON_LISTING = '[role="row"]:nth-of-type(1).mat-row [data-cy="pnrhome-text-li-pnr-name"]'
   FILTER_LIST_TO_ACCESSIBLE = '[data-cy="pnrhome-btn-filter-ssr"] button[aria-label="Button that filters list to accessible"]'
   FILTER_LIST_TO_PETS = '[data-cy="pnrhome-btn-filter-pet"] button[aria-label="Button that filters list to pets"]'
   FILTER_LIST_TO_CHILD = '[data-cy="pnrhome-btn-filter-child"] button[aria-label="Button that filters list to child"]'
   FILTER_LIST_TO_EMAIL = '[data-cy="pnrhome-btn-filter-email"] button[aria-label="Button that filters list to email"]'
   FILTER_LIST_TO_PHONE = '[data-cy="pnrhome-btn-filter-phone"] button[aria-label="Button that filters list to phone"]'
   FILTER_LIST_TO_WITHOUT_ACCOMMODATION = '[data-cy="pnrhome-btn-filter-noacc"] button[aria-label="Button that filters list to without accommodation"]'
   FILTER_LIST_TO_WITHOUT_HOTEL_ACCOMMODATION = '[data-cy="pnrhome-btn-filter-nohotel"] button[aria-label="Button that filters list to without hotel accommodation"]'
   FILTER_LIST_TO_WITH_ACCOMMODATION = '[data-cy="pnrhome-btn-filter-acc"] button[aria-label="Button that filters list to with accommodation"]'
   CHILD_FILTER_DATA = '[data-cy="pnrhome-text-li-pnr-child"] [aria-hidden="true"]'
   SSR_FILTER_DATA = '[data-cy="pnrhome-text-li-pnr-ssr"] [aria-hidden="true"]'
   PET_FILTER_DATA = '[data-cy="pnrhome-text-li-pnr-pet"] [aria-hidden="true"]'
   EMAIL_FILTER_DATA = '[data-cy="pnrhome-text-li-pnr-email"] [aria-hidden="true"]'
   PHONE_FILTER_DATA = '[data-cy="pnrhome-text-li-pnr-phone"] [aria-hidden="true"]'
   ACCOMMODATION_FILTER_DATA = '[data-cy="pnrhome-text-li-pnr-meal"] [aria-hidden="true"]'
   HOTEL_ACCOMMODATION_DATA = '[data-cy="pnrhome-text-li-pnr-acctype"] [aria-hidden="true"]'
   PNR_HOME_LIST = '[data-cy="pnrhome-li-pnr"]'
   CLEAR_FILTER_DATA = '[data-cy="pnrhome-btn-filter-clear"] button[aria-label="Button that clears the filtered list"]'
   ALL_ROWS_DATA = 'mat-table mat-row'

   searchByFlightNumber(flightNumber) {
      cy.get(this.FLIGHT_NUMBER).type(flightNumber).should('have.value', flightNumber)
      cy.wait(2000)
   }

   clearSearchFileds(more_option = false) {
      cy.get(this.NEW_FLIGHT_DIALOG).should('not.be.visible')
      cy.get(this.FLIGHT_NUMBER).clear()
      // cy.get(this.DEPARTURE_PORT).clear()
      if (more_option) {
         cy.get(this.RECORD_LOCATOR).clear()
         cy.get(this.LAST_NAME, {
            timeout: 5000
         }).clear()
         cy.get(this.FIRST_NAME, {
            timeout: 5000
         }).clear()
      }

   }

   searchByRecordLocator() {
      cy.get(this.PNR_RECORD_ON_LISTING, {
         timeout: 9000
      }).invoke('text').then((pnrtext) => {
         cy.get(this.FLIGHT_NUM_AND_DATE_ON_DETAILS).invoke('text').then((date_text) => {
            let flight_num = date_text.split(" ")[1]
            console.log(flight_num)
            cy.get(this.RECORD_LOCATOR).type(pnrtext).should('have.value', pnrtext)
            this.clickSearchFlightButton()
            this.clearSearchFileds(true)
            this.clickSearchFlightButton()
            this.inputRecordLocatorValue(pnrtext.trim())
            this.clickSearchFlightButton()
            DashboardPage.verifyAddedFlightOnListing(flight_num)
            cy.get(this.PNR_RECORD_ON_LISTING, {
               timeout: 9000
            }).invoke('text').then(new_pnr_text => {
               expect(pnrtext).to.equal(new_pnr_text)
            })
         })

      })
   }

   searchByPaxName() {
      cy.get(this.PAX_NAMES_ON_LISTING, {
         timeout: 9000
      }).invoke('text').then((pax_name) => {
         cy.get(this.FLIGHT_NUM_AND_DATE_ON_DETAILS).invoke('text').then((date_text) => {
            let flight_num = date_text.split(" ")[1]
            console.log(flight_num)
            let pax_last_name = pax_name.split(",")[0]
            this.clearSearchFileds(true)
            cy.get(this.LAST_NAME).type(pax_last_name).should('have.value', pax_last_name)
            this.clickSearchFlightButton()
            this.clearSearchFileds(true)
            this.clickSearchFlightButton()
            this.inputPaxNameValue(pax_last_name.trim())
            this.clickSearchFlightButton()
            DashboardPage.verifyAddedFlightOnListing(flight_num)
            cy.get(this.PAX_NAMES_ON_LISTING, {
               timeout: 9000
            }).invoke('text').then(new_pax_name_text => {
               expect(pax_name).to.equal(new_pax_name_text)
            })
         })
      })
   }

   filterPnrListToAccessible() {
      cy.get(this.FILTER_LIST_TO_ACCESSIBLE).click()
      cy.get(this.SSR_FILTER_DATA).should('have.length', 3)
   }

   filterPnrListToPets() {
      cy.get(this.FILTER_LIST_TO_PETS).click()
      cy.get(this.PET_FILTER_DATA).should('have.length', 2)
   }

   filterPnrListToChild() {
      cy.get(this.FILTER_LIST_TO_CHILD).click()
      cy.get(this.CHILD_FILTER_DATA).should('have.length', 2)
   }

   filterPnrListToEmail() {
      cy.get(this.FILTER_LIST_TO_EMAIL).click()
      cy.get(this.EMAIL_FILTER_DATA).should('have.length', 3)
   }

   filterPnrListToPhone() {
      cy.get(this.FILTER_LIST_TO_PHONE).click()
      cy.get(this.PHONE_FILTER_DATA).should('have.length', 3)
   }

   filterPnrListToWithoutAccommodation() {
      cy.get(this.FILTER_LIST_TO_WITHOUT_ACCOMMODATION).click()
      cy.get(this.ACCOMMODATION_FILTER_DATA).should('have.length', 0)
      cy.get(this.PNR_HOME_LIST).should('have.length', 4)
   }

   filterPnrListToWithAccommodation() {
      cy.get(this.FILTER_LIST_TO_WITH_ACCOMMODATION).click()
      cy.get(this.ACCOMMODATION_FILTER_DATA).should('have.length', 1)
      cy.get(this.HOTEL_ACCOMMODATION_DATA).should('have.length', 1)
      cy.get(this.PNR_HOME_LIST).should('have.length', 1)
   }

   filterPnrListToWithoutHotelAccommodation() {
      cy.get(this.FILTER_LIST_TO_WITHOUT_HOTEL_ACCOMMODATION).click()
      cy.get(this.HOTEL_ACCOMMODATION_DATA).should('have.length', 0)
      cy.get(this.PNR_HOME_LIST).should('have.length', 4)
   }

   clearSearchFilter() {
      cy.get(this.CLEAR_FILTER_DATA).click()
      cy.get(this.ALL_ROWS_DATA).should('have.length', 5)
   }

   inputRecordLocatorValue(record_locator) {
      // cy.wait(2000)
      cy.get(this.RECORD_LOCATOR).type(record_locator).should('have.value', record_locator)
   }

   inputPaxNameValue(last_name) {
      // cy.wait(2000)
      cy.get(this.LAST_NAME).type(last_name).should('have.value', last_name)
   }

   clickSearchFlightButton() {
      cy.get(this.SEARCH_BUTTON).should('be.visible').click()
   }

   clickMoreOptionButton() {
      cy.get(this.MORE_OPTIONS).click().wait(3000)
   }

   verifyPnr() {
      cy.get(this.PNR_RECORD_ON_LISTING, {
         timeout: 9000
      }).invoke('text').then((pnrtext) => {
         flightSearch.clickMoreOptionButton()
         flightSearch.searchByRecordLocator(pnrtext)
      })
   }

   generateDate(today_date = false, past_date = false) {
      var options = {
         year: 'numeric',
         month: 'long',
         day: 'numeric'
      }
      
      if (today_date) {     
         var today = new Date()    
         console.log(today.toLocaleDateString("en-US", options))
         return today.toLocaleDateString("en-US", options)
      }
      if (past_date) {
         var today = new Date()
         today.setDate(today.getDate() - 2)
         console.log(today.toLocaleDateString("en-US", options))
         return today.toLocaleDateString("en-US", options)
      }

   }

   formatDate(date) {
      var d = new Date(date),
         month = '' + (d.getMonth() + 1),
         day = '' + d.getDate(),
         year = d.getFullYear();

      if (month.length < 2)
         month = '0' + month;
      if (day.length < 2)
         day = '0' + day;

      return [year, month, day].join('/');
   }

   verifySearchedFlightNumber(flight_number, orgination_flight, destination_flight) {
      let date;
      cy.get(this.DATE).invoke('val').then(flight_date => {
         date = this.formatDate(flight_date)
      })
      var flights_list = cy.get(this.FLIGHTS_LIST)
      flights_list.should('have.length', 1).invoke('text').then(($flight_data => {
         expect($flight_data).to.contains(flight_number)
         let compare_string = `flight ${flight_number} flight_takeoff ${orgination_flight} flight_land ${destination_flight} date_range ${date} `
         console.log(compare_string)
         expect($flight_data).to.equal(compare_string)
      }))

   }
}
export default FlightSearch
