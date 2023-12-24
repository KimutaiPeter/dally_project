import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
//*******Pages****** */
import Splash from './pages/splash/splash.jsx';
import Index from './pages/index/index.jsx';
import Checkout from './pages/checkout/checkout.jsx';
import Cart from './pages/cart/cart.jsx';
import Register from './pages/register/register.jsx';
import Product_details from './pages/product_details/product_details.jsx';


const router = createBrowserRouter([
  {
    path:'/',
    element: <Index/>,
  },
  {
    path:'/checkout',
    element: <Checkout/>,
  },
  {
    path:'/cart',
    element: <Cart/>,
  },
  {
    path:'/register',
    element: <Register/>,
  },
  {
    path:'/product',
    element: <Product_details/>,
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
