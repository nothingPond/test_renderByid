import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import MenuTest from "./menuId/Menu";
import Form from "./menuPage6/form";

const App = () => {
  return (
    <Router>
      <div>
        <MenuTest />
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/form" element={<Form />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
