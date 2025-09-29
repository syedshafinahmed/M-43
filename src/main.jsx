import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Route from './Components/Route/Route.jsx';
import Home from './Components/Home/Home.jsx';
import Mobiles from './Components/Mobiles/Mobiles.jsx';
import Laptops from './Components/Laptops/Laptops.jsx';
import Users from './Components/Users/Users.jsx';
import Users2 from './Components/Users2/Users2.jsx';


const usersPromise = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())

const router = createBrowserRouter([
  {
    path: "/",
    Component: Route,
    children: [
      { index: true, Component: Home },
      { path: "mobiles", Component: Mobiles },
      { path: "laptops", Component: Laptops },
      {
        path: "users2", element: <Suspense fallback={<span>loading.....</span>}>
          <Users2 usersPromise={usersPromise}></Users2>
        </Suspense>
      },
      {
        path: "users",
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Users
      }
    ]
  },
  {
    path: "about",
    element: <div>About me</div>
  },
  {
    path: "blogs",
    element: <div>All my blogs are here</div>
  },
  {
    path: "app",
    Component: App
  },
  {
    path: "/app2",
    element: <App></App>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
