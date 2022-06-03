import LoginPage from '../pages/login_page'
import DashboardPage from '../pages/dashboard_page'
import PnrOffers from '../pages/meals_only_offers'
import HotelOffers from '../pages/offer_hotels'
import NewFlightMealOffer from '../helpers/new_flight_api'
import FlightSearch from '../pages/flight_search'
import NewPnr from '../helpers/new_pnr_api'


let user
let flight_number
let meal_offer

before(function fetchUser() {
  cy.request({
    method: 'POST',
    url: 'https://prtestagentapi.tvlinc.com/api/v1/auth',

    headers: {
      'origin': 'https://prtestagent.tvlinc.com',
      'content-type': 'application/json',
      'referer': 'https://prtestagent.tvlinc.com/login'
    },
    body: {
      loginName: 'adminagent',
      password: 'Passenger2019!',
    }
  }).should((response) => {
    user = response.body.token
  })
})

describe('Meals only offer', () => {
  let pnr_record
  let flight_meal_offer
  let meal_amount
  let pnroffer_record_locator

  it.skip('Create single PNR meal only offer email url.', () => {
    const login = new LoginPage('adminagent', 'Passenger2019!')
    const dashboard = new DashboardPage()
    const pnroffer = new PnrOffers()
    flight_number = dashboard.preserveFlightNum()
    flight_meal_offer = new NewFlightMealOffer(user, flight_number)
    flight_meal_offer.addNewFlight()
    console.log(flight_meal_offer.offer_url)
    
  })

  it(`Verify that user should be redirected to specific passenger's details window by clicking on the arrow against to that passenger.`, () => {
    const login = new LoginPage('adminagent', 'Passenger2019!')
    const dashboard = new DashboardPage()
    const hoteloffer = new HotelOffers()
    const flightsearch = new FlightSearch()
    flight_number = dashboard.preserveFlightNum()
    flight_meal_offer = new NewFlightMealOffer(user, flight_number)
    flight_meal_offer.addNewFlight()
    dashboard.clickAddPnrCancelButton()
    DashboardPage.verifyAddedFlightOnListing(flight_number)
    let record_locator = hoteloffer.pnrRecordOnListing()
    hoteloffer.clickLabelImportantButton()
    let pnr_record = hoteloffer.pnrRecordOnOfferSection()
    expect(pnr_record).to.equal(record_locator)
  })

  it('Verify that Create Offer window should be displayed by clicking on arrow opposite to Meals Only Text.', () => {
    const pnroffer = new PnrOffers()
    pnroffer.clickMealsOnlyButton()
  })

  it('Verify that meal allowances should be combined by enabling the the toggle button.	', () => {
    const pnroffer = new PnrOffers()
    pnroffer.clickCombineToOneCardButton()
  })

  it(`Verify that passenger record details should be autopopulated into the create offer form.															
      Verify that Meal offer should be created by clicking on the save button.`, () => {
    const pnroffer = new PnrOffers()
    pnroffer.clickMealDropdown()
    pnroffer.clickSaveButton()
  })

  it('Verify that created Meal Offer should be editable by clicking on edit button.', () => {
    pnroffer_record_locator = new PnrOffers()
    pnroffer_record_locator.clickEditOfferButton()
  })

  it('Verify that user should be able to remove the meal offer from staged by clicking on Remove staged Offer button.', () => {
    console.log(pnroffer_record_locator.PNR_RECORD_LOCATOR);
    pnroffer_record_locator.clickRemoveStagedOffer(pnroffer_record_locator.PNR_RECORD_LOCATOR)
  })

  it('Verify that Accommodation offer summary should be displayed on screen by cicking on Confirm and Send button.', () => {
    meal_amount = new PnrOffers()
    meal_offer = new HotelOffers()
    meal_amount.clickMealsOnlyButton()
    meal_amount.clickMealDropdown()
    meal_amount.clickSaveButton()
    meal_amount.preserveMealAmount()
    meal_amount.clickConfirmSendButton()
    meal_offer.getOfferUrl()
    meal_amount.verifyMealsIssuanceSummary()
  })

  it('Verify that passengers should be notified about the Meal offer on provided email address.', () => {
    const pnroffer = new PnrOffers()
    cy.visit(meal_offer.OFFER_URL)
    pnroffer.getOfferAmount(meal_amount.MEAL_AMOUNT)
    pnroffer.getOfferRedeemBy()
  })

})