import LoginPage from '../pages/login_page'
import DashboardPage from '../pages/dashboard_page'
import PnrOffers from '../pages/pnr_offers'
import HotelOffers from '../pages/offer_hotels'
import NewFlightMealOffer from '../helpers/new_flight_api'
import FlightSearch from '../pages/flight_search'
import IssueHotel from '../pages/issue_hotels'

let user
let flight_number
let issue_hotel
let get_hotel
let decline_offer
let hotel_offer
let offered_hotel
let cancel_offers
let issued_hotel

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

describe('Issue Hotel - Agent Chooses Hotel', () => {
  let pnr_record
  let flight_meal_offer
  let meal_amount
  let pnroffer_record_locator

  it(`Verify that user should be redirected to specific passenger's details window by clicking on the arrow against to that passenger.`, () => {
    const login = new LoginPage('adminagent', 'Passenger2019!')
    const dashboard = new DashboardPage()
    const hoteloffer = new HotelOffers()
    const issue_hotel = new IssueHotel()
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

  it('Verify that Define Issuance window should be displayed by clicking on arrow opposite to Issue Hotel - Agent Chooses Hotel Text.', () => {
    issue_hotel = new IssueHotel()
    issue_hotel.clickIssueHotelButton()
  })

  it('Verify that list of hotels should be dispayed by clicking Search Hotel button on define issuance form.', () => {
    const search_hotel = new IssueHotel()
    search_hotel.clickSearchHotelButton(issue_hotel.DISRUPTION_PORT)
  })

  it('Verify that user should be able to sort the hotels by clicking sort by Price radio button along with define issuance form.', () => {
    const search_hotel = new IssueHotel()
    search_hotel.sortByPrice()
  })

  it('Verify that user should be able to sort the hotels by clicking sort by Distance radio button along with define issuance form.', () => {
    const search_hotel = new IssueHotel()
    search_hotel.sortByDistance()
  })

  it('Verify that user should be able to select the hotel by clicking on the Hotel Title.', () => {
    get_hotel = new IssueHotel()
    get_hotel.selectHotel()
    get_hotel.getHotelDetail()
  })

  it('Verify that user should be redirected to "Review and confirm issuance" window by clicking on continue button.', ()=> {
    const search_hotel = new IssueHotel()
    search_hotel.clickContinueButton()
  })

  it('Verify that selected hotel info should be displayed on Review and confirm Issuance window.', ()=> {
    const search_hotel = new IssueHotel()
    search_hotel.verifySelectedHotelDetailsOnReviewIssuanceForm(get_hotel.HOTEL_NAME)
  })

  it('Verify that accommodation saved successfully by clicking on Confirm and Commit button.', () => {
    issued_hotel = new IssueHotel()
    issued_hotel.clickConfirmCommitButton()
    issued_hotel.getOfferUrl()
    issued_hotel.getHotelKey()
  })

  it('Verify that selected issued hotel info should be shown under Issuance summary.', () => {
    const search_hotel = new IssueHotel()
    search_hotel.verifyAcceptedOfferSummary()
    let checkin_code = issued_hotel.HOTEL_CHECKIN_KEY
    let confirmed_hotel_name = get_hotel.HOTEL_NAME
    search_hotel.verifyOfferSummaryAfterOfferAccepted(checkin_code, confirmed_hotel_name)
  })

  it('Verify that user should be able to cancel the hotel offer by clicking on Cancel Hotel offer button.', () => {
    cancel_offers = new IssueHotel()
    const login = new LoginPage('adminagent', 'Passenger2019!')
    const dashboard = new DashboardPage()
    const flightsearch = new FlightSearch()
    cancel_offers.cancelHotelOffer()
    cancel_offers.verifyCanceledOfferSummary()
  })
})