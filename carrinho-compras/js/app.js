function adicionar() {
  const inputProducts = document.querySelector('.produto-input').value
  const inputQuantity = Number(document.querySelector('.quantidade-input').value)

  const totalValue = Number(spanTotalValue.innerText.replace(/\D/g, ''))

  const quantityProducts = inputQuantity == 0 ? 1 : inputQuantity

  const productsValue = Number(inputProducts.replace(/\D/g, ''));

  const sumTotal = totalValue + productsValue * quantityProducts;

  spanTotalValue.innerText = `R$${sumTotal}`

  const productName = inputProducts.replace(/\s-\s.*/, '')
  const textProductName = document.createTextNode(productName);

  const sectionProduct = generateElement("section", "carrinho__produtos__produto", "")
  const spanQuantityProduct = generateElement("span", 'texto-azul', `${quantityProducts}x `)
  const spanProductValue = generateElement("span", 'texto-azul', ` R$ ${productsValue}`)

  sectionProduct.append(spanQuantityProduct, textProductName, spanProductValue)
  productList.append(sectionProduct)
}

function generateElement(element, classes, text) {
  const createElement = document.createElement(element)
  createElement.classList.add(classes)
  createElement.innerText = text
  return createElement
}

const productList = document.getElementById('lista-produtos')

const spanTotalValue = document.getElementById('valor-total')

function limpar() {
  productList.innerText = ""
  spanTotalValue.innerText = "R$"
}