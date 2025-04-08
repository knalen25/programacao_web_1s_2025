const express = require('express');
const app = express();
const port = 8080;

let estoque = {};

// Rota para adicionar um produto ao estoque
app.get('/adicionar/:id/:nome/:qtd', (req, res) => {
  const { id, nome, qtd } = req.params;

  if (estoque[id]) {
    return res.send(`Produto com ID ${id} já existe.`);
  }

  estoque[id] = { nome, qtd: parseInt(qtd) };
  res.send(`Produto '${nome}' adicionado com sucesso!`);
});

// Rota para listar todos os produtos
app.get('/listar', (req, res) => {
  res.json(estoque);
});

// Rota para remover um produto
app.get('/remover/:id', (req, res) => {
  const { id } = req.params;

  if (!estoque[id]) {
    return res.send(`Produto com ID ${id} não encontrado.`);
  }

  delete estoque[id];
  res.send(`Produto com ID ${id} removido com sucesso.`);
});

// Rota para editar a quantidade de um produto
app.get('/editar/:id/:qtd', (req, res) => {
  const { id, qtd } = req.params;

  if (!estoque[id]) {
    return res.send(`Produto com ID ${id} não encontrado.`);
  }

  estoque[id].qtd = parseInt(qtd);
  res.send(`Quantidade do produto '${estoque[id].nome}' atualizada para ${qtd}.`);
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
