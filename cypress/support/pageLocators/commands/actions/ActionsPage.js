class ActionsPage {
  emailInputField() {
    return cy.get('.action-email')
  }

  disabledInputField() {
    return cy.get('.action-disabled')
  }

  focusInputField() {
    return cy.get('.action-focus')
  }

  blurInputField() {
    return cy.get('.action-blur')
  }

  clearInputField() {
    return cy.get('.action-clear')
  }

  submitButton() {
    return cy.get('.action-form')
  }

  actionButton() {
    return cy.get('.action-btn')
  }

  drawCanvas() {
    return cy.get('#action-canvas')
  }
}

export default ActionsPage
