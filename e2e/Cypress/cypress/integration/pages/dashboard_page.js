class DashboardPage {
   FLIGHT_NUM = Math.floor(1000 + Math.random() * 9000)
   USER_EMAIL = "agentapp2020@gmail.com"
   PAX_STATUS = "Platinum"
   TICKET_LEVEL = "business"
   YOUNG_ADULT = 'Young Adult'
   CHILD = 'Child'
   PETS = "pets"
   PAXS = "1"
   SSR = "accessible"
   RECORD_LOCATOR = '[data-cy="newpnr-recordlocator"]'
   NEW_FLIGHT_BUTTON = 'button[data-cy="home-btn-newflight"]'
   ORIGINATION_PORT = "LAX"
   ORIGINATION_PORT_SELECTOR = '//input[@data-cy="flight-inp-originationport"]'
   DESTINATION_PORT = "SYD"
   DESTINATION_PORT_SELECTOR = '//input[@data-cy="flight-inp-destinationport"]'
   DISRUPTION_PORT = "ORD"
   DISRUPTION_PORT_SELECTOR = '//input[@data-cy="flight-inp-disruptport"]'
   FLIGHT_NUMBER_SELECTOR = '//div[.//text()[contains(., " Flight Number ")]]/following-sibling::div[@class="md-input"]//input'
   SAVE_BUTTON = 'button[data-cy="flight-btn-save"]'
   CANCEL_BUTTON = 'button[data-cy="newpnr-btn-cancel"]'
   PNR_MODAL = 'app-new-pnr-modal div.dialog'
   PORT_OVERLAY = '.port-option .mat-option-text'
   FLIGHT_ERROR_BOX = '.mat-dialog-container > app-messagebox div.mb-body'
   //    FLIGHT_ERROR_BOX = 'div.app-no-padding-dialog .mb-body'
   OK_BUTTON = 'button[data-cy="mb-btn-button1"]'
   OK_BUTTON_NEW = 'div .mat-dialog-container .tb-btn-sm-endcontainer button'
   SEARCH_BUTTON = 'button[data-cy="flight-btn-search"]'
   ERROR_MESSAGES_ON_NEW_FLIGHT_FORM = 'div[data-cy="flight-list-errorlist"]'
   FLIGHT_NUMBER_ON_SIDE_NAVBAR = '//div[@class="card-flight-title"]//div[.//text()[contains(., " `{}` ")]]/div[2]'
   ADMIN_BUTTON = 'div[data-cy="home-text-username"]'
   LOGOUT_BUTTON = 'button[data-cy="home-btn-logout"]'
   NEW_PNR_BUTTON = 'button[data-cy="pnrhome-btn-newpnr-lg"]'
   NEXT_BUTTON = 'button[data-cy="newpnr-btn-next"]'
   ADD_PASSENGER = '[data-cy="newpnr-btn-newmember"]'
   LAST_NAME_TEXTFIELD = '[data-cy="edit-pax-lastname"]'
   FIRST_NAME_TEXTFIELD = '[data-cy="edit-pax-firstname"]'
   EDIT_FIELD = '[aria-colindex="1"] input.dx-texteditor-input'
   SSR_CHECKBOX = '[data-cy="edit-pax-ssr"] input[type="checkbox"]'
   SSR_CHECKBOX_CHECKED = '[data-cy="edit-pax-servicepet"] [name="edit-pax-servicepet"][aria-checked="true"]'
   PET_CHECKBOX = '[data-cy="edit-pax-pet"] input[type="checkbox"]'
   PET_CHECKBOX_CHECKED = '[data-cy="edit-pax-pet"] [name="edit-pax-pet"][aria-checked="true"]'
   SERVICED_PET_CHECKBOX = '[data-cy="edit-pax-servicepet"] input[type="checkbox"]'
   SERVICED_PET_CHECKBOX_CHECKED = '[data-cy="edit-pax-servicepet"] [name="edit-pax-servicepet"][aria-checked="true"]'
   SSR_PETS_CHECKBOX_CHECKED = '[data-cy="edit-pax-servicepet"] [name="edit-pax-servicepet"]'
   PNR_STATS_ON_FOOTER = '.mat-tab-body-wrapper .pnr-stats-container'
   PAX_STATUS_DROPDOWN = 'select[data-cy="edit-pax-paxstatus"]'
   LIFE_STAGE_DROPDOWN_LIST = 'select[data-cy="edit-pax-lifestage"] option'
   PAX_STATUS_DROPDOWN_LIST = 'select[data-cy="edit-pax-paxstatus"] option'
   TICKET_LEVEL_DROPDOWN_LIST = 'select[data-cy="edit-pax-ticketlevel"] option'
   TICKET_LEVEL_DROPDOWN = 'select[data-cy="edit-pax-ticketlevel"]'
   PAX_STATUS_SELECTION = 'td:nth-of-type(3) .dx-selectbox .dx-dropdowneditor-input-wrapper input[type="text"]'
   TICKET_LEVEL_SELECTION = 'td:nth-of-type(4) .dx-selectbox .dx-dropdowneditor-input-wrapper input[type="text"]'
   EMAIL_TEXT_FIELD = '[data-cy="edit-pax-email"]'
   PHONE_TEXT_FIELD = '[data-cy="edit-pax-phone"]'
   LIFE_STAGE_DROPDOWN = 'select[data-cy="edit-pax-lifestage"]'
   LIFE_STAGE_SELECTION = 'td:nth-of-type(7) .dx-selectbox .dx-dropdowneditor-input-wrapper input[type="text"]'
   CLOSE_BUTTON = 'button[data-cy="newpnr-btn-close"]'
   PNR_RECORD_ON_LISTING = '[data-cy="pnrhome-text-li-pnr-recordlocator"]'
   PORTS_LIST = 'div.port-input input[role="combobox"]'
   TODAY_DATE = 'table .mat-calendar-body-today'
   PREVIOUS_DATE = 'table td[aria-label="%s"]'
   SCHEDULE_DATE_CALENDAR_OPEN = 'div.flt-dialog-content>div:nth-of-type(2) button[aria-label="Open calendar"] .mat-datepicker-toggle-default-icon'
   OPEN_SEARCH_FLIGHT_CALENDAR = 'button[aria-label="Open calendar"] .mat-datepicker-toggle-default-icon'
   SAVE_PNR_BUTTON = 'button[data-cy="edit-pax-btn-save"]'
   FLIGHTS_BUTTON = '[data-cy="home-btn-flights"]'
   
   isNavBarVisible() {
      cy.get('button.btn-search', {
         timeout: 10000
      }).should('be.visible')
   }

   clickFlightsTab() {
      cy.get(this.FLIGHTS_BUTTON).click()
      cy.get(this.SEARCH_BUTTON).should('be.visible')
   }

   clickNewFlightButton() {
      cy.get(this.NEW_FLIGHT_BUTTON).as('flightBtn')
      cy.get('@flightBtn').click().should('contain', "New Flight")
   }

   clickLogoutButton() {
      cy.get(this.ADMIN_BUTTON).should('to.exist').click()
      cy.get(this.LOGOUT_BUTTON).should('be.visible').click()
   }
   preserveFlightNum() {
      return this.FLIGHT_NUM
   }

   openSearchFlightCalendar() {
      cy.get(this.OPEN_SEARCH_FLIGHT_CALENDAR).click()
   }

   clearFlightForm() {
      cy.xpath(this.ORIGINATION_PORT_SELECTOR).clear()
      cy.xpath(this.DESTINATION_PORT_SELECTOR).clear()
      cy.xpath(this.FLIGHT_NUMBER_SELECTOR).clear()
      cy.xpath(this.DISRUPTION_PORT_SELECTOR).clear()
   }

   fillNewFlightInformationForm(flight_number, orgination_flight, destination_flight, schedule_date='', past_date=false) {
      cy.server()
      cy.route('GET', '**?iata=*').as('PORT')
      cy.xpath(this.ORIGINATION_PORT_SELECTOR).click().type(orgination_flight)
      cy.wait('@PORT').then((xhr) => {
         let iata = xhr.response.body[0].iata
         console.log(iata);
     })
      cy.get(this.PORT_OVERLAY, {
         timeout: 10000
      }).should('be.visible').click()
      cy.xpath(this.DESTINATION_PORT_SELECTOR).click().type(destination_flight)
      cy.wait('@PORT').then((xhr) => {
         let iata = xhr.response.body[0].iata
         console.log(iata);
     })
      cy.get(this.PORT_OVERLAY, {
         timeout: 10000
      }).should('be.visible').click()
      cy.xpath(this.FLIGHT_NUMBER_SELECTOR).type(flight_number)
      cy.xpath(this.FLIGHT_NUMBER_SELECTOR).invoke('val').then((flight) => {
         expect(flight).to.be.equal(flight_number.toString())
      })
      cy.xpath(this.DISRUPTION_PORT_SELECTOR).click().type(this.DISRUPTION_PORT)
      cy.get(this.PORT_OVERLAY, {
         timeout: 10000
      }).should('be.visible').click()
      if(past_date){
         cy.get(this.SCHEDULE_DATE_CALENDAR_OPEN).click()
         this.selectPastDate(schedule_date)
      }
   }

   flightDuplicateErrorValidation() {
      cy.get(this.FLIGHT_ERROR_BOX, {
         timeout: 10000
      }).should('be.exist').invoke('text').then((error) => {
         expect(error).to.be.equal(' An error occurred while saving the new Flight, Message: A flight has already been created with this flight number and date ')
      })
   }

   checkDuplicateError() {
      cy.get(this.FLIGHT_ERROR_BOX, {
         timeout: 10000
      }).then((error) => {
         return true
      })
      return false
   }

   clickSaveButton() {
      cy.get(this.SAVE_BUTTON).click()
      cy.wait(4000)
   }

   clickOkButton() {
      cy.get(this.OK_BUTTON, {
         timeout: 6000
      }).scrollIntoView().click({
         force: true
      })
      cy.get(this.FLIGHT_ERROR_BOX).should('not.be.visible')
   }

   getScheduleDate(schedule_date){
      return `table td[aria-label="${schedule_date}"]`
   }

   selectPastDate(schedule_date){
      console.log(schedule_date);
      cy.get(`table td[aria-label="${schedule_date}"]`).click()
   }

   static getFlightXpath(flightNum) {
      return `//div[@class="flight-list-pnl flight-list-pnl-gt-md"]//div[@class="card-flight-title"]//div[.//text()[contains(., "${flightNum}")]]/div[2]`
   }

   clickSearchFlightButton() {
      cy.get(this.SEARCH_BUTTON).should('be.visible').click()
   }

   static verifyAddedFlightOnListing(flightNum) {
      cy.xpath(this.getFlightXpath(flightNum)).click()
   }

   getRecordLocator() {
      cy.get(this.RECORD_LOCATOR).invoke('val').then((recordLocator) => {
         return recordLocator
      })
   }

   clickAddPnrButton() {
      // console.log("New Button")
      // cy.get(this.PNR_STATS_ON_FOOTER).click()
      //    .invoke('attr', 'style', 'display: none! important')
      // expect(this.getFlightXpath).should('not.be.visible')
      cy.get(this.NEW_PNR_BUTTON, {
         timeout: 9000
      }).click()
      cy.get(this.RECORD_LOCATOR, {timeout: 9000}).invoke('val').then((recordLocator) => {
         console.log(recordLocator);
         return recordLocator
      })
   }
   clickNextButton() {
      cy.get(this.NEXT_BUTTON).click()
   }

   clickAddPnrCancelButton() {
      cy.get(this.CANCEL_BUTTON).should('contain.text', 'Cancel').click({ force: true })
      cy.get(this.PNR_MODAL).should('not.be.visible')
   }
   
   clickAddPassengerButton() {
      cy.get(this.ADD_PASSENGER).click()
   }

   fillPnrPaxRecords(email=false, phone= false, child=false, ssr_checked=false, pet_checked=false, service_pet_checked=false) {
      var faker = require('faker')
      var LAST_NAME = faker.fake("{{name.lastName}}")
      var FIRST_NAME = faker.fake("{{name.firstName}}")
      cy.get(this.FIRST_NAME_TEXTFIELD).type(FIRST_NAME)
      cy.get(this.LAST_NAME_TEXTFIELD).type(LAST_NAME)
      if(email){
         // var USER_EMAIL = faker.internet.email()
         cy.get(this.EMAIL_TEXT_FIELD).type(this.USER_EMAIL)
      }
      if (phone) {
         // var USER_PHONE = faker.phone.phoneNumber()
         let USER_PHONE = "+923006532211"
         cy.get(this.PHONE_TEXT_FIELD).type(USER_PHONE)
      }
      // Fill Life Stage dropdown
      cy.get(this.LIFE_STAGE_DROPDOWN_LIST).should('have.length', 3).then(option => {
         expect(option[0], 'first item').to.contain('Adult')
         expect(option[1], 'second item').to.contain('Young Adult')
         expect(option[2], 'third item').to.contain('Child')
         if (child) {
            cy.get(this.LIFE_STAGE_DROPDOWN).select('Child').should('have.value', '3')
         }
         else {
            cy.get(this.LIFE_STAGE_DROPDOWN).select('Adult').should('have.value', '1')
         }
      })

      // Fill Pax Status dropdown
      cy.get(this.PAX_STATUS_DROPDOWN_LIST).should('have.length', 3).then(option => {
         expect(option[0], 'first item').to.contain('None')
         expect(option[1], 'second item').to.contain('Gold')
         expect(option[2], 'third item').to.contain('Platinum')
         cy.get(this.PAX_STATUS_DROPDOWN).select('Gold')
      })
      // Fill Ticket Level dropdown
      cy.get(this.TICKET_LEVEL_DROPDOWN_LIST).should('have.length', 4).then(option => {
         expect(option[0], 'first item').to.contain('First')
         expect(option[1], 'second item').to.contain('Business')
         expect(option[2], 'third item').to.contain('Premium Economy')
         expect(option[3], 'fourth item').to.contain('Economy')
         cy.get(this.TICKET_LEVEL_DROPDOWN).select('Premium Economy')
      })
      if (ssr_checked){
         cy.get(this.SSR_CHECKBOX).check({force: true}).should('be.checked')
      }
      if (pet_checked){
         cy.get(this.PET_CHECKBOX).check({force: true}).should('be.checked')
      }
      if (service_pet_checked){
         cy.get(this.SERVICED_PET_CHECKBOX).check({force: true}).should('be.checked')
      }
   }

   clickSavePnrButton() {
      cy.get(this.SAVE_PNR_BUTTON).click()
      cy.wait(4000)
   }

   clickCloseButton() {
      cy.get(this.CLOSE_BUTTON).click()
      cy.wait(4000)
   }

   verifyNewPnrOnListing() {
      cy.get(this.PNR_RECORD_ON_LISTING, {
         timeout: 9000
      }).invoke('text').then((pnrtext) => {
         console.log(pnrtext)
         return pnrtext
      })
   }

   EmptyFieldsErrorsValidationOnNewFlightForm() {
      cy.get(this.ERROR_MESSAGES_ON_NEW_FLIGHT_FORM).should('be.visible').invoke('text').then((errors) => {
         expect(errors).to.be.equal(' Flight Number is a required field  Port Of Disruption is a required Field  Origination Port is a required Field  Destination Port is a required Field ')
      })
   }
}

export default DashboardPage
