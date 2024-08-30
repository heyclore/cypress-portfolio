class ConnectorsPage {
  nameLists() {
    return cy.get('.connectors-each-ul>li')
  }

  connectorsDiv() {
    return cy.get('.connectors-div')
  }

  connectorsList() {
    return cy.get('.connectors-list > li')
  }
}

export default ConnectorsPage
