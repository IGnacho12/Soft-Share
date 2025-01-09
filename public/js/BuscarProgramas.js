import { DATABASE_URL } from "./Constantes.js";

import HTML_RENDERIZADO from "./Constantes.js";

import CargarTodosLosProgramas from "./CargarTodosLosProgramas.js";

export default async function BuscarProgramas(
  inputValue,
  preferenciaDeCategorias
) {
  // Evitar hacer la consulta si el campo está vacío

  if (!inputValue) {
    inputValue = "";
  }

  if (!inputValue.trim() && !preferenciaDeCategorias.length) {
    CargarTodosLosProgramas();
    return;
  }

  console.log(inputValue);
  console.log(preferenciaDeCategorias);

  const respuesta = await fetch(`${DATABASE_URL}/search`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      inputValue,
      preferenciaDeCategorias,
    }),
  });

  console.log(respuesta);

  const programas = await respuesta.json();

  console.log(programas);

  // Comprueba si la búsqueda retorna algún valor
  if ((await programas.length) < 1) {
    document.getElementById("formularioDeProgramas").innerHTML = `
      <article id="notFound404">
         <h4 class="font-bold">No se han encontrado resultados para tú búsqueda.</h4> 
         <p>Puede volver a cargar todos los programas con el botón *Todos los programas🚀*</p>
      </article>
      `;
    return;
  }

  HTML_RENDERIZADO(programas)
}
