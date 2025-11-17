class CheckoutOverviewPage {

  elements = {
    finishButton: () => cy.get('[data-test="finish"]'),
    successMessage: () => cy.get(".complete-header")
  }

  finishOrder() {
    this.elements.finishButton().click();
  }

  verifySuccess() {
    this.elements.successMessage().should("contain.text", "Thank you for your order");
  }
}

module.exports = new CheckoutOverviewPage();