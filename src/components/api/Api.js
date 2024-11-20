const API_BASE_URL = "https://unisex-backend.vercel.app"; // Asegúrate de que la URL sea correcta

const HEADERS = {
  "Content-Type": "application/json",
};

// Función genérica para hacer solicitudes al backend
const fetchData = async (url) => {
  try {
    const response = await fetch(url, { headers: HEADERS });
    if (!response.ok) {
      throw new Error(`Error en la solicitud a ${url}: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error al realizar la solicitud: ${error.message}`);
    throw error; // Lanza el error para que pueda manejarse donde se llame esta función
  }
};

// Obtener todos los productos
export const obtenerProductos = async () => {
  try {
    const productos = await fetchData(`${API_BASE_URL}/productos`);
    return productos; // Devuelve los productos obtenidos
  } catch (error) {
    console.error("Error al obtener los productos:", error);
    return []; // Retorna un array vacío en caso de error
  }
};

// Obtener un producto por ID
export const obtenerProductoPorId = async (id) => {
  try {
    return await fetchData(`${API_BASE_URL}/producto/${id}`);
  } catch (error) {
    console.error(`Error al obtener el producto con ID ${id}:`, error);
    return null; // Retorna null en caso de error
  }
};

export default {
  obtenerProductos,
  obtenerProductoPorId,
};
