import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./pages/Index.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
