class HotelOffers {
    constructor() {
        this.MEAL_AMOUNT = null
        this.PNR_RECORD_LOCATOR = null
        this.OFFER_URL = null
        this.HOTEL_NAME = null
        this.CHECKIN_CODE = null
    }
    FIRST_LABEL_IMPORTANT = '[data-cy="pnrhome-li-pnr"]:nth-of-type(1) a[data-cy="pnrhome-btn-li-pnr-gotodetails"]'
    SECOND_LABEL_IMPORTANT = '[data-cy="pnrhome-li-pnr"]:nth-of-type(2) a[data-cy="pnrhome-btn-li-pnr-gotodetails"]'
    RECORD_LOCATOR_ON_OFFER_SECTION = 'div[data-cy="pnrhome-text-detail-recordlocator"]'
    FIRST_PNR_RECORD_ON_LISTING = '[data-cy="pnrhome-li-pnr"]:nth-of-type(1) [data-cy="pnrhome-text-li-pnr-recordlocator"]'
    SECOND_PNR_RECORD_ON_LISTING = '[data-cy="pnrhome-li-pnr"]:nth-of-type(2) [data-cy="pnrhome-text-li-pnr-recordlocator"]'
    OFFER_HOTEL_ARROW_BUTTON = 'button[data-cy="acc-btn-offer"]'
    CREATE_OFFERS_HEADING = 'div[data-cy="offer-text-currentoperation"]'
    OFFER_SUMMARY_HEADING = '//div[.//text()[contains(., " Offer Summary ")]][@data-cy="offer-text-currentoperation"]'
    MEAL_COST_BREAKDOWN = '[data-cy="mealsonly-list-summary-mealslist"] div.acc-area-text div:nth-of-type(2)'
    FIRST_FLIGHT_CARD = '.mat-card[data-cy="flight-li-flight"]:nth-of-type(1) div.card-flight-content'
    MEAL_DROPDOWN = '[data-cy="offer-select-mealcount"]'
    MEAL_OPTION = 'mat-option.mat-active span'
    MEAL_ALLOWANCE_TOGGLE_BUTTON = '[data-cy="offer-btn-togglemealallowance"] input'
    COMBINE_TO_ONE_CARD_BUTTON = '[data-cy="offer-btn-combinemealcards"] input'
    CONSOLIDATED_MEAL_CARD_AMT = 'div .acc-component-innercontent>div:nth-of-type(4)'
    MEAL_VOUCHER_NOT_INCLUDE_INFO = 'div[data-cy="meals-text-summary-mealsnotincluded"]'
    SAVE_OFFER_BUTTON = 'button[data-cy="offer-btn-save"]'
    CONFIRM_SEND_BUTTON = 'button[data-cy="offer-btn-summary-commit"]'
    EDIT_OFFER_BUTTON = 'button[data-cy="offer-btn-summary-edit"]'
    REMOVE_STAGED_OFFER_BUTTON = 'button[data-cy="offer-btn-summary-remove"]'
    OK_BUTTON = 'button[data-cy="mb-btn-button1"]'
    REDEEM_BY = '.meal-confirm-value-large time'
    AMOUNT = '.col-xs-4 .meal-confirm-value-large'
    PNR_HOME_LIST_DETAIL_PAX_ACTIVE = '[data-cy="pnrhome-li-detail-accommodation"]:nth-of-type(1).acc-card-active'
    PNR_HOME_LIST_DETAIL_FIRST_PAX = '[data-cy="pnrhome-li-detail-accommodation"]:nth-of-type(1)'
    PNR_HOME_LIST_DETAIL_PAX = '[data-cy="pnrhome-li-detail-accommodation"]:nth-of-type(1) [data-cy="pnrhome-list-detail-paxacc"]'
    PNR_ACCOMMODATION_STATUS = '.acc-card-active[data-cy="pnrhome-li-detail-accommodation"]:nth-of-type(1) [data-cy="pnrhome-text-li-detail-accommodation-status"]'
    PNR_HOTEL_STATUS = '.acc-card-active[data-cy="pnrhome-li-detail-accommodation"]:nth-of-type(1) [data-cy="pnrhome-text-li-detail-paxacc-hotelstatus"]'
    PNR_MEAL_STATUS = '.acc-card-active[data-cy="pnrhome-li-detail-accommodation"]:nth-of-type(1) [data-cy="pnrhome-text-li-detail-paxacc-mealstatus"]'
    PNR_HOME_RECORD_LOCATOR = '[data-cy="pnrhome-li-detail-accommodation"]:nth-of-type(1) [data-cy="pnrhome-text-li-detail-paxacc-recordlocator"]'
    PNR_HOME_RECORD_LOCATOR_LIST = '[data-cy="pnrhome-text-li-detail-paxacc-recordlocator"]'
    PNR_DETAIL_OFFER_STATUS = '[data-cy="pnrhome-text-li-detail-acc-offer"]'
    PNR_DETAIL_DECLINE_STATUS = '[data-cy="pnrhome-text-li-detail-hotelstatus-declined"]'
    PNR_DETAIL_CANCEL_STATUS = '[data-cy="pnrhome-text-li-detail-hotelstatus-canceled"]'
    PNR_HOTEL__STATUS = '//mat-cell [.//text()[contains(., "`{}`")]][@data-cy="pnrhome-text-li-detail-paxacc-hotelstatus"]'
    PNR_HOTEL_DECLINED_STATUS = '//mat-cell [.//text()[contains(., "declined")]][@data-cy="pnrhome-text-li-detail-paxacc-hotelstatus"]'
    PNR_DETAIL_BACK_BUTTON = '[data-cy="pnrhome-btn-detail-backbutton-lg"]'
    WITHOUT_ACCOMMODATION_FILTER_DATA = '[data-cy="pnrhome-text-li-pnr-meal"] [aria-hidden="true"]'
    OFFER_CONFIRMATION_ICON = '[data-cy="pnrhome-text-li-pnr-acctype-offer"][aria-hidden="true"]'
    OFFER_SUMMARY_DESCRIPTION = '[data-cy="offer-text-summary-description"]'
    HOTEL_KEY = '[data-cy="offer-text-summary-confirmationid"]'
    ISSUED_HOTEL_NAME = '[data-cy="issuance-text-summary-hotelname"]'
    CHOOSE_HOTEL_BUTTON = '.hotel-choose button'
    SELECT_FIRST_HOTEL = 'div .hotel-card:nth-of-type(4) .hotel-review button'
    RECORD_LOCATOR_ON_OFFER_URL = 'div.record-locator'
    PASSENGER_NAME_ON_OFFER_URL = 'div.pax-names'
    HOTEL_AMENITIES = 'div.hotel-amenities ul'
    SHUTTLE_PHONE_NUMBER = '.info-phone-number'
    CONFIRM_HOTEL_BUTTON = '.general-message+button'
    CONFIRMED_HOTEL_MESSAGE = 'h1.color-modern-color2'
    HOTEL_CHECKIN_CODE = 'div.hotel-confirmed-checkincode'
    CONFIRMED_HOTEL_NAME = 'div.hotel-info-name'
    CONFIRMED_HOTEL_DISTANCE = 'div.hotel-info-distance'
    CANCEL_HOTEL_BUTTON = 'div.general-message+button'
    CANCEL_CONFIRMATION_TEXT = 'div.general-message'
    OFFER_DECLINED_CONFIRMATION = 'div.color-bg-white h1'
    OFFER_DECLINED_TEXT = 'div.general-message'
    CANCEL_OFFER_BUTTON = '[data-cy="pnrhome-btn-li-detail-accommodation-cancelacc-lg"]'
    OFFER_SUMMARY_BACK_BUTTON = '[data-cy="offer-btn-tabback"]'
    MEAL_ONLY_SUMMARY_BACK_BUTTON = '[data-cy="mealsonly-btn-tabback"]'
    PROGRESS_SPINNER = '[role="progressbar"]'

