import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home'
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import RootLayout from "./pages/RootLayout";


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/products', element: <Products /> },
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
