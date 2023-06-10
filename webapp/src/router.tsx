import { Result } from 'antd';
import { Link } from 'react-router-dom';
import { createBrowserRouter } from "react-router-dom";

import { Layout } from "./pages/Layout";

import { About } from "./pages/About";
import { NotFound } from "./pages/NotFound";
import { ViewVideoPage } from "./pages/ViewVideo";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "about/:lang?",
        element: <About />,
      },
      {
        path: "view/:videoId",
        element: <ViewVideoPage />,
      },
      {
        path: '*',
        element: <NotFound />,
      }
    ]
  }
]);
