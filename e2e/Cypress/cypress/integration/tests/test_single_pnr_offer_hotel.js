import LoginPage from '../pages/login_page'
import DashboardPage from '../pages/dashboard_page'
import PnrOffers from '../pages/meals_only_offers'
import HotelOffers from '../pages/offer_hotels'
import NewFlightMealOffer from '../helpers/new_flight_api'
import FlightSearch from '../pages/flight_search'
import StormxLoginPage from '../pages/stormx_login_page'
import NewPnr from '../helpers/new_pnr_api'

let user
let flight_number
let cancel_offer
let decline_offer
let hotel_offer
let offered_hotel
let cancel_offers
let declined_offers

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

describe('Offer Hotel - Passenger Chooses Hotell', () => {
  let pnr_record
  let flight_meal_offer
  let meal_amount
  let pnroffer_record_locator

  it.skip('Create single PNR offer_hotel email url.', () => {
    const login = new LoginPage('adminagent', 'Passenger2019!')
    const dashboard = new DashboardPage()
    const pnroffer = new PnrOffers()
    flight_number = dashboard.preserveFlightNum()
    flight_meal_offer = new NewFlightMealOffer(user, flight_number)
    flight_meal_offer.addNewFlight(true)
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

  it('Verify that Create Offer window should be displayed by clicking on arrow opposite to Offer Hotel-Passenger Chooses Hotel Text.', () => {
    const hoteloffer = new HotelOffers()
    hoteloffer.clickOfferHotelButton()
  })

  it('Verify that meal allowances should be included with offer hotel by enabling the the toggle button.	', () => {
    const hoteloffer = new HotelOffers()
    hoteloffer.clickCombineToOneCardButton()
  })

  it(`Verify that passenger record details should be autopopulated into the create offer form.															
      Verify that hotel offer should be created by clicking on the save button.`, () => {
    const hoteloffer = new HotelOffers()
    hoteloffer.clickSaveButton()
  })

  it('Verify that created hotel offer should be editable by clicking on edit button.', () => {
    const hoteloffer = new HotelOffers()
    hoteloffer.clickEditOfferButton()
  })

  it('Verify that user should be able to remove the hotel offer from staged by clicking on Remove staged Offer button.', () => {
    const hoteloffer = new HotelOffers()
    hoteloffer.clickRemoveStagedOffer(hoteloffer.PNR_RECORD_LOCATOR)
  })

  it('Verify that Accommodation offer summary should be displayed on screen by cicking on Confirm and Send button.', () => {
    hotel_offer = new HotelOffers()
    hotel_offer.clickOfferHotelButton()
    hotel_offer.clickSaveButton(true)
    hotel_offer.clickConfirmSendButton()
    hotel_offer.getOfferUrl()
    hotel_offer.verifyOfferSummary()
    hotel_offer.clickPnrDetailsBackButton()
    hotel_offer.verifyAddedHotelOffer()
  })

  it('Verify that user should be redirected to the hotel offer cancellation page by clicking on Decline Hotel offer button.', () => {
    decline_offer = new HotelOffers()
    const login = new LoginPage('adminagent', 'Passenger2019!')
    const dashboard = new DashboardPage()
    const flightsearch = new FlightSearch()
    cy.visit(hotel_offer.OFFER_URL+"#decline-hotel")
    decline_offer.declineHotelOffer()
    cy.visit('/')
    login.fillLoginForm()
    login.submitLoginForm()
    dashboard.isNavBarVisible()
    flightsearch.searchByFlightNumber(flight_number.toString())
    dashboard.clickSearchFlightButton()
    DashboardPage.verifyAddedFlightOnListing(flight_number)
    decline_offer.clickLabelImportantButton()
    decline_offer.verifyDeclinedOfferSummary()
  })

  it('Verify that user should be able to decline the hotel offer only once.', () => {
    declined_offers = new HotelOffers()
    declined_offers.clickOfferDetailsBackButton()
    declined_offers.clickOfferHotelButton()
    declined_offers.clickSaveButton()
    declined_offers.clickConfirmSendButton()
    declined_offers.getOfferUrl()
    cy.visit(hotel_offer.OFFER_URL)
    declined_offers.offerDeclineConfirmation()
  })

  it('Verify that user should be able to cancel the hotel offer by clicking on Cancel Hotel offer button.', () => {
    cancel_offers = new HotelOffers()
    const login = new LoginPage('adminagent', 'Passenger2019!')
    const dashboard = new DashboardPage()
    const flightsearch = new FlightSearch()
    cy.visit('/')
    login.fillLoginForm()
    login.submitLoginForm()
    dashboard.isNavBarVisible()
    flightsearch.searchByFlightNumber(flight_number.toString())
    dashboard.clickSearchFlightButton()
    DashboardPage.verifyAddedFlightOnListing(flight_number)
    cancel_offers.clickLabelImportantButton()
    cancel_offers.cancelHotelOffer()
    cancel_offers.verifyCanceledOfferSummary()
    cancel_offers.clickOfferDetailsBackButton()
    cancel_offers.clickOfferHotelButton()
    cancel_offers.clickSaveButton()
    cancel_offers.clickConfirmSendButton()
    cancel_offers.getOfferUrl()
    cy.visit(declined_offers.OFFER_URL)
    cancel_offers.offerCancelConfirmation()
  })

  it(`Verify that user should be redirected to Choose Hotel page by clicking on link provided in email.
      Verify that hotel should be selected by clicking on the confirm Hotel button.`, () => {
    offered_hotel = new HotelOffers()
    const login = new LoginPage('adminagent', 'Passenger2019!')
    const dashboard = new DashboardPage()
    const flightsearch = new FlightSearch()
    cy.visit(cancel_offers.OFFER_URL)
    // cy.visit(hotel_offer.OFFER_URL)
    offered_hotel.clickChooseHotelButton()
    offered_hotel.reviewAndConfirmHotel()
    offered_hotel.getHotelDetail()
    cy.visit('/')
    login.fillLoginForm()
    login.submitLoginForm()
    dashboard.isNavBarVisible()
    flightsearch.searchByFlightNumber(flight_number.toString())
    dashboard.clickSearchFlightButton()
    DashboardPage.verifyAddedFlightOnListing(flight_number)
    offered_hotel.clickLabelImportantButton()
    offered_hotel.clickPnrHomeListDetailPax()
  })

  it('Verify that selected offer hotel info should be shown under accommodation offer summary.', () => {
    const hotel_offer = new HotelOffers()
    hotel_offer.verifyAcceptedOfferSummary()
    let checkin_code = offered_hotel.CHECKIN_CODE
    let confirmed_hotel_name = offered_hotel.HOTEL_NAME
    hotel_offer.verifyOfferSummaryAfterOfferAccepted(checkin_code, confirmed_hotel_name)
  })

  it('Verify that user should be able to accept/decline the hotel offer only once.', () => {
    const hotels_offer = new HotelOffers()
    cy.visit(hotel_offer.OFFER_URL)
    hotels_offer.offerDeclineConfirmation()
    cy.visit(declined_offers.OFFER_URL)
    hotels_offer.offerCancelConfirmation()
    cy.visit(cancel_offers.OFFER_URL)

  })

})