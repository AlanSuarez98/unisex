import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import AllProduct from "./components/allProduct/AllProduct";
import Contact from "./components/contact/Contact";
import DetailProduct from "./components/detailProduct/DetailProduct";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/:producto",
      element: <AllProduct />,
    },
    {
      path: "/contacto",
      element: <Contact />,
    },
    {
      path: "/:producto/:id",
      element: <DetailProduct />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
