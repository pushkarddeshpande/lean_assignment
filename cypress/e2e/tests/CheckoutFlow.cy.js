import LoginPage from "../pages/LoginPage";
import ProductsPage from "../pages/ProductsPage";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";
import CheckoutOverviewPage from "../pages/CheckoutOverviewPage";

describe("SauceDemo - Complete Checkout Flow", () => {

  beforeEach(() => {
    cy.visit("/");
    cy.fixture("userData").as("userData");
  });

  it("should complete checkout with 3 random products & faker.js data", function () {

    // Login
    LoginPage.login(this.userData.username, this.userData.password);

    // Select 3 random products
    ProductsPage.selectRandomProducts(3);

    // Cart badge count
    ProductsPage.elements.cartBadge().should("have.text", "3");

    // Proceed to cart
    ProductsPage.goToCart();

    // Checkout
    CartPage.clickCheckout();

    // Fill details using faker.js
    CheckoutPage.fillRandomDetails();

    // Complete order
    CheckoutOverviewPage.finishOrder();

    // Validate success
    CheckoutOverviewPage.verifySuccess();
  });
});