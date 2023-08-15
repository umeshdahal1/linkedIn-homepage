import "./App.css";
// import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  // Link,
} from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import SignIn from "./components/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signin",
    element:   <SignIn />,
  },
]);

function App() {
  return (
    <div>
    
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
