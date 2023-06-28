import Header from "./components/Header";
import { Container } from "@mui/material";

function App() {
  const sections = [
    { title: "Gallery", url: "#" },
    { title: "Statistic", url: "#" },
    { title: "Profile", url: "#" },
  ];

  return (
    <div>
      <Container maxWidth="xl">
        <Header title="Blog" sections={sections}></Header>
      </Container>
    </div>
  );
}

export default App;
