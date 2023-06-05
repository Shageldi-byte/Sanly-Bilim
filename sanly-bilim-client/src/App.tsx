import "./App.css";
// import Home from "./page/Home/Home";
import MainLayout from "./page/MainLayout";
import Store from "./helper/store.helper";
import { ThemeProvider } from "@mui/material";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DefaultLocale, Locale } from "./core/constant";
import { theme } from "./helper/theme";
// import About from "./page/About/About";
import Advantages from "./page/Advantages/Advantages";
import About from "./page/About/About";
// import Home from "./page/Home/Home";

function App() {
  const [language, setLanguage] = useState<Locale>(DefaultLocale);
  return (
    <Store.Provider
      value={{
        language: language,
        setLanguage: setLanguage,
      }}
    >
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<About />} />
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </Store.Provider>
  );
}

export default App;
