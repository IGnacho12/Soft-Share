import { DATABASE_URL } from "./Constantes.js";
import HTML_RENDERIZADO from "./Constantes.js";

export default async function CarcarProgramas() {
  console.log("Función cargar todos los programas, ejecutándose.");
  console.log(DATABASE_URL);
  try {
    // GET -> Backend
    const respuesta = await fetch(`${DATABASE_URL}/get`);

    if (!respuesta.ok) {
      throw new Error("Error al obtener los programas");
    }

    // Convertir la respuesta a JSON
    const programas = await respuesta.json();

    HTML_RENDERIZADO(programas);
  } catch (error) {
    console.error("Error al cargar los programas:", error);
  }
  loadCSS("/src/css/estilarProgramas.css");
}

// Cargar CSS después de que los programas hayan sido renderizados
function loadCSS(ruta) {
  const head = document.head;
  const link = document.createElement("link");

  link.rel = "stylesheet";
  link.href = ruta;

  head.appendChild(link);
  console.log(`Hoja de estilos ${ruta} cargada.`);
}
