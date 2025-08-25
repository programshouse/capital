// App.jsx
import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/UI/Layout.jsx";
import { Home } from "./Pages/Home/Home.jsx";
import About from "./Pages/About/aboutpage.jsx";
import Contact from "./Pages/Contact/contact.jsx";
import Portfolio from "./Pages/portfolio.jsx";
import { useTranslation } from "react-i18next";
import i18next from "i18next";      // <— use the initialized instance
import "./i18n";                     // <— ensure init runs

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

export default function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const lng = i18next.language || i18n.resolvedLanguage || "en";
    const getDir =
      i18next.dir?.bind(i18next) ||
      ((l) => (["ar", "he", "fa", "ur"].some((c) => l?.startsWith(c)) ? "rtl" : "ltr"));

    const dir = getDir(lng);
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", lng);
  }, [i18n.language]);

  return <RouterProvider router={router} />;
}



