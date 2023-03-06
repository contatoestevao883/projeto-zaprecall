import GlobalStyle from "./styles/GlobalStyle";
import styled from "styled-components";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Footer from "./components/Footer";


function App() {
  return (
    <Container>
      <GlobalStyle />
       <Header/>
       <Cards />
       <Footer />
    </Container>
  );
}

export default App;

const Container = styled.div`
    background-color: #FB6B6B;
`