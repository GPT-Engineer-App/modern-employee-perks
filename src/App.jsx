import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainApp from "./pages/Index.jsx";

function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}

export default App;