    clickFlightCard() {
        cy.get(this.FIRST_FLIGHT_CARD).click()
    }

    clickLabelImportantButton(second_pax) {
        if (second_pax) {
            cy.get(this.SECOND_LABEL_IMPORTANT).click()
        }
        else {
            cy.get(this.FIRST_LABEL_IMPORTANT).click()
        }
    }

    pnrRecordOnListing(second_pax = false) {
        if (second_pax) {
            cy.get(this.SECOND_PNR_RECORD_ON_LISTING).invoke('text').then((recordLocator) => {
                return recordLocator
            })
        }
        else {
            cy.get(this.FIRST_PNR_RECORD_ON_LISTING).invoke('text').then((recordLocator) => {
                return recordLocator
            })
        }
    }

    pnrRecordOnOfferSection() {
        cy.get(this.RECORD_LOCATOR_ON_OFFER_SECTION).invoke('text').then((pnr_record_on_offer_section) => {
            return pnr_record_on_offer_section
        })
    }

    clickPnrDetailsBackButton() {
        cy.get(this.PNR_DETAIL_BACK_BUTTON).click()
    }

    clickOfferDetailsBackButton() {
        cy.server()
        cy.route('GET', '**?iata=*').as('DISRUPT_PORT')
        cy.wait(2000)
        cy.get(this.OFFER_SUMMARY_BACK_BUTTON).click()
        cy.wait(2000)
    }

