// ===============================
// 📁 /src/pages/api/get.ts
// ✅ GET: Obtener todos los programas
// ===============================
import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";
export const prerender = false;

dotenv.config();
const consulta = neon(process.env.DATABASE_URL);

export async function GET() {
  try {
    const resultado =
      await consulta`SELECT * FROM programas ORDER BY nombre ASC`;
    return new Response(JSON.stringify(resultado), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response("Error al obtener programas: " + error, {
      status: 500,
    });
  }
}

// ===============================
// 📁 /src/pages/api/search.ts
// ✅ POST: Buscar programas por nombre + categorías
// ===============================

export async function POST({ request }) {
  try {
    const body = await request.json();
    const inputValue = (body.inputValue || "").toLowerCase();
    const preferenciaDeCategorias = body.preferenciaDeCategorias || [];
    // Console log
    console.log("🔍 Buscando programas...");
    console.log("Valor del input:", inputValue);
    console.log("Categorías seleccionadas:", preferenciaDeCategorias);
    // '''
    if (!inputValue && preferenciaDeCategorias.length === 0) {
      // Retornar TODOS los programas (antes error)
      const resultado =
        await consulta`SELECT * FROM programas ORDER BY nombre ASC`;
      return new Response(JSON.stringify(resultado), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    let resultado;
    if (preferenciaDeCategorias.length === 0) {
      resultado = await consulta`
        SELECT * FROM programas
        WHERE LOWER(nombre) LIKE ${"%" + inputValue + "%"}
        ORDER BY nombre ASC
      `;
    } else {
      resultado = await consulta`
        SELECT * FROM programas
        WHERE LOWER(nombre) LIKE ${"%" + inputValue + "%"}
        AND categorias @> ${preferenciaDeCategorias}
        ORDER BY nombre ASC
      `;
    }


    return new Response(JSON.stringify(resultado), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });

    
  } catch (error) {
    return new Response("Error al buscar programas: " + error, { status: 500 });
  }
}
