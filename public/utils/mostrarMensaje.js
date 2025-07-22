export default function mostrarMensaje(tipo, mensaje) {
  const contenedor = document.getElementById("id-alerta");
  const titulo = document.getElementById("alerta-titulo");
  const texto = document.getElementById("alerta-mensaje");

  let colorTexto, colorBorde, tituloTexto;

  switch (tipo) {
    case "error":
      colorTexto = "text-red-700";
      colorBorde = "border-red-600";
      tituloTexto = "Error";
      break;
    case "informacion":
      colorTexto = "text-blue-700";
      colorBorde = "border-blue-600";
      tituloTexto = "Información";
      break;
    case "exito":
      colorTexto = "text-green-700";
      colorBorde = "border-green-600";
      tituloTexto = "Éxito";
      break;
    default:
      console.warn("Tipo de mensaje inválido:", tipo);
      return;
  }

  // Resetear clases previas
  contenedor.className =
    "alert-container fixed bottom-1 left-1 items-center p-4 text-sm border-2 rounded-lg bg-gray-900 transition-all opacity-1 duration-300";
  contenedor.classList.add(colorTexto, colorBorde, "animation");

  // Setear contenido
  titulo.innerText = tituloTexto;
  texto.innerText = mensaje;

  // Limpiar animación después de 7 segundos
  setTimeout(() => {
    contenedor.classList.remove("animation");
    texto.innerText = "";
  }, 7000);
}
