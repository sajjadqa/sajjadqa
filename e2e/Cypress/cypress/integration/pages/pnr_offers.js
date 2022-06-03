class PnrOffers {
    constructor() {
        this.MEAL_AMOUNT = null
        this.PNR_RECORD_LOCATOR = null
    }
    LABEL_IMPORTANT = '[data-cy="pnrhome-li-pnr"]:nth-of-type(1) a[data-cy="pnrhome-btn-li-pnr-gotodetails"]'
    RECORD_LOCATOR_ON_OFFER_SECTION = 'div[data-cy="pnrhome-text-detail-recordlocator"]'
    PNR_RECORD_ON_LISTING = '[data-cy="pnrhome-li-pnr"]:nth-of-type(1) [data-cy="pnrhome-text-li-pnr-recordlocator"]'
    MEALS_ONLY_ARROW_BUTTON = 'button[data-cy="acc-btn-mealsonly"]'
    MEALS_ONLY_ISSUANCE_HEADING = 'div[data-cy="mealsonly-text-currentoperation"]'
    MEALS_ONLY_ISSUANCE_SUMMARY = '//div[.//text()[contains(., " Meals Issuance Summary ")]][@data-cy="mealsonly-text-currentoperation"]'
    MEALS_OFFER_DESCRIPTION = '[data-cy="mealsonly-text-summary-description"]'
    MEAL_COST_BREAKDOWN = '[data-cy="mealsonly-list-summary-mealslist"] div.acc-area-text div:nth-of-type(2)'
    FIRST_FLIGHT_CARD = '.mat-card[data-cy="flight-li-flight"]:nth-of-type(1) div.card-flight-content'
    MEAL_DROPDOWN = '[data-cy="mealsonly-select-mealcount"]'
    MEAL_OPTION = 'mat-option.mat-active span'
    COMBINE_TO_ONE_CARD_BUTTON = '[data-cy="mealsonly-btn-combinemealcards"] input'
    CONSOLIDATED_MEAL_CARD_AMT = 'div .acc-component-innercontent>div:nth-of-type(5)'
    SAVE_ACCOMODATION_BUTTON = 'button[data-cy="mealsonly-btn-save"]'
    CONFIRM_SEND_BUTTON = 'button[data-cy="mealsonly-btn-summary-commit"]'
    EDIT_OFFER_BUTTON = 'button[data-cy="mealsonly-btn-summary-edit"]'
    REMOVE_STAGED_OFFER_BUTTON = 'button[data-cy="mealsonly-btn-summary-remove"]'
    OK_BUTTON = 'button[data-cy="mb-btn-button1"]'
    REDEEM_BY = '.meal-confirm-value-large time'
    AMOUNT = '.col-xs-4 .meal-confirm-value-large'
    PNR_HOME_LIST_DETAIL_PAX_ACTIVE = '[data-cy="pnrhome-li-detail-accommodation"]:nth-of-type(1).acc-card-active'
    PNR_HOME_LIST_DETAIL_PAX = '[data-cy="pnrhome-li-detail-accommodation"]:nth-of-type(1) [data-cy="pnrhome-list-detail-paxacc"]'
    PNR_ACCOMMODATION_STATUS = '[data-cy="pnrhome-li-detail-accommodation"]:nth-of-type(1) [data-cy="pnrhome-text-li-detail-accommodation-status"]'
    PNR_HOTEL_STATUS = '[data-cy="pnrhome-li-detail-accommodation"]:nth-of-type(1) [data-cy="pnrhome-text-li-detail-paxacc-hotelstatus"]'
    PNR_MEAL_STATUS = '[data-cy="pnrhome-li-detail-accommodation"]:nth-of-type(1) [data-cy="pnrhome-text-li-detail-paxacc-mealstatus"]'
    PNR_HOTEL_ACCEPTED_STATUS = '//mat-cell [.//text()[contains(., "accepted")]][@data-cy="pnrhome-text-li-detail-paxacc-hotelstatus"]'
    PNR_HOTEL_DECLINED_STATUS = '//mat-cell [.//text()[contains(., "declined")]][@data-cy="pnrhome-text-li-detail-paxacc-hotelstatus"]'
    PNR_HOME_RECORD_LOCATOR = '[data-cy="pnrhome-li-detail-accommodation"]:nth-of-type(1) [data-cy="pnrhome-text-li-detail-paxacc-recordlocator"]'
    PNR_HOME_RECORD_LOCATOR_LIST = '[data-cy="pnrhome-text-li-detail-paxacc-recordlocator"]'
    PNR_DETAIL_BACK_BUTTON = '[data-cy="pnrhome-btn-detail-backbutton-lg"]'
    WITHOUT_ACCOMMODATION_FILTER_DATA = '[data-cy="pnrhome-text-li-pnr-meal"] [aria-hidden="true"]'
    WITHOUT_HOTEL_ACCOMMODATION_FILTER_DATA = '[data-cy="pnrhome-text-li-pnr-acctype-offer"][aria-hidden="true"]'

    clickFlightCard() {
        cy.get(this.FIRST_FLIGHT_CARD).click()
    }

    clickLabelImportantButton() {
        cy.get(this.LABEL_IMPORTANT).click()
    }

    pnrRecordOnListing() {
        cy.get(this.PNR_RECORD_ON_LISTING).invoke('text').then((recordLocator) => {
            return recordLocator
        })
    }

    pnrRecordOnOfferSection() {
        cy.get(this.RECORD_LOCATOR_ON_OFFER_SECTION).invoke('text').then((pnr_record_on_offer_section) => {
            return pnr_record_on_offer_section
        })
    }

    verifyAddedMealOffer() {
        cy.get(this.WITHOUT_ACCOMMODATION_FILTER_DATA).should('have.length', 1)
    }

    verifyAddedHotelOffer() {
        cy.get(this.WITHOUT_HOTEL_ACCOMMODATION_FILTER_DATA).should('have.length', 1)
    }

    clickMealsOnlyButton() {
        cy.get(this.MEALS_ONLY_ARROW_BUTTON).click()
        cy.get(this.MEALS_ONLY_ISSUANCE_HEADING).invoke('text').should('be.equal', ' Meals Only Issuance ')
    }

    clickCombineToOneCardButton() {
        cy.get(this.COMBINE_TO_ONE_CARD_BUTTON).click({force: true}).should('be.checked')
        cy.get(this.CONSOLIDATED_MEAL_CARD_AMT).invoke('text').should('be.equal', " Consolidated Meal Amount ")
    }

    clickMealDropdown() {
        cy.get(this.MEAL_DROPDOWN).click()
        cy.get(this.MEAL_OPTION).click()
        cy.get('div .mat-list-item-content').should('be.visible')
    }

    clickSaveButton() {
        cy.get(this.SAVE_ACCOMODATION_BUTTON).click()
        cy.get(this.MEALS_ONLY_ISSUANCE_HEADING).invoke('text').should('be.equal', ' Review and Confirm Issuance ')
        cy.get(this.PNR_HOME_LIST_DETAIL_PAX_ACTIVE).click()
        cy.get(this.PNR_ACCOMMODATION_STATUS).invoke('text').then((accom_status)=> {
            expect(accom_status).to.be.eql(" Staged ")
        })
        cy.get(this.PNR_HOTEL_STATUS).invoke('text').then((hotel_status)=> {
            expect(hotel_status).to.be.eql("")
        })
        cy.get(this.PNR_MEAL_STATUS).invoke('text').then((meal_status)=> {
            expect(meal_status).to.be.eql("")
        })
    }

    preserveMealAmount() {
        cy.get(this.MEAL_COST_BREAKDOWN).invoke('text').then((meal_cost) => {
            let meal_price = meal_cost.replace(/\s+/g, '').split("USD").join("")
            this.MEAL_AMOUNT = meal_price
        })
    }

    clickConfirmSendButton() {
        cy.server()
        cy.route('PUT', '**/commit').as('ConfirmSend')
        cy.get(this.CONFIRM_SEND_BUTTON).click()
        cy.get(this.PROGRESS_SPINNER).should('not.be.visible')
        cy.wait(5000)
    }
    
    verifyMealsIssuanceSummary() {
        cy.xpath(this.MEALS_ONLY_ISSUANCE_SUMMARY).invoke('text').should('be.equal', ' Meals Issuance Summary ')
        cy.get(this.MEALS_OFFER_DESCRIPTION).invoke('text').should('be.equal', ' Meals Issued ')
        cy.get(this.PROGRESS_SPINNER).should('not.be.visible')
        cy.get(this.PNR_HOME_LIST_DETAIL_PAX_ACTIVE).click({force: true})
        cy.get(this.PNR_ACCOMMODATION_STATUS).invoke('text').then((accom_status)=> {
            expect(accom_status).to.be.eql(" Offered ")
        })
        cy.get(this.PNR_HOTEL_STATUS).invoke('text').then((hotel_status)=> {
            expect(hotel_status).to.be.eql("not_offered")
        })
        cy.get(this.PNR_MEAL_STATUS).invoke('text').then((meal_status)=> {
            expect(meal_status).to.be.eql("accepted")
        })
    }

    clickEditOfferButton() {
        cy.get(this.EDIT_OFFER_BUTTON).click()
        cy.get(this.SAVE_ACCOMODATION_BUTTON).should('be.visible').click()
        cy.get(this.PNR_HOME_LIST_DETAIL_PAX_ACTIVE).click()
        cy.get(this.PNR_HOME_RECORD_LOCATOR).invoke('text').then((record_locator)=> {
            this.PNR_RECORD_LOCATOR = record_locator
        })
        cy.get(this.CONFIRM_SEND_BUTTON, { timeout: 9000 }).should('be.visible')
    }

    clickRemoveStagedOffer(pnr_record_locator) {
        cy.get(this.REMOVE_STAGED_OFFER_BUTTON).click()
        cy.get(this.OK_BUTTON).click()
        cy.get(this.MEALS_ONLY_ARROW_BUTTON).should('be.visible')
        cy.get(this.PNR_HOME_RECORD_LOCATOR_LIST).should('not.contain.text', pnr_record_locator)
    }

    getOfferAmount(meal_price) {
        cy.get(this.AMOUNT, {timeout:9000}).invoke('text').then((meal_amount) => {
            console.log(meal_amount);
            let meal_per_amount = meal_amount.split('.00').join("")
            expect(meal_per_amount).to.eql(meal_price)
            // return meal_amount
        })
    }
    getOfferRedeemBy() {
        cy.get(this.REDEEM_BY).invoke('text').then((redeem_by) => {
            console.log(redeem_by)
            let months_syn = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            let date = new Date()
            const current_date = new Date(date)
            current_date.setDate(current_date.getDate() + 1)
            let redeem_date = months_syn[current_date.getMonth()] + " " + current_date.getDate() + "," + " " + current_date.getFullYear()
            expect(redeem_date).to.eql(redeem_by)
        })
    }

}

export default PnrOffers