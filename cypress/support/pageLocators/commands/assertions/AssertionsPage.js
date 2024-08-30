class AssertionsPage {
  assertionsTable() {
    return cy.get('.assertion-table')
  }

  cypressDocsLink() {
    return cy.get('.assertions-link')
  }

  paragraphText() {
    return cy.get('.assertions-p')
  }

  docsHeaders() {
    return cy.get('.docs-header').find('div')
  }

  twoElements() {
    return cy.get('.two-elements')
  }

  randomNumber() {
    return cy.get('#random-number')
  }
}

export default AssertionsPage
