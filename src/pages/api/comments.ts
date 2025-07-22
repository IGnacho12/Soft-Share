// /api/comments.ts
// GET: Devuelve los comentarios desde la base de datos ordenados por fecha descendente

import { neon } from "@neondatabase/serverless";
const consulta = neon(import.meta.env.DATABASE_URL);
export const prerender = false;

export async function GET() {
  try {
    const resultado = await consulta(
      "SELECT autor, comentario, fecha FROM comentarios ORDER BY id DESC"
    );
    return new Response(JSON.stringify(resultado), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: `Error al obtener comentarios: ${error.message}` }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}

// POST: Inserta un nuevo comentario si no hay duplicados en autor, comentario o fecha

export async function POST({ request }) {
  try {
    const { autor, comentario, fecha } = await request.json();

    const resultadoConsulta = await consulta("SELECT * FROM comentarios");

    const duplicado = resultadoConsulta.some((item) =>
      [item.autor, item.comentario, item.fecha].some((valor) =>
        [autor, comentario, fecha].includes(valor)
      )
    );

    if (duplicado) {
      return new Response(
        JSON.stringify({ error: "El comentario tiene campos duplicados." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    await consulta(
      `INSERT INTO comentarios (autor, comentario, fecha) VALUES ($1, $2, $3)`,
      [autor, comentario, fecha]
    );

    return new Response(
      JSON.stringify({ mensaje: "Comentario insertado exitosamente." }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: `Error al insertar comentario: ${error.message}` }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
