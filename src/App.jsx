import { RouterProvider, createBrowserRouter } from "react-router-dom"
import MainLayout from "./components/MainLayout"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Contacts from "./pages/Contact"
import SingleProducts from "./pages/SingleProducts"
import User from "./pages/User"

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
          path: "users",
          element: <User/>
        },
        {
          path: "products/:id",
          element: <SingleProducts />
        }
        ,
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
