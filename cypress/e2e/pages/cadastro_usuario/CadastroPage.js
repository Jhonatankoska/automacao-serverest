class CadastroPage {
  constructor() {
    this.dataHoraAgora = Date.now();
  }

  cadastro() {
    cy.visit("/");
    this.clicarCadastre_se();
    cy.validarRota("/cadastrarusuarios", 200);
    this.digitarNome();
    this.digitarEmail();
    this.digitarSenha();
    this.botaoCadastrar();
    cy.validarRota("/home", 200);
  }

  clicarCadastre_se() {
    cy.get('[data-testid="cadastrar"]').click();
  }

  digitarNome() {
    cy.get('[data-testid="nome"]').type("Leandro Claudio Pereira");
  }

  digitarEmail() {
    cy.get('[data-testid="email"]').type(
      `leandro${this.dataHoraAgora}@gmail.com`
    );
  }

  digitarSenha() {
    cy.get('[data-testid="password"]').type(this.dataHoraAgora);
  }

  botaoCadastrar() {
    cy.get('[data-testid="cadastrar"]').click(); 
}

  getEmail() {
    return `leandro${this.dataHoraAgora}@gmail.com`;
  }

  getSenha() {
    return `${this.dataHoraAgora}`;
  }
}

export default new CadastroPage();
