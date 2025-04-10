import LoginPage from "../../pages/login/LoginPage";
import CadastroPage from "../../pages/cadastro_usuario/CadastroPage";

describe("Funcionalidade Cadastro e Login", () => {
  before(() => {
    CadastroPage.cadastro();
  });

  it("Login com credenciais válidas", () => {
    LoginPage.login();
  });
});
