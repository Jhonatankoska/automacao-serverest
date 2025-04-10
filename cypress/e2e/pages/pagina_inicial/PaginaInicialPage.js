class PaginaInicialPage {
  verificarElementosPrincipais() {
    cy.get("#navbarTogglerDemo01").should("be.visible");
    cy.get("#navbarTogglerDemo01 > .imagem").should("be.visible");
    cy.get("h4").should("have.text", "Produtos");
    cy.get('[data-testid="home"]').should("have.text", "Home");
    cy.get('[data-testid="lista-de-compras"]').should(
      "have.text",
      "Lista de Compras"
    );
    cy.get('[data-testid="carrinho"]').should("have.text", "Carrinho");
    cy.get('[data-testid="logout"]').should("have.text", "Logout");
  }

  clicarCarrinho() {
    cy.get('[data-testid="shopping-cart-button"]').click();
    cy.validarRota("/minhaListaDeProdutos", 200);
  }

  clicarBotaoLogout() {
    cy.get('[data-testid="logout"]').click();
    cy.validarRota("/login", 200);
  }

  clicarCardPrimeiroProduto() {
    cy.get(".card")
      .eq(0)
      .within(() => {
        cy.get("img").click();
        cy.validarRota("/detalhesProduto", 200);
      });
  }
}

export default new PaginaInicialPage();