    clickMealsOnlyOfferDetailsBackButton() {
        cy.get(this.MEAL_ONLY_SUMMARY_BACK_BUTTON).click()
    }

    verifyAddedHotelOffer() {
        cy.get(this.OFFER_CONFIRMATION_ICON, { timeout: 9000 }).should('be.visible')
    }

    clickOfferHotelButton() {
        cy.server()
        cy.route('GET', '**?iata=*').as('DISRUPT_PORT')
        cy.get(this.OFFER_HOTEL_ARROW_BUTTON).click()
        cy.wait('@DISRUPT_PORT').then((xhr) => {
            let iata = xhr.response.body[0].iata
            console.log(iata);
        })
        cy.get(this.CREATE_OFFERS_HEADING).invoke('text').should('be.equal', ' Create Offer ')
    }

    clickCombineToOneCardButton() {
        cy.get(this.MEAL_ALLOWANCE_TOGGLE_BUTTON).click({ force: true }).should('be.checked')
        this.clickMealDropdown()
        // cy.get(this.CONSOLIDATED_MEAL_CARD_AMT).invoke('text').should('be.equal', " Consolidated Meal Amount ")
    }

    clickMealDropdown() {
        cy.get(this.MEAL_DROPDOWN).click()
        cy.get(this.MEAL_OPTION).click()
        cy.get('div .mat-list-item-content').should('be.visible')
    }

    clickSaveButton(meal_voucher_exclude = false) {
        cy.server()
        cy.route('GET', '**&includeAccommodationPnrDetail=true').as('PNR_DETAILS')
        cy.route('GET', '**?iata=*').as('DISRUPT_PORT')
        cy.route('POST', '**/api/v1/accommodations').as('ACCOM_DETAILS')
        cy.get(this.SAVE_OFFER_BUTTON).click()
        cy.wait('@ACCOM_DETAILS').then((xhr)=> {
            let accom_id = xhr.response.body.accommodationDetail.accommodation.id
            console.log(accom_id)
        })
        cy.wait('@PNR_DETAILS').then((xhr) => {
            let accom_name = xhr.response.body[0].accommodationPnrDetails[0].accommodationName
            console.log(accom_name)
        })
        cy.wait('@DISRUPT_PORT').then((xhr) => {
            let iata = xhr.response.body[0].iata
            console.log(iata);
        })
        cy.get(this.CREATE_OFFERS_HEADING).invoke('text').should('be.equal', ' Review and Confirm Offer ')
        if (meal_voucher_exclude) {
            cy.get(this.MEAL_VOUCHER_NOT_INCLUDE_INFO).invoke('text').should('be.equal', ' Individual Meal Vouchers Not Included ')
        }
        cy.get(this.PNR_HOME_LIST_DETAIL_PAX_ACTIVE).click()
        cy.get(this.PNR_ACCOMMODATION_STATUS).invoke('text').then((accom_status) => {
            expect(accom_status).to.be.eql(" Staged ")
        })
        cy.get(this.PNR_HOTEL_STATUS).invoke('text').then((hotel_status) => {
            expect(hotel_status).to.be.eql("")
        })
        cy.get(this.PNR_MEAL_STATUS).invoke('text').then((meal_status) => {
            expect(meal_status).to.be.eql("")
        })
    }

