class TodoPage {
  todoLists() {
    return cy.get('.todo-list li')
  }

  newTodo() {
    return cy.get('[data-test=new-todo]')
  }

  activeButton() {
    return cy.contains('Active')
  }

  completeButton() {
    return cy.contains('Completed')
  }

  clearCompletedButton() {
    return cy.contains('Clear completed')
  }
}

export default TodoPage
