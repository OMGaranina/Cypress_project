/// <reference types="cypress" />
describe('User should be able ', () => {
    let email = 'masha5@mail.com';
    let password = '12345Qwert!';
    let username = 'Masha5';

    it('to sign in with ragistered data', () => {
      cy.visit('https://react-redux.realworld.io/#/login?_k=sm0wls');
      cy.get(':nth-child(2) > .nav-link').click();
      cy.get(':nth-child(1) > .form-control').type(email).should('have.value', email);
      cy.get(':nth-child(2) > .form-control').type(password).should('have.value', password);
      cy.get('.btn').click();

      cy.get(':nth-child(4) > .nav-link').should('contain', username);
    })
  })