export const DATABASE_URL = "https://backend-soft-share-hdsepfiqz-nachos-projects-077bc528.vercel.app";

export default function HTML_RENDERIZADO(programas) {
  // Renderizar los programas
  document.getElementById("formularioDeProgramas").innerHTML = programas
    .map((programa) => {
      // Acceder a las categorías del programa (si existen)
      const categorias = programa.categorias.join(", ");
      return `
          <div class="div-container">
            <header class="flex">
              <img
                src="${programa.link_de_imagen}"
                alt="${programa.nombre}"
                onerror="this.onerror=null; this.src='/css/error.png';" 
              />
              <h3>
              <a rel="noreferrer" href="${programa.link_de_descarga}">
              ${programa.nombre}
              </a>
              </h3>
              </header>
              <span>${programa.detalles}</span>
              <span class="textCategorias  text-sm text-end w-fit font-bold">${categorias}</span>
          </div>
        `;
    })
    .join("");

  function cargarCSS(ruta) {
    const head = document.head;
    const link = document.createElement("link");

    link.rel = "stylesheet";
    link.href = ruta;

    head.appendChild(link);
    console.log(`Hoja de estilos ${ruta} cargada.`);
  }
  cargarCSS("/css/estilarProgramas.css");
}
