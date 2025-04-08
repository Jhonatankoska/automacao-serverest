import PaginaInicialPage from "../../pages/pagina_inicial/PaginaInicialPage";
import LoginPage from "../../pages/login/LoginPage";
import CadastroPage from "../../pages/cadastro_usuario/CadastroPage";

describe("Verificação dos elementos principais da tela inicial", () => {
  before(() => {
    CadastroPage.cadastro();
  });

  beforeEach(() => {
    LoginPage.login();
  });

  it("Deve exibir os elementos, Logo Serverest, Header do site e Texto Produtos", () => {
    PaginaInicialPage.verificarElementosPrincipais();
  });
  it("Deve clicar no carrinho e validar se a ação ocorreu", () => {
    PaginaInicialPage.clicarCarrinho();
  });

  it("Deve clicar no botão de Logout e validar se a ação ocorreu", () => {
    PaginaInicialPage.clicarBotaoLogout();
  });

  it("Deve clicar no primeiro produto na tela inicial", () => {
    PaginaInicialPage.clicarCardPrimeiroProduto();
  });
});
