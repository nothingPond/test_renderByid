import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import MenuTest from "./menuId/Menu";
import Form from "./menuPage6/form";
import { Box, Grid, Grid2 } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import Portfolio from "./components/Portfolio";

const App = () => {
  return (
    <Router>
      <div>
        <MenuTest />
        <Routes>
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route
            path="/Home"
            element={
              <Grid2 container sx={{overflow: "hidden"}}>
                <Home />
              </Grid2>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/Blog" element={<Form />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
