export default function mostrarError(mensaje) {
  const contenendorError2 = document.getElementById("id-error");
  document.getElementById("error-message").innerHTML = mensaje;

    // Agregar animación
    contenendorError2.classList.add("animation");

    // Remover animación después de 5 segundos
    setTimeout(() => {
      contenendorError2.classList.remove("animation");
    }, 7000);
}
