import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import LoginPage from './Pages/login'
import RegisterPage from './Pages/register.jsx'
import App from './App'
import ErrorPage from './Pages/404.jsx'
import ProductsPage from './Pages/products.jsx'

const router = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    errorElement: <ErrorPage/>
  },
  {
    path : "/login",
    element : <LoginPage/>
  },
  {
    path : "/register",
    element : <RegisterPage/>
  },
  {
    path : "/products",
    element : <ProductsPage/>
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
