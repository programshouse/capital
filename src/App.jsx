import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/UI/Layout.jsx";
import { Home } from "./Pages/Home/Home.jsx";
// import About from "./pages/about/About";
// import Services from "./pages/services/Services";
// import Contact from "./pages/contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      // { path: "about", element: <About /> },
      // { path: "services", element: <Services /> },
      // { path: "contact", element: <Contact /> },
      // { path: "*", element: <div>Page not found</div> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