    clickPnrHomeListDetailPax() {
        cy.get(this.PNR_HOME_LIST_DETAIL_FIRST_PAX).click()
    }

    preserveMealAmount() {
        cy.get(this.MEAL_COST_BREAKDOWN).invoke('text').then((meal_cost) => {
            let meal_price = meal_cost.replace(/\s+/g, '').split("USD").join("")
            this.MEAL_AMOUNT = meal_price
        })
    }

    getOfferUrl() {
        cy.wait('@ConfirmSend').then((xhr) => {
            let offer_url = xhr.response.body.accommodationDetail.passengers["0"].offerUrl
            this.OFFER_URL = offer_url
            console.log(this.OFFER_URL)
        })
    }

    clickConfirmSendButton() {
        cy.server()
        cy.route('PUT', '**/commit').as('ConfirmSend')
        cy.get(this.CONFIRM_SEND_BUTTON).click()
        cy.get(this.PROGRESS_SPINNER).should('not.be.visible')
        cy.wait(5000)
    }

    offerStatus() {
        cy.server()
        cy.route('GET', '**?mealvouchers=false').as('OfferStatus')
        this.clickPnrHomeListDetailPax()
        cy.wait('@OfferStatus').should('be.have.attr', 'response.body.accommodationDetail.accommodation.hotelStatus', 'accepted')
    }

    pnrHotelStatus(hotel_status) {
        return `//mat-cell [.//text()[contains(., "${hotel_status}")]][@data-cy="pnrhome-text-li-detail-paxacc-hotelstatus"]`
    }

    verifyHoteOfferStatusUpdate(status_type) {
        cy.server()
        cy.route('GET', '**?mealvouchers=false').as('OfferStatus')
        this.clickPnrHomeListDetailPax()
        cy.get(this.PROGRESS_SPINNER).should('not.be.visible')
        cy.wait('@OfferStatus').then((xhr) => {
            let status = xhr.response.body.accommodationDetail.accommodation.hotelStatus
            console.log(status);
            if (status === status_type) {
                cy.xpath(this.pnrHotelStatus(status_type), {
                    timeout: 60000
                 })
                // cy.wait(30000)
                return
            }
            else {
                cy.wait(5000)
                this.verifyHoteOfferStatusUpdate(status_type)
            }
        })
    }

    verifyOfferSummary(hotel_offer_with_meals = false) {
        cy.xpath(this.OFFER_SUMMARY_HEADING).invoke('text').should('be.equal', ' Offer Summary ')
        if (hotel_offer_with_meals) {
            cy.get(this.OFFER_SUMMARY_DESCRIPTION).invoke('text').should('be.equal', '  Hotel and Meals Offered  ')
        }
        cy.get(this.OFFER_SUMMARY_DESCRIPTION).invoke('text').should('be.equal', ' Hotel Offered Without Meals ')
        cy.get(this.PNR_HOME_LIST_DETAIL_PAX_ACTIVE, {timeout:9000}).click({force: true})
        cy.get(this.PNR_ACCOMMODATION_STATUS).invoke('text').then((accom_status) => {
            expect(accom_status).to.be.eql(" Offered ")
        })
        cy.get(this.PNR_HOTEL_STATUS).invoke('text').then((hotel_status) => {
            expect(hotel_status).to.be.eql("offered")
        })
        cy.get(this.PNR_MEAL_STATUS).invoke('text').then((meal_status) => {
            expect(meal_status).to.be.eql("not_offered")
        })
        cy.get(this.PNR_DETAIL_OFFER_STATUS).should('be.visible')
    }

