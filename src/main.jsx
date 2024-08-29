import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import LoginPage from './Pages/login'
import RegisterPage from './Pages/register.jsx'
import App from './App'
import ErrorPage from './Pages/404.jsx'
import ProductsPage from './Pages/products.jsx'
import ProfilePage from './Pages/profile.jsx'
import DetailProductPage from './Pages/detailProducts.jsx'

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
  {
    path : "/profile",
    element : <ProfilePage/>
  },
  {
    path : "/products/:id",
    element : <DetailProductPage/>
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
