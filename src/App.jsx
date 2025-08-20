import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/UI/Layout.jsx";
import { Home } from "./Pages/Home/Home.jsx";
import About from "./Pages/About/aboutpage.jsx";
// import Services from "./pages/services/Services";
import Contact from  "./Pages/Contact/contact.jsx";
import Portfolio from "./Pages/portfolio.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      // { path: "services", element: <Services /> },
        { path: "portfolio", element: <Portfolio /> },
      { path: "contact", element: <Contact /> },
      // { path: "*", element: <div>Page not found</div> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

