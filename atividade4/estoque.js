const estoque = {};

// Função auxiliar para validar número inteiro positivo
function validarNumeroPositivo(valor) {
  const numero = parseInt(valor);
  return Number.isInteger(numero) && numero > 0;
}

// Adiciona um novo produto
function adicionarProduto(id, nome, qtd) {
  if (!validarNumeroPositivo(id)) {
    return `ID inválido. Deve ser um número inteiro positivo.`;
  }
  if (!validarNumeroPositivo(qtd)) {
    return `Quantidade inválida. Deve ser um número inteiro positivo.`;
  }

  if (estoque[id]) {
    return `Produto com ID ${id} já existe.`;
  }

  estoque[id] = { nome, qtd: parseInt(qtd) };
  return `Produto '${nome}' adicionado com sucesso!`;
}

// Lista todos os produtos
function listarProdutos() {
  let lista = '';

  for(const id in estoque){
    const produto = estoque[id]
    lista += `ID: ${id} 
              Produto: ${produto.nome} 
              Quantidade: ${produto.qtd}`;
  }

  return lista || "Estoque vazio.";

} 
// Remove um produto
function removerProduto(id) {
  if (!validarNumeroPositivo(id)) {
    return `ID inválido. Deve ser um número inteiro positivo.`;
  }

  if (!estoque[id]) {
    return `Produto com ID ${id} não encontrado.`;
  }

  delete estoque[id];
  return `Produto com ID ${id} removido com sucesso.`;
}

// Edita a quantidade de um produto
function editarProduto(id, qtd) {
  if (!validarNumeroPositivo(id)) {
    return `ID inválido. Deve ser um número inteiro positivo.`;
  }
  if (!validarNumeroPositivo(qtd)) {
    return `Quantidade inválida. Deve ser um número inteiro positivo.`;
  }

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
