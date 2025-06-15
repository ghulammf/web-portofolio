import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Portfolio from "./pages/Index";
import AppProvider from "./context/AppContext";

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
