export async function LoadPrograms() {
  const response = await sql`SELECT * FROM programas
ORDER BY nombre ASC`;

  const programList = document.getElementById("programList");

  // Actualiza el contenido del contenedor con los nuevos programas
  programList.innerHTML = response
    .map(
      (programa) => `
        <div class="div-container">
          <header>
            <img
              src="${programa.link_de_imagen}"
              alt="${programa.nombre}"
              onerror="this.onerror=null; this.src='https://s3.amazonaws.com/www-inside-design/uploads/2020/10/aspect-ratios-blogpost-1x1-1.png';"
            />
            <h3>
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
}