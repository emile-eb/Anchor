import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Services from "./pages/Services.jsx";
import Pricing from "./pages/Pricing.jsx";
import ProcessPage from "./pages/ProcessPage.jsx";

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";

  if (path === "/contact") {
    return <Contact />;
  }

  if (path === "/services") {
    return <Services />;
  }

  if (path === "/pricing") {
    return <Pricing />;
  }

  if (path === "/process") {
    return <ProcessPage />;
  }

  return <Home />;
}
