import { useEffect, useState } from "react";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Services from "./pages/Services.jsx";
import Pricing from "./pages/Pricing.jsx";
import ProcessPage from "./pages/ProcessPage.jsx";

function getRoute() {
  const hash = window.location.hash || "";

  if (!hash.startsWith("#/")) {
    return "/";
  }

  const route = hash.slice(1).replace(/\/+$/, "") || "/";
  return route;
}

export default function App() {
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const syncRoute = () => setRoute(getRoute());

    window.addEventListener("hashchange", syncRoute);
    window.addEventListener("load", syncRoute);

    return () => {
      window.removeEventListener("hashchange", syncRoute);
      window.removeEventListener("load", syncRoute);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [route]);

  if (route === "/contact") {
    return <Contact />;
  }

  if (route === "/services") {
    return <Services />;
  }

  if (route === "/pricing") {
    return <Pricing />;
  }

  if (route === "/process") {
    return <ProcessPage />;
  }

  return <Home />;
}
