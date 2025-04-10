class MinhaListaDeProdutosPage {
  validarTituloPrincipal() {
    cy.get("h1").should("have.text", "Lista de Compras");
  }

  validarBotaoAdicionarNoCarrinho() {
    cy.get('[data-testid="adicionar carrinho"]').should(
      "have.text",
      "Adicionar no carrinho"
    );
    cy.get('[data-testid="adicionar carrinho"]').click();
    cy.validarRota("/carrinho", 200);
  }

  validarBotaoLimparLista() {
    cy.get('[data-testid="limparLista"]').should("have.text", "Limpar Lista");
    cy.get('[data-testid="limparLista"]').click();
    cy.validarRota("/minhaListaDeProdutos", 200);
    cy.get('[data-testid="shopping-cart-empty-message"]').should("have.text", "Seu carrinho está vazio");
  }

  validarBotaoMenos() {
    cy.get('[data-testid="product-decrease-quantity"]').should(
      "have.text",
      "-"
    );
    cy.get('[data-testid="product-decrease-quantity"]').click();
    cy.get(':nth-child(3) > p').should("have.text", "1");
  }

  validarBotaoMais() {
    cy.get('[data-testid="product-increase-quantity"]').should(
      "have.text",
      "+"
    );
    cy.get('[data-testid="product-increase-quantity"]').click();
    cy.get(':nth-child(3) > p').should("have.text", "2");
  }

  validarBotaoPaginaInicial() {
    cy.get('[data-testid="paginaInicial"]').should(
      "have.text",
      "Página Inicial"
    );

    cy.get('[data-testid="paginaInicial"]').click();
    cy.validarRota("/home", 200);
  }
}

export default new MinhaListaDeProdutosPage();
