const participantes = [];
const listaParticipantes = document.querySelector("#lista-amigos");
const listaSorteados = document.querySelector("#lista-sorteio");
function adicionar() {
  const nomeParticipante = document.querySelector("#nome-amigo");
  const regexNomeParticipante = nomeParticipante.value.replace(/\d+/g, "");
  const verificaNome = participantes.includes(nomeParticipante.value);

  regexNomeParticipante != "" && !verificaNome
    ? participantes.push(nomeParticipante.value)
    : alert("insira um nome valido ou diferente dos existentes");

  listaParticipantes.innerText = participantes.join(", ");
  nomeParticipante.value = "";
}

function sortear() {
  embaralha(participantes);
  if (participantes.length > 1) {
    for (let i = 0; i < participantes.length; i++) {
      if (i == participantes.length - 1) {
        listaSorteados.innerHTML =
          listaSorteados.innerHTML +
          `${participantes[i]} --> ${participantes[0]} <br>`;
      } else {
        listaSorteados.innerHTML =
          listaSorteados.innerHTML +
          `${participantes[i]} --> ${participantes[i + 1]} <br>`;
      }
    }
  } else {
    alert("insira mais participantes");
  }
}
function embaralha(lista) {
  for (let indice = lista.length; indice; indice--) {
    const indiceAleatorio = Math.floor(Math.random() * indice);
    [lista[indice - 1], lista[indiceAleatorio]] = [
      lista[indiceAleatorio],
      lista[indice - 1],
    ];
  }
}

function reiniciar() {
  listaParticipantes.innerText = "";
  listaSorteados.innerText = "";
  participantes.length = 0;
}
