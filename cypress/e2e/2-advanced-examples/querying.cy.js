/// <reference types="cypress" />
import QueryingPage from '../../support/pageLocators/commands/querying/QueryingPage';


context('Querying', () => {
  const queryingPage = new QueryingPage()
  beforeEach(() => {
    cy.visit('/commands/querying')
  })

  // The most commonly used query is 'cy.get()', you can
  // think of this like the '$' in jQuery

  it('cy.get() - query DOM elements', () => {
    // https://on.cypress.io/get

    // cy.get('#query-btn').should('contain', 'Button')
    queryingPage.queryButton().should('contain', 'Button')

    // cy.get('.query-btn').should('contain', 'Button')
    queryingPage.queryButton().should('contain', 'Button')

    // cy.get('#querying .well>button:first').should('contain', 'Button')
    queryingPage.queryButtonCss().should('contain', 'Button')

    // Use CSS selectors just like jQuery

    // cy.get('[data-test-id="test-example"]').should('have.class', 'example')
    queryingPage.divDataTest().should('have.class', 'example')

    // 'cy.get()' yields jQuery object, you can get its attribute
    // by invoking `.attr()` method
    // cy.get('[data-test-id="test-example"]')
    queryingPage.divDataTest()
      .invoke('attr', 'data-test-id')
      .should('equal', 'test-example')

    // or you can get element's CSS property
    // cy.get('[data-test-id="test-example"]')
    queryingPage.divDataTest()
      .invoke('css', 'position')
      .should('equal', 'static')

    // or use assertions directly during 'cy.get()'
    // https://on.cypress.io/assertions
    // cy.get('[data-test-id="test-example"]')
    queryingPage.divDataTest()
      .should('have.attr', 'data-test-id', 'test-example')
      .and('have.css', 'position', 'static')
  })

  it('cy.contains() - query DOM elements with matching content', () => {
    // https://on.cypress.io/contains
    // cy.get('.query-list')
    queryingPage.queryList()
      .contains('bananas')
      .should('have.class', 'third')

    // we can pass a regexp to `.contains()`
    // cy.get('.query-list')
    queryingPage.queryList()
      .contains(/^b\w+/)
      .should('have.class', 'third')

    // cy.get('.query-list')
    queryingPage.queryList()
      .contains('apples')
      .should('have.class', 'first')

    // passing a selector to contains will
    // yield the selector containing the text
    cy.get('#querying')
      .contains('ul', 'oranges')
      .should('have.class', 'query-list')

    cy.get('.query-button')
      .contains('Save Form')
      .should('have.class', 'btn')
  })

  it('.within() - query DOM elements within a specific element', () => {
    // https://on.cypress.io/within
    // cy.get('.query-form').within(() => {
    queryingPage.queryForm().within(() => {
      cy.get('input:first').should('have.attr', 'placeholder', 'Email')
      cy.get('input:last').should('have.attr', 'placeholder', 'Password')
    })
  })

  it('cy.root() - query the root DOM element', () => {
    // https://on.cypress.io/root

    // By default, root is the document
    cy.root().should('match', 'html')

    // cy.get('.query-ul').within(() => {
    queryingPage.queryUl().within(() => {
      // In this within, the root is now the ul DOM element
      cy.root().should('have.class', 'query-ul')
    })
  })
})
