// estoque.js

const estoque = {};

// Adiciona um novo produto
function adicionarProduto(id, nome, qtd) {
  if (estoque[id]) {
    return `Produto com ID ${id} já existe.`;
  }

  estoque[id] = { nome, qtd: parseInt(qtd) };
  return `Produto '${nome}' adicionado com sucesso!`;
}

// Lista todos os produtos
function listarProdutos() {
  return estoque;
}

// Remove um produto
function removerProduto(id) {
  if (!estoque[id]) {
    return `Produto com ID ${id} não encontrado.`;
  }

  delete estoque[id];
  return `Produto com ID ${id} removido com sucesso.`;
}

// Edita a quantidade de um produto
function editarProduto(id, qtd) {
  if (!estoque[id]) {
    return `Produto com ID ${id} não encontrado.`;
  }

  estoque[id].qtd = parseInt(qtd);
  return `Quantidade do produto '${estoque[id].nome}' atualizada para ${qtd}.`;
}

module.exports = {
  adicionarProduto,
  listarProdutos,
  removerProduto,
  editarProduto
};
