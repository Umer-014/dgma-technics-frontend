import Router from "./routes/Router";
import { useEffect, useState } from "react";
import Loader from "./components/Loader/Loader";

import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return <Router />;
}

export default App;