    verifyAcceptedOfferSummary() {
        this.clickPnrHomeListDetailPax()
        cy.get(this.CREATE_OFFERS_HEADING).invoke('text').should('be.equal', ' Offer Summary ')
        this.verifyHoteOfferStatusUpdate("accepted")
        this.clickPnrHomeListDetailPax()
        cy.get(this.PNR_HOME_LIST_DETAIL_PAX_ACTIVE).click()
        cy.get(this.PNR_ACCOMMODATION_STATUS).invoke('text').then((accom_status) => {
            expect(accom_status).to.be.eql(" Accepted ")
        })
        cy.get(this.PNR_HOTEL_STATUS).invoke('text').then((hotel_status) => {
            expect(hotel_status).to.be.eql("accepted")
        })
    }

    verifyDeclinedOfferSummary() {
        cy.server()
        cy.route('GET', '**?iata=*').as('DISRUPT_PORT')
        this.clickPnrHomeListDetailPax()
        cy.get(this.CREATE_OFFERS_HEADING).invoke('text').should('be.equal', ' Offer Summary ')
        this.verifyHoteOfferStatusUpdate("declined")
        this.clickPnrHomeListDetailPax()
        cy.get(this.PNR_HOME_LIST_DETAIL_PAX_ACTIVE).click()
        cy.get(this.PROGRESS_SPINNER).should('not.be.visible')
        cy.get(this.PNR_ACCOMMODATION_STATUS).contains(' Declined ')
        cy.get(this.PNR_ACCOMMODATION_STATUS).invoke('text').then((accom_status) => {
            expect(accom_status).to.be.eql(" Declined ")
        })
        cy.get(this.PNR_HOTEL_STATUS).invoke('text').then((hotel_status) => {
            expect(hotel_status).to.be.eql("declined")
        })
        cy.get(this.PNR_DETAIL_DECLINE_STATUS).should('be.visible')
        cy.wait('@DISRUPT_PORT').then((xhr) => {
            let iata = xhr.response.body[0].iata
            console.log(iata);
        })
    }

    verifyCanceledOfferSummary() {
        cy.server()
        cy.route('GET', '**?iata=*').as('DISRUPT_PORT')
        cy.get(this.CREATE_OFFERS_HEADING).invoke('text').should('be.equal', ' CANCELED Offer ')
        this.clickPnrHomeListDetailPax()
        cy.get(this.PNR_ACCOMMODATION_STATUS).invoke('text').then((accom_status) => {
            expect(accom_status).to.be.eql(" Canceled ")
        })
        cy.get(this.PNR_HOTEL_STATUS).invoke('text').then((hotel_status) => {
            expect(hotel_status).to.be.eql("canceled_offer")
        })
        cy.get(this.PNR_DETAIL_CANCEL_STATUS).should('be.visible')
        cy.wait('@DISRUPT_PORT').then((xhr) => {
            let iata = xhr.response.body[0].iata
            console.log(iata);
        })
    }

    verifyOfferSummaryAfterOfferAccepted(hotel_key, hotel_name) {
        cy.get(this.HOTEL_KEY).invoke('text').then(($key) => {
            cy.wrap($key.trim()).should('be.equal', hotel_key.trim())
        })
        cy.get(this.ISSUED_HOTEL_NAME).invoke('text').then(($hotel_name) => {
            cy.wrap($hotel_name.trim()).should('be.equal', hotel_name.trim())
        })
    }

