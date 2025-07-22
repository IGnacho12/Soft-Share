import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";
export const prerender = false;

dotenv.config();
const consulta = neon(process.env.DATABASE_URL);

export async function POST({ request }) {
  try {
    const {
      nombre,
      link_de_imagen,
      link_de_descarga,
      detalles,
      categoriaSeleccionadaFinal,
    } = await request.json();

   await consulta`INSERT INTO programas (nombre, link_de_imagen, link_de_descarga, detalles, categorias) VALUES (${nombre}, ${link_de_imagen}, ${link_de_descarga}, ${detalles}, ${categoriaSeleccionadaFinal})`;



    return new Response(
      JSON.stringify({ mensaje: "Programa insertado correctamente." }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error al insertar programa:", error); // 👈 Agregado
    return new Response(
      JSON.stringify({ error: `Error al insertar programa: ${error.message}` }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
