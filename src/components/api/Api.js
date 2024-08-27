const API_BASE_URL = "http://localhost:5000"; // Asegúrate de que el puerto coincida con el de tu backend

// Obtener todos los productos
export const obtenerProductos = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/productos`);
    if (!response.ok) {
      throw new Error("Error al obtener los productos");
    }
    const productos = await response.json();
    return productos;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};

// Obtener un producto por ID
export const obtenerProductoPorId = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/producto/${id}`);
    if (!response.ok) {
      throw new Error("Error al obtener el producto");
    }
    const producto = await response.json();
    return producto;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};
