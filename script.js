function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("white")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("white")) {
    // se tiver white mode, adicionar a imagem light
    img.setAttribute("src", "./Assets/Avatar-white.jpeg")
    img.setAttribute("alt", "Logo da Sertenge Branca")
  } else {
    // se tiver sem white mode, manter a imagem normal
    img.setAttribute("src", "./Assets/Avatar-blue.jpeg")
    img.setAttribute("alt", "Logo da Sertenge Azul")
  }
}
