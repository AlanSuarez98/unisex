import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import AllProduct from "./components/allProduct/AllProduct";
import Contact from "./components/contact/Contact";
import DetailProduct from "./components/detailProduct/DetailProduct";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";

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
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
