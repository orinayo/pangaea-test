/// <reference types="cypress" />

context('Navbar', () => {
  const user = cy
  beforeEach(() => {
    user.visit('/')
  })

  it('displays a toggle bar on mobile screens, and the full navbar on tablet and large screens', () => {
    user.viewport('macbook-15')
    user.wait(200)
    user.get('[data-cy=navbar]').should('be.visible')
    user.get('[data-cy=navbar-toggle]').should('not.be.visible')
    user.viewport('iphone-6+')
    user.wait(200)
    // the navbar should have collapsed since our screen is smaller
    user.get('[data-cy=navbar]').should('not.be.visible')
    user.get('[data-cy=navbar-toggle]').should('be.visible').click()
    user.get('[data-cy=mobile-menu]').should('be.visible')
  })

  it('navigation contains Shop, Learn, Account and Cart', () => {
    user.viewport('macbook-15')
    user.wait(200)
    user.get('[data-cy=navbar]').find('nav').children().as('navbar')
    user.get('@navbar').contains('Shop')
    user.get('@navbar').contains('Learn')
    user.get('[data-cy=navbar] > div').children().as('navbarExtra')
    user.get('@navbarExtra').contains('Account')
    user.get('[data-cy=navbar]').findByTitle('Cart').should('exist')

    user.viewport('iphone-6+')
    user.wait(200)
    user.get('[data-cy=navbar-toggle]').click()
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
  })
})
