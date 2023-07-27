/// <reference types="cypress" />

describe('Browser actions', { testIsolation: false } , () => {

    it('Should load books website', () => {
        cy.visit('https://books.toscrape.com/index.html', { timeout: 10000})
        cy.url().should('include', 'index.html')
    });

    it('Should click on Travel Category', () => {
        cy.get('a').contains('Travel').click()
        cy.get('h1').contains('Travel')
    });
});

describe('Working with inputs', { testIsolation: false } , () => {

    it('Visit the website', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', 'login.html')    
    });

    it('Should fill username', () => {
        cy.get('#user_login').clear()
        cy.get('#user_login').type('username')
    });

    it('Should fill password', () => {
        cy.get('input[name="user_password"]').clear()
        cy.get('input[name="user_password"]').type('password')
    });


    it('Checking remember me', () => {
        cy.get('#user_remember_me').check()
    });
});