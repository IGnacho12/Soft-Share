 
 import makeStyles from "./makeStyles.js";
 
 export default async function LoadPrograms() {
    console.log("Función cargar todos los programas, ejecutándose.")
  try {
    // GET -> Backend
    const response = await fetch("https://backend-soft-share-1tr9ac9dt-nachos-projects-077bc528.vercel.app/get");

    if (!response.ok) {
      throw new Error("Error al obtener los programas");
    }

    // Convert the response to json format
    const programs = await response.json();

    // Update the page with the json (programs)
    document.getElementById("programList").innerHTML = programs
      .map(
        (programa) => `
          <div class="div-container pb-4">
            <header class="flex">
              <img
                src="${programa.link_de_imagen}"
                alt="${programa.nombre}"
                onerror="this.onerror=null; this.src='https://s3.amazonaws.com/www-inside-design/uploads/2020/10/aspect-ratios-blogpost-1x1-1.png';"
              />
              <h3 class="font-bold" style="font-size: 19px"">
                <a rel="noreferrer" href="${programa.link_de_descarga}">
                  ${programa.nombre}
                </a>
              </h3>
            </header>
            <span>${programa.detalles}</span>
          </div>
        `
      )
      .join("");

    makeStyles();
  } catch (error) {
    console.error("Error al cargar los programas:", error);
  }
}
