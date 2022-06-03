import LoginApi from './login_api'
import LoginPage from '../pages/login_page'
import DashboardPage from '../pages/dashboard_page'
import PnrOffers from '../pages/meals_only_offers'
import NewFlight from '../helpers/new_flight_api'
import FlightSearch from '../pages/flight_search'


class NewFlightMealOffer {
    NEW_PNR_BUTTON = '//button/span[.//text()[contains(., "New PNR")]]/div'
    RECORD_LOCATOR = '[data-cy="newpnr-recordlocator"]'
    constructor(user, flight_number) {
        this.airline_id = '13108628-d1a7-4b79-832d-41890cebb406'
        this.flight_number = flight_number
        this.record_locator = null
        this.offer_url = null
        this.defaultHeaders = {
            Accept: 'application/json, text/javascript, */*; q=0.01',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'en-US,en;q=0.9',
            'Content-Type': 'application/json',
            'referer': 'https://prtestagent.tvlinc.com/home/main',
            'origin': 'https://prtestagent.tvlinc.com',
            'authorization': 'bearer ' + user,
        }
    }

    /**
      * Get the today's date for schedule and arrival flights.
      * @param {String} scheduleDeparture Schedule date
      * @param {String} scheduledArrival Arrival date
    */
    flightDate(scheduledDeparture = false, scheduledArrival = false) {
        var today_date = new Date()
        console.log(today_date);

        var d = new Date(today_date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear()
        console.log(d);

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        if (scheduledDeparture) {
            console.log([year, month, day].join('-') + 'T12:00:00');
            return [year, month, day].join('-') + 'T12:00:00';
        }
        if (scheduledArrival) {
            console.log([year, month, day].join('-') + 'T13:00:00');
            return [year, month, day].join('-') + 'T13:00:00';
        }
    }

    selectDate(today, tomorrow) {
        var today_date = new Date()
        console.log(today_date);
        var d = new Date(today_date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear()
        console.log(d);

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        if (today) {
            console.log([year, month, day].join('-') + 'T15:00:00');
            return [year, month, day].join('-') + 'T15:00:00'
        }
        if (tomorrow) {
            const today = new Date(),
            const tomorrow = new Date(today)
            tomorrow.setDate(tomorrow.getDate() + 1)
            month = '' + (tomorrow.getMonth() + 1),
                day = '' + tomorrow.getDate(),
                year = tomorrow.getFullYear()
            if (month.length < 2)
                month = '0' + month;
            if (day.length < 2)
                day = '0' + day;
            console.log([year, month, day].join('-') + 'T16:00:00');
            return [year, month, day].join('-') + 'T16:00:00'
        }

    }

    addNewFlight(offer_hotel = false) {
        cy.request({
            method: 'POST',
            url: 'https://prtestagentapi.tvlinc.com/api/v1/flights',
            headers: this.defaultHeaders,
            body: {
                airlineId: this.airline_id,
                flightNumber: this.flight_number,
                origin: "ORD",
                scheduledDeparture: this.flightDate(true, false),
                destination: "TDD",
                scheduledArrival: this.flightDate(false, true),
                disruptPort: "ORD",
                disruptTypePkey: 1
            }
        }).then((response) => {
            let flight_id = response.body.id
            console.log(flight_id)
            this.addPnr(flight_id, offer_hotel)
        })
    }

    addPnr(flight_id, offer_hotel = false) {
        cy.visit('/')
        const login = new LoginPage('adminagent', 'Passenger2019!')
        const dashboard = new DashboardPage()
        const pnroffer = new PnrOffers()
        const flightsearch = new FlightSearch()
        login.fillLoginForm()
        login.submitLoginForm()
        dashboard.isNavBarVisible()
        flightsearch.searchByFlightNumber(this.flight_number.toString())
        dashboard.clickSearchFlightButton()
        DashboardPage.verifyAddedFlightOnListing(this.flight_number)
        cy.xpath(this.NEW_PNR_BUTTON, {
            timeout: 9000
        }).click()
        cy.get(this.RECORD_LOCATOR, { timeout: 9000 }).invoke('val').then((recordLocator) => {
            console.log(recordLocator);
            // this.record_locator = recordLocator
            cy.request({
                method: 'POST',
                url: 'https://prtestagentapi.tvlinc.com/api/v1/pnr',
                headers: this.defaultHeaders,
                body: {
                    'airlineId': this.airline_id,
                    'flightId': flight_id,
                    'pnrCreateDate': "2020-04-30T07:33:06.019Z",
                    'recordLocator': recordLocator,
                    'passengers': [],
                    'emails': [],
                    'phoneNumbers': []
                }
            }).then((response) => {
                console.log(response.body.data.id)
                let pax_id = response.body.data.id
                console.log(pax_id);
                this.addPassenger(pax_id, offer_hotel)
            })
        })
    }


    addPassenger(pax_id, offer_hotel = false) {
        var url = 'https://prtestagentapi.tvlinc.com/api/v1/pnr/' + pax_id + '/passengers'
        cy.request({
            method: 'POST',
            url: url,
            headers: this.defaultHeaders,
            body: {
                'id': "00000000-0000-0000-0000-000000000000",
                'isPrimary': false,
                'lastName': "Akbar",
                'firstName': "Sajjad",
                'email': "agentapp2020@gmail.com",
                'phone': "+923006532211",
                'lifeStagePkey': 1,
                'paxStatusPkey': 1,
                'ticketLevelPkey': 3,
                'ssr': false,
                'servicePet': false,
                'pet': false,
                'uniqueId': "",
            }
        }).then((response) => {
            expect(response.body.error).to.eq(false)
            console.log(response.body.data.pnrId)
            let pnr_id = response.body.data.pnrId
            // this.createAccommodationKey(pnr_id, offer_hotel)
        })
    }

    // Accommodations
    createAccommodationKey(pnr_id, offer_hotel = false) {
        var url = 'https://prtestagentapi.tvlinc.com/api/v1/accommodations'
        let mealItems = [{ pkey: 0, text: "1", amount: 12, currencyCodeId: 0, currencyCode: "USD", currencySymbol: "$" }]
        let pnrlist = [{ pnrId: pnr_id, fullPnr: true, passengerIds: [] }]
        let body = {
            'portAccommodation': "ORD",
            'accommodationType': 0,
            'accommodationPaxType': 0,
            'airlinePay': true,
            'hotelIncluded': offer_hotel ? true : false,
            'stayDate': this.selectDate(true, false),
            'stayNights': 1,
            'roomCount': offer_hotel ? 1 : 0,
            'stayExpiration': this.selectDate(false, true),
            'hotelId': "",
            'hotelName': "",
            'mealIncluded': offer_hotel ? false : true,
            'individualMealCards': true,
            'mealCount': offer_hotel ? 0 : 1,
            'mealsExpireDays': offer_hotel ? 0 : 1,
            'commit': false,
            'accommodationIds': [],
            'mealItems': offer_hotel ? [] : mealItems,
            'pnrlist': pnrlist,
        }
        if (offer_hotel) {
            body['mealProvider'] = 0
        }

        cy.request({
            method: 'POST',
            url: url,
            headers: this.defaultHeaders,
            body: body
        }).then((response) => {
            console.log(response.body);
            let accommodation_id = response.body.accommodationDetail.accommodation.id
            if (offer_hotel) {
                this.includeAccommodationDetails(pnr_id)
            }
            else {
                this.confirmAndSendEmail(accommodation_id)
            }
        })
    }

    includeAccommodationDetails(pnr_id) {
        var url = 'https://prtestagentapi.tvlinc.com/api/v1/pnr/pnrpax?pnrIds=' + pnr_id + '&includeAccommodationPnrDetail=true'
        cy.request({
            method: 'GET',
            url: url,
            headers: this.defaultHeaders
        }).then((response) => {
            console.log(response.body.pnrId)
            let accommodation_id = response.body[0].accommodationPnrDetails[0].accommodationId
            this.confirmAndSendEmail(accommodation_id)

        })
    }

    confirmAndSendEmail(accommodation_id) {
        var url = 'https://prtestagentapi.tvlinc.com/api/v1/accommodations/' + accommodation_id + '/commit'
        cy.request({
            method: 'PUT',
            url: url,
            headers: this.defaultHeaders,
        }).then((response) => {
            console.log(response.body.accommodationDetail.passengers["0"].offerUrl)
            let offer_url = response.body.accommodationDetail.passengers["0"].offerUrl
            this.offer_url = offer_url
        })
    }

}


export default NewFlightMealOffer
