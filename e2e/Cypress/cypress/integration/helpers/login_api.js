
class LoginApi {
    loginApi() {
            cy.request({
                method: 'POST',
                url: 'https://prsx018agentapi.tvlinc.com/api/v1/auth',
                
                headers: {
                    'origin': 'https://prsx018agent.tvlinc.com',
                    'content-type': 'application/json',
                    'referer': 'https://prsx018agent.tvlinc.com/login?returnUrl=%2Fhome%2Fmain'
                },
                body: {
                    loginName: 'adminagent',
                    password: 'Passenger2019!',
                }
            }).should((response)=>{
                user = response.body.token
            })
    }
    
}

export default new LoginApi