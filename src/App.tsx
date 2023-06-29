import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import { Container } from "@mui/material";

function App() {
  const sections = [
    { title: "Gallery", url: "/" },
    { title: "Statistic", url: "/statistic" },
    { title: "Profile", url: "/profile" },
  ];

  return (
    <div>
      <BrowserRouter>
        <Header title="Blog" sections={sections}></Header>
      </BrowserRouter>
    </div>
  );
}

export default App;
