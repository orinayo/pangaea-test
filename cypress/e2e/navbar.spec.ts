/// <reference types="cypress" />

context('Navbar', () => {
  const user = cy
  beforeEach(() => {
    user.visit('/')
  })

  it('displays a toggle bar on mobile screens, and the full navbar on tablet and desktop screens', () => {
    user.get('[data-cy=navbar]').should('not.be.visible')
    user.get('[data-cy=navbar-toggle]').should('be.visible').click().wait(200)
    user.get('[data-cy=mobile-menu]').should('be.visible')
    user.viewport('macbook-15')
    user.wait(200)
    user.get('[data-cy=navbar]').should('be.visible')
    user.get('[data-cy=navbar-toggle]').should('not.be.visible')
  })

  it('navigation contains Shop, Learn, Account and Cart', () => {
    user.get('[data-cy=navbar-toggle] button').click().wait(200)
    user.get('[data-cy=mobile-menu]').find('nav').children().as('navbar')
    user.get('@navbar').contains('Shop')
    user.get('@navbar').contains('Learn')
    user
      .get('[data-cy=mobile-menu] > div > div')
      .last()
      .children()
      .as('navbarExtra')
    user.get('@navbarExtra').contains('Account')
    user.get('[data-cy=mobile-menu]').findByTitle('Cart').should('exist')

    user.viewport('macbook-15')
    user.get('[data-cy=navbar]').find('nav').children().as('navbar')
    user.get('@navbar').contains('Shop')
    user.get('@navbar').contains('Learn')
    user.get('[data-cy=navbar] > div').children().as('navbarExtra')
    user.get('@navbarExtra').contains('Account')
    user.get('[data-cy=navbar]').findByTitle('Cart').should('exist')
  })
})
