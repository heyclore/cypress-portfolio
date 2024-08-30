class AliasingPage {
  tableButtons() {
    return cy.get('.as-table').find('tbody>tr').first().find('td')
  }

  getCommentButton() {
    return cy.get('.network-btn')
  }
}

export default AliasingPage
