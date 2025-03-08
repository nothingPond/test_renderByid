
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import MenuTest from "./menuId/Menu";


const App = () => {
  return (
    <Router>
      <div>
        <MenuTest />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/about" element={<About />} />
       
        </Routes>
      </div>
    </Router>
  );
};

export default App;
