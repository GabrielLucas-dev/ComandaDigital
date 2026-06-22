# ComandaDigital

ComandaDigital e um sistema de PDV pensado para pequenos negocios de alimentacao, como lanchonetes, acaiterias, pizzarias e outros pontos de venda que precisam registrar pedidos com rapidez, controlar o caixa do dia e consultar o historico de vendas.

A ideia principal do projeto e centralizar a rotina do atendente: abrir o caixa, montar pedidos a partir de produtos cadastrados, escolher a forma de pagamento, finalizar a venda e depois acompanhar os resultados do movimento.

## O que o sistema faz

- Abertura de caixa com saldo inicial opcional.
- Registro de vendas em uma tela de frente de caixa.
- Carrinho de pedido com produtos selecionados.
- Selecao de forma de pagamento: dinheiro, credito, debito ou Pix.
- Cadastro e edicao de produtos, categorias e complementos.
- Uso de complementos em produtos que precisam de personalizacao, como acai.
- Historico de vendas com consulta por data e detalhes dos itens vendidos.
- Fechamento de caixa com resumo do dia.
- Tela de analises com total vendido, quantidade de vendas, ticket medio e formas de pagamento.
- Login com controle de acesso por token.

## Fluxo do PDV

O uso do sistema comeca no login. Depois de entrar, o usuario acessa a tela de PDV e abre o caixa do dia, podendo informar o troco inicial.

Com o caixa aberto, a tela de vendas passa a ser o centro da operacao. Nela o atendente escolhe produtos por categoria, pesquisa itens pelo nome, adiciona produtos ao carrinho e, quando necessario, seleciona complementos. Ao confirmar o pedido, o sistema solicita a forma de pagamento e registra a venda.

No fim do expediente, o usuario pode acessar a tela de fechamento do PDV. Essa tela mostra um resumo do caixa, incluindo saldo inicial, quantidade de vendas e total vendido. Depois do fechamento, o movimento fica salvo para consulta futura.

## Principais telas

### Login

Tela de entrada do sistema. O usuario informa email e senha para acessar as funcionalidades do PDV.

### PDV

Tela inicial da operacao de caixa. Mostra a data atual, o status do caixa e permite abrir uma nova sessao de PDV ou acessar as vendas quando ja existe um caixa aberto.

### Frente de caixa

Tela usada no atendimento. Apresenta categorias, produtos, busca por nome, carrinho do pedido e confirmacao de pagamento. E a parte mais operacional do sistema.

### Produtos

Area de gerenciamento do catalogo. Permite visualizar e manter produtos, categorias e complementos, que depois aparecem na frente de caixa.

### Historico

Consulta das vendas realizadas. O usuario pode ver movimentacoes, filtrar por data e abrir os detalhes de uma venda para conferir os itens registrados.

### Analises

Painel com indicadores do negocio, como valor vendido, numero de vendas, ticket medio e distribuicao por forma de pagamento. Tambem possui visoes dos ultimos 30 dias, historico completo e busca por periodo.

### Fechamento de caixa

Tela usada para encerrar o PDV aberto. Mostra um resumo do movimento do dia e permite informar o saldo final em caixa.

## Para quem este projeto serve

O ComandaDigital foi criado para simular ou atender uma rotina real de venda presencial, especialmente em negocios que trabalham com produtos simples e algumas personalizacoes. Ele e util para controlar pedidos, reduzir anotacoes manuais e manter um historico basico do desempenho do caixa.

## Organizacao do projeto

O projeto e dividido em duas partes:

- `frontend/comandaDigital`: interface do sistema, feita em React.
- `backend`: API responsavel por vendas, produtos, categorias, complementos, usuarios, PDV e analises.

O banco de dados usado e MySQL, com tabelas para usuarios, produtos, categorias, complementos, vendas, itens de venda e sessoes de PDV.

## Como executar em ambiente local

Para rodar o projeto localmente, e necessario ter o banco MySQL configurado e instalar as dependencias do backend e do frontend.

Backend:

```bash
cd backend
npm install
npm run dev
```

Frontend:

```bash
cd frontend/comandaDigital
npm install
npm run dev
```

Por padrao, a API roda em `http://localhost:3031` e o frontend usa essa URL para se comunicar com o backend.

## Observacao

Este README descreve o projeto como produto e fluxo de uso. Detalhes mais profundos de implementacao, regras internas e melhorias futuras podem ser documentados separadamente conforme o sistema evoluir.
