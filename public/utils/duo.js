// utils/duo.js

import { renderizarProgramas, cargarTodosLosProgramas } from "./programasUtils.js";

export function initBusquedaYCategorias({
  inputId = "inputSearch",
  contenedorId = "formularioDeProgramas",
  btnVerMasSelector = ".ver-mas",
  mainControlesId = "main-controles-de-categorias",
} = {}) {
  const inputBusqueda = document.getElementById(inputId);
  const contenedor = document.getElementById(contenedorId);
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const botonVerMas = document.querySelector(btnVerMasSelector);
  const mainControles = document.getElementById(mainControlesId);

  window.categoriasElegidas = [];
  window.ValorDeUsuario = "";

  let controlesAbiertos = false;

  if (botonVerMas && mainControles) {
    botonVerMas.addEventListener("click", () => {
      controlesAbiertos = !controlesAbiertos;
      mainControles.classList.toggle("mostrar-controles-de-catetorias", controlesAbiertos);
    });
  }

  async function buscarProgramas() {
    const inputValue = inputBusqueda?.value?.trim() || "";
    const categorias = window.categoriasElegidas || [];

    contenedor.innerHTML = `<p class="col-span-full flex flex-col justify-center items-center text-center min-h-[30vh]">Cargando...</p>`;

    try {
      const respuesta = await fetch("/api/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ inputValue, preferenciaDeCategorias: categorias }),
      });

      const programas = await respuesta.json();

      if (!Array.isArray(programas)) throw new Error("Respuesta inesperada");

      if (programas.length === 0) {
        contenedor.innerHTML = `
          <div class="col-span-full flex flex-col justify-center items-center text-center min-h-[30vh]">
            <h4 class="font-bold text-lg">No se encontraron resultados para tu búsqueda.</h4>
            <p>Prueba otro término o recarga todos los programas 🚀</p>
          </div>`;
      } else {
        contenedor.innerHTML = renderizarProgramas(programas);
      }
    } catch (error) {
      console.error("Error al buscar programas:", error);
      contenedor.innerHTML = `<div class="col-span-full text-center text-red-600 font-semibold">Error en la búsqueda.</div>`;
    }
  }

  if (inputBusqueda) {
    inputBusqueda.addEventListener("input", () => {
      window.ValorDeUsuario = inputBusqueda.value;
      buscarProgramas();
    });
  }

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", (e) => {
      const id = e.target.id;
      if (e.target.checked) {
        if (!window.categoriasElegidas.includes(id)) {
          window.categoriasElegidas.push(id);
        }
      } else {
        window.categoriasElegidas = window.categoriasElegidas.filter((item) => item !== id);
      }
      buscarProgramas();
    });
  });

  cargarTodosLosProgramas();
}
