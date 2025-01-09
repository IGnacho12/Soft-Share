import { DATABASE_URL } from "./Constantes.js";
import HTML_RENDERIZADO from "./Constantes.js";

export default async function CargarProgramas() {
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
}