    clickEditOfferButton() {
        cy.server()
        cy.route('GET', '**&includeAccommodationPnrDetail=true').as('PNR_DETAILS')
        cy.route('GET', '**?iata=*').as('DISRUPT_PORT')
        cy.route('PUT', '**/api/v1/accommodations/*').as('ACCOM_DETAILS')
        cy.get(this.EDIT_OFFER_BUTTON).click()
        // cy.get(this.MEAL_ALLOWANCE_TOGGLE_BUTTON + '[aria-checked="true"]').should('have.property', 'position', 'fixed')
        cy.get(this.SAVE_OFFER_BUTTON).should('be.visible').click()
        cy.wait('@ACCOM_DETAILS').then((xhr)=> {
            let accom_id = xhr.response.body.accommodationDetail.accommodation.id
            console.log(accom_id)
        })
        cy.wait('@PNR_DETAILS').then((xhr) => {
            let accom_name = xhr.response.body[0].accommodationPnrDetails[0].accommodationName
            console.log(accom_name)
        })
        cy.wait('@DISRUPT_PORT').then((xhr) => {
            let iata = xhr.response.body[0].iata
            console.log(iata);
        })
        cy.get(this.PNR_HOME_LIST_DETAIL_PAX_ACTIVE).click()
        cy.get(this.PNR_HOME_RECORD_LOCATOR).invoke('text').then((record_locator) => {
            this.PNR_RECORD_LOCATOR = record_locator
        })
        cy.get(this.CONFIRM_SEND_BUTTON, { timeout: 9000 }).should('be.visible')
    }

    clickRemoveStagedOffer(pnr_record_locator) {
        cy.get(this.REMOVE_STAGED_OFFER_BUTTON).click()
        cy.get(this.OK_BUTTON).click({ force: true })
        cy.get(this.OFFER_HOTEL_ARROW_BUTTON, { timeout: 6000 }).should('be.visible')
        cy.get(this.PNR_HOME_RECORD_LOCATOR_LIST).should('not.contain.text', pnr_record_locator)
    }

    cancelHotelOffer() {
        cy.get(this.CANCEL_OFFER_BUTTON).click()
        cy.get(this.OK_BUTTON).click()
        cy.get(this.CANCEL_OFFER_BUTTON).should('not.be.visible')
        cy.get(this.CREATE_OFFERS_HEADING).invoke('text').should('be.equal', ' CANCELED Offer ')
    }

    offerCancelConfirmation() {
        cy.get(this.OFFER_DECLINED_CONFIRMATION).should('be.visible')
        cy.get(this.OFFER_DECLINED_TEXT).invoke('text').then(($offer_cancel_text) => {
            cy.wrap($offer_cancel_text.trim()).should('be.equal', 'Please see an agent if you need help.')
        })
    }

    declineHotelOffer() {
        cy.get(this.CANCEL_CONFIRMATION_TEXT).invoke('text').should('be.equal', "Please confirm you want to cancel your hotel reservation.If you change your mind and need a hotel room, please see an agent.")
        cy.get(this.CANCEL_HOTEL_BUTTON).click()
        cy.wait(3000)
        this.offerDeclineConfirmation()
    }

    offerDeclineConfirmation() {
        cy.get(this.OFFER_DECLINED_CONFIRMATION).should('be.visible')
        cy.get(this.OFFER_DECLINED_TEXT).invoke('text').then(($offer_decline_text) => {
            cy.wrap($offer_decline_text.trim()).should('be.equal', 'If you change your mind and would like to accept the offer, please see a gate agent.')
        })
    }

    clickChooseHotelButton() {
        cy.get(this.CHOOSE_HOTEL_BUTTON, { timeout: 9000 }).click()
        cy.get(this.SELECT_FIRST_HOTEL, { timeout: 10000 }).click()
    }

    reviewAndConfirmHotel() {
        cy.get(this.CONFIRM_HOTEL_BUTTON).click()
        cy.wait(3000)
        cy.get(this.CONFIRMED_HOTEL_MESSAGE).should('have.text', 'Your hotel is confirmed!')
    }

    getHotelDetail() {
        cy.get(this.CONFIRMED_HOTEL_NAME).invoke('text').then((hotel_name) => {
            this.HOTEL_NAME = hotel_name
        })
        cy.get(this.HOTEL_CHECKIN_CODE).invoke('text').then((checkin_code) => {
            this.CHECKIN_CODE = checkin_code
        })
    }
}
export default HotelOffers