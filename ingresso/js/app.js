function comprar() {
  const ticketType = document.querySelector('#tipo-ingresso').value
  const quantityTicket = Number(document.querySelector('#qtd').value)
  const spanQuantityTicket = document.querySelector(`#qtd-${ticketType}`)
  const remainingTickets = Number(spanQuantityTicket.innerText)
  if (quantityTicket != 0 && remainingTickets >= quantityTicket) {
    const calculatedRemainingTickets = remainingTickets - quantityTicket
    spanQuantityTicket.innerText = calculatedRemainingTickets
    alert('Compra realizada com sucesso!');
  } else {
    const message = quantityTicket == 0 ? 'selecione uma quantidade maior que 0' : `Quantidade indisponível para ${ticketType}`
    alert(message)
  }
}