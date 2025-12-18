// =============================================
// 📄 /src/pages/api/get.ts
// ✅ GET: Obtener todos los programas de la BD
// =============================================

import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";
dotenv.config(); // Cargar variables de entorno
export const prerender = false;

const consulta = neon(process.env.DATABASE_URL!);

export async function GET() {
  try {
    const resultado = await consulta`SELECT * FROM programas ORDER BY nombre ASC`;

    return new Response(JSON.stringify(resultado), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  } catch (error: any) {
    return new Response(
      JSON.stringify({
        error: "Error al obtener los programas",
        message: error.message,
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
