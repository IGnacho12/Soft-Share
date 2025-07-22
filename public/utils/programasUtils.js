// src/utils/programasUtils.js

export function renderizarProgramas(programas) {
  if (!Array.isArray(programas)) {
    console.error("❌ Error: 'programas' no es un array");
    return;
  }
  
  return programas
  
    .map((programa) => {
      const categorias = programa.categorias.join(", ");
      return `
        <a target="_blank" class="div-container block p-4 border rounded-md bg-white dark:bg-gray-800" rel="noreferrer" href="${programa.link_de_descarga}">
          <header class="flex py-2 items-center gap-2">
            <img
              class="h-8 w-auto aspect-square rounded"
              src="${programa.link_de_imagen}"
              alt="${programa.nombre}"
              onerror="this.onerror=null;this.src='/assets/error.svg';this.title='La ruta de la imagen no es válida';"
            />
            <h3 class="font-bold text-lg text-shadow-sm dark:text-slate-300">${programa.nombre}</h3>
          </header>
          <span class="font-semibold dark:text-shadow-sm text-shadow-none text-slate-700 dark:text-slate-400 block mt-2">${programa.detalles}</span>
          <span class="font-bold dark:text-slate-200 block mt-1">${categorias}</span>
        </a>
      `;
    })
    .join("");

}

export async function cargarTodosLosProgramas() {
  const contenedor = document.getElementById("formularioDeProgramas");
  contenedor.innerHTML = `<p class="col-span-full flex flex-col justify-center items-center text-center min-h-[30vh]">Cargando...</p>`;

  try {
    const respuesta = await fetch(`/api/get`);
    if (!respuesta.ok) throw new Error("Error al obtener programas");
    const programas = await respuesta.json();
    contenedor.innerHTML = renderizarProgramas(programas);
  } catch (error) {
    console.error(error);
    contenedor.innerHTML = "<p>Error al cargar programas.</p>";
  }
}
