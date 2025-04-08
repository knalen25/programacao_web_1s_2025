const express = require('express');
const app = express();
const port = 8080;

const {
  adicionarProduto,
  listarProdutos,
  removerProduto,
  editarProduto
} = require('./estoque');

// Rotas
app.get('/adicionar/:id/:nome/:qtd', (req, res) => {
  const { id, nome, qtd } = req.params;
  const resposta = adicionarProduto(id, nome, qtd);
  res.send(resposta);
});

app.get('/listar', (req, res) => {
  res.json(listarProdutos());
});

app.get('/remover/:id', (req, res) => {
  const { id } = req.params;
  const resposta = removerProduto(id);
  res.send(resposta);
});

app.get('/editar/:id/:qtd', (req, res) => {
  const { id, qtd } = req.params;
  const resposta = editarProduto(id, qtd);
  res.send(resposta);
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
