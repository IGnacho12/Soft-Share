export default function makeStyles() {
  // Observar el ancho de la pantalla para hacer un diseño responsive
  window.addEventListener("resize", responsive);
  
  // Llamada incial
  responsive();

  function responsive() {
    // Conseguir el ancho de la pantalla
    const size = window.innerWidth;

    const contenedor = document.querySelector("article.contenedor");

    if (size <= 730) {
      // Pantalla menor a 730px
      contenedor.style.gridTemplateColumns = "100%";
    } else if (size <= 1200) {
      // Pantalla menor a 1200px
      contenedor.style.gridTemplateColumns = "50% 50%";
    } else {
      // Pantalla mayor a 1200px
      contenedor.style.gridTemplateColumns = "33.33% 33.33% 33.33%";
    }
  }

  const div_container = programList.querySelectorAll("div"); // Cambié 'ancores' a 'anchors'
  div_container.forEach((div) => {
    div.style.padding = "10px";
  });

  const h2 = document.querySelector("h2");
  h2.style.marginBottom = "10px";

  const contenedor = document.querySelector("article.contenedor");
  contenedor.style.display = "grid";
  contenedor.style.gap = "9px 3px";

  const headers = programList.querySelectorAll("header");
  headers.forEach((header) => {
    header.style.display = "flex";
    header.style.gap = "4px";
    header.style.alignItems = "center";
  });

  const images = programList.querySelectorAll("img");
  images.forEach((img) => {
    img.style.height = "32px";
    img.style.width = "auto";
  });

  const anchors = programList.querySelectorAll("a"); // Cambié 'ancores' a 'anchors'
  anchors.forEach((a) => {
    a.style.textDecoration = "none"; // Aplica el estilo a los enlaces
    a.style.color = "unset"; // Define un color específico
  });

  const spans = programList.querySelectorAll("span");
  spans.forEach((span) => {
    span.style.marginTop = "5px";
    span.style.color = "var(--text-gray-color)";
    span.style.width = "98%";
    span.style.display = "block";
    span.style.overflowWrap = "break-word";
  });
}

