function enviarMensaje() {
  let texto = document.getElementById("texto").value;
  let mensajes = document.getElementById("mensajes");

  if (texto !== "") {
    let nuevo = document.createElement("div");
    nuevo.textContent = "👤 Tú: " + texto;

    mensajes.appendChild(nuevo);

    document.getElementById("texto").value = "";
    mensajes.scrollTop = mensajes.scrollHeight;
  }
}
