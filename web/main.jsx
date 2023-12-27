import * as React from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import auth from "./requests/auth"
import ping from "./requests/ping"
import Login from "./components/login/login"

import "./main.css"

const root = document.getElementById("root")

const router = createBrowserRouter([
  {
    path: "/",
    element: <p>Playground app</p>,
    loader: async function loader() {
      await ping()
      return null
    },
  },
  {
    path: "/login",
    element: <Login />,
    action: async function action({ request }) {
      const formData = await request.formData()
      await auth({
        username: formData.get("username"),
        password: formData.get("password"),
      })
      return null
    },
  },
])

createRoot(root).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
