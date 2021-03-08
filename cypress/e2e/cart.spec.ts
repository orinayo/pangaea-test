/// <reference types="cypress" />

context('Cart', () => {
  const user = cy
  const firstProduct = /no-nonsense charcoal cleanser/i
  beforeEach(() => {
    user.visit('/')
  })

  it('can increase, reduce or remove an item in the cart. shows cart total', () => {
    user
      .get('[data-cy=navbar-toggle] button')
      .click()
      .wait(200)
      .get('[data-cy=mobile-menu]')
      .findByTitle('Cart')
      .parent()
      .click()
      .wait(500)

    user.get('[data-cy=cart]').as('cart')

    user.get('@cart').get('[data-cy=total-price]').as('totalPrice')
    user.findByText(/^your cart$/i).should('be.visible')
    user.findByText(/your cart is empty/i).should('be.visible')
    user.get('@totalPrice').contains('$0.00')
    user.findByText(/subtotal/i).should('be.visible')
    user.findByText(/make this a subscription/i).should('be.visible')
    user.findByText(/proceed to checkout/i).should('be.visible')

    user.get('@cart').get('[data-cy=cart-toggle]').click()
    user
      .findByText(firstProduct)
      .parent()
      .next()
      .findByText(/add to cart/i)
      .click()

    user.get('@cart').wait(200).findByText(firstProduct).should('be.visible')
    user
      .get('@cart')
      .findByText(firstProduct)
      .siblings()
      .last()
      .as('buttonGroup')

    user.get('@buttonGroup').findByText(/^1$/i).should('be.visible')
    user.get('@totalPrice').contains('$16.00')

    user.get('@buttonGroup').findByText('+').click()
    user.get('@buttonGroup').findByText(/^2$/i).should('be.visible')
    user.get('@totalPrice').contains('$32.00')

    user.get('@buttonGroup').findByText('−').click()
    user.get('@buttonGroup').findByText(/^1$/i).should('be.visible')
    user.get('@totalPrice').contains('$16.00')

    user
      .get('@cart')
      .findByText(firstProduct)
      .parent()
      .prev()
      .findByRole('button')
      .click()

    user.get('@cart').findByText(firstProduct).should('not.exist')
    user.findByText(/your cart is empty/i).should('be.visible')
    user.get('@totalPrice').contains('$0.00')
  })

  it('can change currency', () => {
    user
      .findByText(firstProduct)
      .parent()
      .next()
      .findByText(/add to cart/i)
      .click()

    user.findByText(/usd/i).should('be.selected')
    user.get('[data-cy=currencies]').select('CAD').should('have.value', 'CAD')
    user.get('[data-cy=total-price]').contains('CA$21.00')
  })
})
