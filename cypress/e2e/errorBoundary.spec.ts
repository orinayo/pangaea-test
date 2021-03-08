/// <reference types="cypress" />

context('Error boundary', () => {
  const user = cy
  beforeEach(() => {
    user.on('uncaught:exception', () => {
      return false
    })
    user.visit('/')
  })
  it('catches an error', () => {
    user.get('[data-cy=error-btn]').click({force: true})
    user.get('iframe').then($iframe => {
      const reactDevError = $iframe.contents().find('body')
      user
        .wrap(reactDevError)
        .findByTitle(/Click or press Escape to dismiss/)
        .click()
    })
    user.findByText(/There was an error/).should('be.visible')
  })

  it('catches an error and all is good', () => {
    user.get('[data-cy=error-btn]').click({force: true})
    user.get('iframe').then($iframe => {
      const reactDevError = $iframe.contents().find('body')
      user
        .wrap(reactDevError)
        .findByTitle(/Click or press Escape to dismiss/)
        .click()
    })
    user.findByText(/click here/i).click()
    user.findByText(/all products/i).should('be.visible')
  })
})
