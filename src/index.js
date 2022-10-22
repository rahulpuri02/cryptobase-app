import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import CoinPage from './pages/CoinPage';
import Trending from './pages/Trending';
import SavedCoin from './pages/SavedCoin';

//import Root, { rootLoader } from "./routes/root";
//import Team, { teamLoader } from "./routes/team";

const router = createBrowserRouter([
  {
   path: '/',
   element: <Home />,
   children: [
    {
      path: "/",
      element: <CoinPage/>,
    },
    {
      path: "/trending",
      element: <Trending/>,
    },
    {
      path: "/saved",
      element: <SavedCoin/>,
    },
   ]

  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
