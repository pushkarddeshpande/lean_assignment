class ProductsPage {

  elements = {
    inventoryItems: () => cy.get(".inventory_item"),
    cartBadge: () => cy.get(".shopping_cart_badge"),
    cartIcon: () => cy.get(".shopping_cart_link")
  }

  selectRandomProducts(count = 3) {
    this.elements.inventoryItems().then(items => {
      const totalItems = items.length;
      let randomIndexes = [];

      while (randomIndexes.length < count) {
        const random = Math.floor(Math.random() * totalItems);
        if (!randomIndexes.includes(random)) randomIndexes.push(random);
      }

      randomIndexes.forEach(i => {
        cy.wrap(items[i]).find("button").click();
      });
    });
  }

  goToCart() {
    this.elements.cartIcon().click();
  }
}

module.exports = new ProductsPage();