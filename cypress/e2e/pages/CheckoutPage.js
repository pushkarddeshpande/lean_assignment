import { faker } from '@faker-js/faker';

class CheckoutPage {

  elements = {
    firstNameInput: () => cy.get('[data-test="firstName"]'),
    lastNameInput: () => cy.get('[data-test="lastName"]'),
    postalCodeInput: () => cy.get('[data-test="postalCode"]'),
    continueButton: () => cy.get('[data-test="continue"]')
  }

  fillRandomDetails() {
    const first = faker.person.firstName();
    const last = faker.person.lastName();
    const postal = faker.location.zipCode();

    this.elements.firstNameInput().type(first);
    this.elements.lastNameInput().type(last);
    this.elements.postalCodeInput().type(postal);
    this.elements.continueButton().click();
  }
}

module.exports = new CheckoutPage();