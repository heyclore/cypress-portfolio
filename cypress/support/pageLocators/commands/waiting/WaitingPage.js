class WaitingPage {
  waitInputField1() {
    return cy.get('.wait-input1')
  }

  waitInputField2() {
    return cy.get('.wait-input2')
  }

  waitInputField3() {
    return cy.get('.wait-input3')
  }

  getCommentButton() {
    return cy.get('.network-btn')
  }
}

export default WaitingPage
