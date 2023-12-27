import * as React from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import "./main.css"

const root = document.getElementById("root")

const router = createBrowserRouter([
  {
    path: "/",
    element: <p>Playground app</p>,
    loader: async function loader() {
      const res = await fetch("/api/ping")
      if (res.ok) {
        const content = await res.text()
        console.log("Response:", content)
      }
      return null
    },
  },
])

createRoot(root).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
