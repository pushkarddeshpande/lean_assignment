class CartPage {
  elements = {
    checkoutButton: () => cy.get('[data-test="checkout"]')
  }

  clickCheckout() {
    this.elements.checkoutButton().click();
  }
}

module.exports = new CartPage();