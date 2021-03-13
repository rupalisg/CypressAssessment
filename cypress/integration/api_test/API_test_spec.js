
describe('Testing API Using Cypress',() =>{
   
  //get required url from env variable of cypress.json
      const api_url = Cypress.env('api_url')
            
      it('Test POST request', () =>{
          // get header data from api_data.json from fixtures

          cy.fixture('api_data').then(api_data =>{
           
            //Make HTTP request
            cy.request({      
              method: 'POST',
              url:api_url,
              headers: api_data,
              body:{
          
                  }                 
                 }).then((response)=>{
                   expect(response.status).equal(200)               
                   expect(response.body.result.count).equal(64)                    
              
            })
          })
       })                
     }) 
  