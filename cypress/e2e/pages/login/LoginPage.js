import CadastroPage from "../cadastro_usuario/CadastroPage";

class LoginPage {
  login() {
    cy.visit("/");
    this.digitarEmail();
    this.digitarSenha();
    this.clicarEntrar();
    cy.validarRota("/home", 200);
  }

  digitarEmail() {
    cy.get('[data-testid="email"]').type(CadastroPage.getEmail());
  }

  digitarSenha() {
    cy.get('[data-testid="senha"]').type(CadastroPage.getSenha());
  }

  clicarEntrar() {
    cy.get('[data-testid="entrar"]').click();
  }
}

export default new LoginPage();
