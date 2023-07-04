import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { Box } from "@mui/material";

function App() {
  return (
    <Box>
      <Header />
      <Outlet />
    </Box>
  );
}

export default App;
