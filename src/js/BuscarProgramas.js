import { DATABASE_URL } from "./Constantes.js";

import CargarTodosLosProgramas from "./CargarTodosLosProgramas.js";

export default async function BuscarProgramas(inputValue, preferenciaDeCategorias) {
  // Evitar hacer la consulta si el campo está vacío
  if (!inputValue.trim()) {
    CargarTodosLosProgramas();
    return;
  }

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
      <article>
         <h4 class="font-bold">No se han encontrado resultados para tú búsqueda.</h4> 
         <p>Puede volver a cargar todos los programas con el botón *Todos los programas🚀*</p>
      </article>
      `;
    return;
  }

  // Actualiza el contenido del contenedor con los nuevos programas
  document.getElementById("formularioDeProgramas").innerHTML = programas
    .map(
      (programa) => `
          <div class="div-container pb-4">
            <header>
              <img
                src="${programa.link_de_imagen}"
                alt="${programa.nombre}"
                width="32"
                height="32"
                loading="lazy"
                onerror="this.onerror=null; this.src='https://s3.amazonaws.com/www-inside-design/uploads/2020/10/aspect-ratios-blogpost-1x1-1.png';"
              />
              <h3 class="font-bold" style="font-size: 19px">
                <a rel="noreferrer" target="_blank" href="${programa.link_de_descarga}">
                  ${programa.nombre}
                </a>
              </h3>
            </header>
            <span>${programa.detalles}</span>
          </div>
        `
    )
    .join("");
}
