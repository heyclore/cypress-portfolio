class QueryingPage {
  queryButtonCss() {
    return cy.get('#querying .well>button:first')
  }

  queryButton() {
    return cy.get('#query-btn')
  }

  divDataTest() {
    return cy.get('[data-test-id="test-example"]')
  }

  queryForm() {
    return cy.get('.query-form')
  }

  queryList() {
    return cy.get('.query-list')
  }

  queryUl() {
    return cy.get('.query-ul')
  }
}

export default QueryingPage
