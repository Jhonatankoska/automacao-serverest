import CadastroPage from "../../pages/cadastro_usuario/CadastroPage";
import LoginPage from "../../pages/login/LoginPage";
import PaginaInicialPage from "../../pages/pagina_inicial/PaginaInicialPage";
import DetalhesProdutoPage from "../../pages/detalhes_produto/DetalhesProdutoPage";
import MinhaListaDeProdutosPage from "../../pages/minha_lista_de_produtos/MinhaListaDeProdutosPage";

describe("Validação dos elementos da página minha lista de produtos", () => {
  before(() => {
    CadastroPage.cadastro();
  });

  beforeEach(() => {
    LoginPage.login();
    PaginaInicialPage.clicarCardPrimeiroProduto();
    DetalhesProdutoPage.validarBotaoAdicionarALista();
  });

  it("Validação do titulo principal", () => {
    MinhaListaDeProdutosPage.validarTituloPrincipal();
  });

  it("Validação do botão Adicionar no carrinho", () => {
    MinhaListaDeProdutosPage.validarBotaoAdicionarNoCarrinho();
  });

  it("Validação do botão Limpar Lista", () => {
    MinhaListaDeProdutosPage.validarBotaoLimparLista();
  });

  it("Validação do botão Menos", () => {
    MinhaListaDeProdutosPage.validarBotaoMenos();
  });

  it("Validação do botão Mais", () => {
    MinhaListaDeProdutosPage.validarBotaoMais();
  });

  it("Validação do botão Página Inicial", () => {
    MinhaListaDeProdutosPage.validarBotaoPaginaInicial();
  });
});
