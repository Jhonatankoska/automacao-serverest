class DetalhesProdutoPage {
  validarPaginaDetalhesProduto() {
    this.validarTituloPrincipal();
    this.validarBotaoVoltar();
    this.validarBotaoAdicionarALista();
  }

  validarTituloPrincipal() {
    cy.get("h1").should("have.text", "Detalhes do produto");
    cy.get('[data-testid="shopping-cart-button"]').should("be.visible");
  }

  validarBotaoVoltar() {
    cy.get('[data-testid="voltarHome"]').should("have.text", "Voltar");
    cy.get('[data-testid="voltarHome"]').click();
    cy.validarRota("/home", 200);
  }

  validarBotaoAdicionarALista() {
    cy.get('[data-testid="adicionarNaLista"]')
      .should("have.text", "Adicionar a lista")
      .click();

    cy.validarRota("/minhaListaDeProdutos", 200);
  }
}

export default new DetalhesProdutoPage();


