import LoadPrograms from "../js/rendererAllPrograms.js";

import makeStyles from "./makeStyles.js";

export default async function searchPrograms(InputValue) {
  // Evitar hacer la consulta si el campo está vacío
    if (!InputValue.trim()) {
      LoadPrograms()
      return;
    }

    const response = await fetch("https://backend-soft-share-1tr9ac9dt-nachos-projects-077bc528.vercel.app/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          InputValue
        }),
      });

      const programs = await response.json()

    // Comprueba si la búsqueda retorna algún valor
    if (await programs.length < 1) {
      document.getElementById("programList").innerHTML = `
      <article>
         <h4 class="font-bold">No se han encontrado resultados para tú búsqueda.</h4> 
         <p>Puede volver a cargar todos los programas con el botón *Todos los programas🚀*</p>
      </article>
      `;


  const article = programList.querySelector("article");
      programList.style.display = "flex";
      programList.style.width = "100%";
      programList.style.flexDirection = "column";
      programList.style.alignSelf = "center";
      programList.style.placeSelf = "center";
      programList.style.marginBottom = "20px";
      article.style.margin = "40px";

    const h4 = programList.querySelector("h4")
    h4.style.fontSize = "1.4rem"

    programList.querySelector("p").style.color = "gray"
      return;
    }

    // Actualiza el contenido del contenedor con los nuevos programas
    document.getElementById("programList").innerHTML = programs
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
    makeStyles();
}
    