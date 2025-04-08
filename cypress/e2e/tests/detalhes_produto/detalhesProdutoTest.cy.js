import CadastroPage from "../../pages/cadastro_usuario/CadastroPage";
import LoginPage from "../../pages/login/LoginPage";
import PaginaInicialPage from "../../pages/pagina_inicial/PaginaInicialPage";
import DetalhesProdutoPage from "../../pages/detalhes_produto/DetalhesProdutoPage";

describe("Validação dos elementos da página detalhes do produto", () => {
  before(() => {
    CadastroPage.cadastro();
  });

  beforeEach(() => {
    LoginPage.login();
    PaginaInicialPage.clicarCardPrimeiroProduto();
  });

  it("Validação do titulo principal", () => {
    DetalhesProdutoPage.validarTituloPrincipal();
  });

  it("Validação do botão Voltar", () => {
    DetalhesProdutoPage.validarBotaoVoltar();
  });

  it("Validação do botão Adicionar a lista", () => {
    DetalhesProdutoPage.validarBotaoAdicionarALista();
  });
});
