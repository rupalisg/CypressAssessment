
import welcomePage from '../pageObject/welcomePage.js'  
 
describe('Sign In Test suite', function(){
 
   const wPage = new welcomePage();

   //get data form testData.json befor each test
   beforeEach(function(){

     //getting test data from fixture file testData.json
      cy.fixture('testData').then(function(data)
      {
       this.data = data
      })
     })

 it('Test Case for Invalid Email & Password',function(){
  
  // Visit Welcome Page
  
   wPage.visit(this.data.url)

  // Enter Email id
   wPage.getEmail().type(this.data.email)

  //Enter Password
   wPage.getPassword().type(this.data.password)
  
   //Click signin button
   wPage.getSignInButton().click()
   
   //check for valid message 
   wPage.getValidationMsg().should('have.text',this.data.msg)
   
 })
 
   it('Test to check an error message on empty input', function() {
     // Visit Welcoe PAge
     wPage.visit()
     //Click signin button
     wPage.getSignInButton().click()     

     //check for valid msg if email field is blank
     wPage.getEmailError()
       .should('have.text',this.data.blank_msg)
      
      //check for valid msg if password field is blank
       wPage.getPasswordError()
       .should('have.text',this.data.blank_msg)
      
   })
})