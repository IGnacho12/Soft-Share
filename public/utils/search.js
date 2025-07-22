// utils/buscar.js
import { renderizarProgramas } from './programasUtils.js';

export async function buscarProgramas(inputValue, categorias = []) {
  document.getElementById("formularioDeProgramas").innerHTML = `<p class='text-center'>Buscando...</p>`;
  

  try {
    const res = await fetch("/api/search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        inputValue,
        preferenciaDeCategorias: categorias,
      }),
    });

    if (!res.ok) throw new Error("Fallo la búsqueda");

    const programas = await res.json();

    if (programas.length === 0) {
      document.getElementById("formularioDeProgramas").innerHTML = `
        <div class="text-center py-4">
          <h4 class="font-bold">No se encontraron resultados</h4>
        </div>
      `;
    } else {
      renderizarProgramas(programas);
    }
  } catch (err) {
    console.error(err);
    document.getElementById("formularioDeProgramas").innerHTML = `<p class="text-red-500">Error al buscar programas.</p>`;
  }
}
