function alterarStatus(id) {
  const element = event.target
  const imgGame = document.querySelector(`#game-${id} :first-child`)
  element.classList.toggle("dashboard__item__button--return")
  imgGame.classList.toggle("dashboard__item__img--rented")
  element.innerText === "Devolver" ? element.innerText = "Alugar" : element.innerText = "Devolver"
}