import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import store from "./Redux/store.js"
import { Provider } from "react-redux"
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';
import ClientPortfolio from './routes/ClientPortfolio.jsx';
import Dashboard from './routes/Dashboard.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:"register",
        element:<Register />
      },
      {
        path:"login",
        element:<Login />
      },
      {
        path:"",
        element:<Home />,
        children:[
          {
            path:"clientportfolio",
            element:<ClientPortfolio />
          },
          {
            path:"dashboard",
            element:<Dashboard />
          },
          {
            path:"",
            element:<Dashboard />
          }
        ]
      }
    ]
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
