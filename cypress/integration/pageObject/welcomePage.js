class welcomePage
{
  visit()     // Method to load welcome page
  {
    //get url from cypress.json
    cy.visit(Cypress.env('url'))
   
  }
  getEmail()    //method to get emil id locator
  {
   return cy.get('[data-cy=username-input]');
  }
  getPassword()    //method to get password field locator
  {
   return cy.get('[data-cy=password-input]');
  }
  getSignInButton()   //method to det sign in button locator 
  {
   return cy.get('[data-cy=login-button]');
  }
  getEmailError()     //method to get pop up msg locator when email fied is blank
  {
    return cy.get('[data-cy=email-required]'); 
  }

  getPasswordError()  //method to get pop up msg locator when password fied is blank
  {    
    return cy.get('[data-cy=password-required]');
  }
  getValidationMsg()   //method to get pop up msg locator for invalid email and password
  {
  return  cy.get('.con');
  }
}
 export default welcomePage;