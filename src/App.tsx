import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { Box } from "@mui/material";

function App() {
  return (
    <Box>
      <Header></Header>
      <Outlet></Outlet>
    </Box>
  );
}

export default App;
