class NewPnr {
    addNewPnr(user, flight_id, recordLocator) {
        
        // var flight_id = localStorage.getItem('flight_id')
        // console.log(localStorage.getItem('flight_id'));
        console.log(flight_id);
        let headers = {
            Accept: 'application/json, text/javascript, */*; q=0.01',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'en-US,en;q=0.9',
            'Content-Type': 'application/json',
            'referer': 'https://prtestagent.tvlinc.com/home/main',
            'origin': 'https://prtestagent.tvlinc.com',
            'authorization': 'bearer ' + user,
        }
        cy.request({
            method: 'POST',
            url: 'https://prtestagentapi.tvlinc.com/api/v1/pnr',
            headers: headers,
            body: {
                'airlineId': "13108628-d1a7-4b79-832d-41890cebb406",
                'flightId': flight_id,
                'pnrCreateDate': "2020-04-12T07:33:06.019Z",
                'recordLocator': recordLocator,
                'passengers': [],
                'emails': [],
                'phoneNumbers': []
            }
        }).then((response) => {
            console.log(response.body.id)
            let pax_id = response.body.id
            localStorage.setItem('pax_id', pax_id)
            console.log(localStorage.getItem('pax_id'));
            return pax_id
            
        })
    }

    addNewPassenger(user) {
        var pax_id = localStorage.getItem('pax_id')
        console.log(pax_id);
        
        var url = 'https://prtestagentapi.tvlinc.com/api/v1/pnr/'+ pax_id + '/passengers'
        let headers = {
            Accept: 'application/json, text/javascript, */*; q=0.01',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'en-US,en;q=0.9',
            'Content-Type': 'application/json',
            'referer': 'https://prtestagent.tvlinc.com/home/main',
            'origin': 'https://prtestagent.tvlinc.com',
            'authorization': 'bearer ' + user,
        }
        cy.request({
            method: 'POST',
            url: url,
            headers: headers,
            body: {
                'id': "00000000-0000-0000-0000-000000000000",
                'isPrimary': false,
                'lastName': "Akbar",
                'firstName': "Sajajd",
                'email': "agentapp2020@gmail.com",
                'phone': "+923006532211",
                'lifeStagePkey': 1,
                'paxStatusPkey': 0,
                'ticketLevelPkey': 4,
                'ssr': false,
                'servicePet': false,
                'pet': false,
                'uniqueId': "",
            }
        }).should((response) => {
            expect(response.body.error).to.eq(false)
            console.log(response.body.pnrId)
            let pnr_id = response.body.pnrId
            localStorage.setItem('pnr_id', pnr_id)
        })
    }

    includePassenger(user) {
        var pax_id = localStorage.getItem('pax_id')
        var url = 'https://prtestagentapi.tvlinc.com/api/v1/pnr/'+ pax_id + '?includepassengers=true'
        let headers = {
            Accept: 'application/json, text/javascript, */*; q=0.01',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'en-US,en;q=0.9',
            'Content-Type': 'application/json',
            'referer': 'https://prtestagent.tvlinc.com/home/main',
            'origin': 'https://prtestagent.tvlinc.com',
            'authorization': 'bearer ' + user,
        }
        cy.request({
            method: 'GET',
            url: url,
            headers: headers
        }).should((response) => {
            console.log(response.body.pnrId)
            // pnr_id = response.body.pnrId
            // localStorage.setItem('pnr_id', pnr_id)
        })
    }

}

export default new NewPnr
