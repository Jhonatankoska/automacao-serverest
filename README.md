# automacao-serverest

# 🧪 Testes Automatizados com Cypress - Padrão POM 

Este repositório contém testes automatizados utilizando **Cypress** com o padrão **Page Object Model (POM)**. O fluxo testado envolve cadastro, login, navegação pela página inicial, detalhes de produto e funcionalidades da lista de produtos.

---

## 📂 Estrutura de Pastas

/cypress
 ├── cypress.config.js                          # Configurações do Cypress
 ├── e2e/
 │   ├── pages/
 │   │   ├── cadastro_usuario/
 │   │   │   ├── CadastroPage.js               # Page Object do cadastro de usuário
 │   │   ├── login/
 │   │   │   ├── LoginPage.js                  # Page Object do login
 │   │   ├── pagina_inicial/
 │   │   │   ├── PaginaInicialPage.js          # Page Object da home
 │   │   ├── detalhes_produto/
 │   │   │   ├── DetalhesProdutoPage.js        # Page Object dos detalhes do produto
 │   │   ├── minha_lista_de_produtos/
 │   │   │   ├── MinhaListaDeProdutosPage.js   # Page Object da lista de produtos
 │   ├── tests/
 │   │   ├── cadastro_login.cy.js              # Teste de cadastro e login
 │   │   ├── login.cy.js                        # Teste de login (se separado futuramente)
 │   │   ├── pagina_inicial.cy.js              # Testes da página inicial
 │   │   ├── detalhes_produto.cy.js            # Testes da página de detalhes
 │   │   ├── minha_lista_de_produtos.cy.js     # Testes da lista de produtos
 ├── package.json                               # Dependências do projeto
 ├── support/
 │   ├── commands.js                            # Comandos customizados (opcional)
 ├── .github/
 │   ├── workflows/
 │   │   ├── cypress.yml                        # Pipeline de CI com GitHub Actions
 ├── README.md                                  # Documentação do projeto


------------------------------------------------------------------------------------------------------

## 🚀 Como Executar o Projeto

### 1️⃣ Instalar dependências

Certifique-se de que possui o **Node.js** instalado. Em seguida, instale as dependências do projeto:

```bash
npm install
```

------------------------------------------------------------------------------------------------------

### 2️⃣ Executar os testes no modo interativo

```
npx cypress open
```
Isso abrirá o Cypress Test Runner, onde você pode selecionar e rodar os testes manualmente.

------------------------------------------------------------------------------------------------------

### 3️⃣ Executar os testes no modo headless

```
npx cypress run
```
Isso executará todos os testes em segundo plano, sem interface gráfica.

-------------------------------------------------------------------------------------------------------

## 🎯 Padrão Utilizado - Page Object Model (POM)
O Page Object Model (POM) é uma abordagem que organiza os testes criando classes para representar páginas, tornando os testes mais reutilizáveis e fáceis de manter.

🟢 Vantagens:
- Separar a lógica da interface dos testes

- Facilitar a manutenção e reutilização do código

- Melhor legibilidade e organização dos testes

-------------------------------------------------------------------------------------------------------

## 🔄 Fluxo Automatizado
O projeto cobre o seguinte fluxo completo:

- Acessa a página inicial

- Realiza cadastro de usuário com e-mail dinâmico

- Realiza login com credenciais válidas

- Valida elementos da página inicial

- Interage com o primeiro produto listado

- Valida os componentes da página de detalhes do produto

- Adiciona produto à lista de compras

Valida funcionalidades da lista de produtos, como:

- Adicionar ao carrinho

- Aumentar/diminuir quantidade

- Limpar lista

- Voltar à página inicial

------------------------------------------------------------------------------------------------------

## 🛠 Tecnologias Utilizadas
- Cypress (framework de testes E2E)

- JavaScript ES6

- Page Object Model (POM)

- GitHub Actions (Integração Contínua)

------------------------------------------------------------------------------------------------------
