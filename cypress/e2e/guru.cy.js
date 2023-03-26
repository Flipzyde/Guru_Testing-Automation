it('User can login successfully', () => {

  //User can navigate to the URL successfully

  cy
  .visit('https://demo.guru99.com/v4/index.php')

  // User can log into demoguru
  cy.get(':nth-child(1) > :nth-child(2) > input').type('mngr487813')
    .get(':nth-child(2) > :nth-child(2) > input').type('sYmutas')
    .get('[type="submit"]').click();

  //User can create an account
  cy.get('.menusubnav > :nth-child(2) > a').click()
    .get(':nth-child(4) > :nth-child(2) > input').type('Anthony')
    .get('[value="m"]').check()
    .get('#dob').click().type('1991-11-11')
    .get('textarea').type('Lagos Nigeria')
    .get(':nth-child(8) > :nth-child(2) > input').type('Apapa')
    .get(':nth-child(9) > :nth-child(2) > input').type('Lagos')
    .get(':nth-child(10) > :nth-child(2) > input').type('123456')
    .get(':nth-child(11) > :nth-child(2) > input').type('08136177499')
    .get(':nth-child(12) > :nth-child(2) > input').type('Anthonyolaniyan146@gmail.com')
    .get(':nth-child(13) > :nth-child(2) > input').type('123456')
    .get(':nth-child(12) > :nth-child(2) > input').click()
    .get('[type="submit"]').click();
    //.get(':nth-child(14) > td > a').click()

    //User can sign in with valid credentials
    cy.visit('https://demo.guru99.com/v4/index.php')
      .get(':nth-child(1) > :nth-child(2) > input').type('219')
      .get(':nth-child(2) > :nth-child(2) > input').type('123456')
      .get('[type="submit"]').click()
      .get('.menusubnav > :nth-child(7) > a').click();
      

    
    //User can make withdrawals successfully
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
  })
    cy.visit('https://demo.guru99.com/v4/index.php')
      .get(':nth-child(1) > :nth-child(2) > input').type('mngr487813')
      .get(':nth-child(2) > :nth-child(2) > input').type('sYmutas')
      .get('[type="submit"]').click()
      .get('.menusubnav > :nth-child(9) > a').click()
      .get(':nth-child(6) > :nth-child(2) > input').type('6879676019')
      .get(':nth-child(7) > :nth-child(2) > input').type('5000')
      .get(':nth-child(8) > :nth-child(2) > input').type('I dash you')
      .get('[type="submit"]').click();

      //User cannot sign in with invalid credentials 
    cy.visit('https://demo.guru99.com/v4/index.php')
      .get(':nth-child(1) > :nth-child(2) > input').type('2190')
      .get(':nth-child(2) > :nth-child(2) > input').type('1234567')
      .get('[type="submit"]').click();

})