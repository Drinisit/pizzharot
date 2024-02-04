import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import RootLayout from "./pages/RootLayout";

import Home from './pages/Home'
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Promos from "./pages/Promos";



import NotFound from "./pages/NotFound";



const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/products', element: <Products /> },
      { path: '/products/:productId', element: <ProductDetails /> },

      { path: '/promos', element: <Promos /> },
    ]
  },
  
])





function App() {
  return (
    <div>
      <RouterProvider router={router} />

    </div>
  );
}

export default App;
