export const DATABASE_URL = "https://backend-soft-share.vercel.app";

export function HTML_RENDERIZADO(programas) {
  // Renderizar los programas
  let SPAN_CATEGORIAS = "ocultarSpanCategorias";
  if (mostrarCategoriasBoolean) {
    SPAN_CATEGORIAS = "mostrarSpanCategorias";
  } else {
    SPAN_CATEGORIAS = "ocultarSpanCategorias";
  }
  document.getElementById("formularioDeProgramas").innerHTML = programas
    .map((programa) => {
      // Acceder a las categorías del programa (si existen)
      const categorias = programa.categorias.join(", ");
      return `
          <div class="div-container">
            <header class="flex">
              <img
                "
                src="${programa.link_de_imagen}"
                alt="${programa.nombre}"
                onerror="this.onerror=null; this.src='/assets/error.svg'; this.title='La ruta de la imagen no es válida';"
              />
              <h3>
              <a rel="noreferrer" href="${programa.link_de_descarga}">
              ${programa.nombre}
              </a>
              </h3>
              </header>
              <span>${programa.detalles}</span>
              <span class="textCategorias ${SPAN_CATEGORIAS} text-sm text-end w-fit font-bold text-[var(--text-color)] dark:text-white">${categorias}</span>
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
  }
  cargarCSS("/css/estilarProgramas.css");
  const CONTENEDOR_DE_PROGRAMAS = document.querySelector(".contenedor");
  CONTENEDOR_DE_PROGRAMAS.classList.remove("not-loaded");
}

export function HTML_CARGANDO() {
  // Renderizar los programas
  const CONTENEDOR_DE_PROGRAMAS = document.querySelector(".contenedor");
  CONTENEDOR_DE_PROGRAMAS.classList.add("not-loaded");
  document.getElementById("formularioDeProgramas").innerHTML = `

<div role="img" class="wheel-and-hamster bg-red-300">
	<div class="wheel"></div>
	<div class="hamster">
		<div class="hamster__body">
			<div class="hamster__head">
				<div class="hamster__ear"></div>
				<div class="hamster__eye"></div>
				<div class="hamster__nose"></div>
			</div>
			<div class="hamster__limb hamster__limb--fr"></div>
			<div class="hamster__limb hamster__limb--fl"></div>
			<div class="hamster__limb hamster__limb--br"></div>
			<div class="hamster__limb hamster__limb--bl"></div>
			<div class="hamster__tail"></div>
		</div>
	</div>
	<div class="spoke"></div>
</div>
  `;
  function cargarCSS(ruta) {
    const head = document.head;
    const link = document.createElement("link");

    link.rel = "stylesheet";
    link.href = ruta;

    head.appendChild(link);
  }
  cargarCSS("/css/loader.css");
}
