import { useContext, useEffect, useState } from 'react';

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Layout from './layouts/Layout';
import Landing from './pages/Landing';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Article from './pages/Article';
import SingleArticle from './components/SingleArticle';





function App() {

 

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Landing/>,
        },
        {
          path: "/projects",
          element: <Projects/>,
        },
        {
          path: "/contact",
          element: <Contact/>,
        },
        {
          path: "/articles",
          element: <Article/>,
        },
        {
          path: "/article/:id/:title",
          element: <SingleArticle/>,
        },
       
      ]
    },
  ]);

  return (
      <RouterProvider router={router} />
  )
}

export default App;
