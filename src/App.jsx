import { RouterProvider, createBrowserRouter } from "react-router-dom"
import MainLayout from "./components/MainLayout"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Contacts from "./pages/Contact"

export default function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "products",
          element: <Products />
        },
        {
          path: "contact",
          element: <Contacts />
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}
