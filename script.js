function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("blue")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("blue")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./Assets/Avatar-blue.jpeg")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./Assets/Avatar-white.jpeg")
  }

  if (html.classList.contains("blue")) {
    img.setAttribute(
      "alt",
      "Logo da Sertenge Azul"
    )
  } else {
    img.setAttribute(
      "alt",
      "Logo da Sertenge Branca"
    )
  }
}
