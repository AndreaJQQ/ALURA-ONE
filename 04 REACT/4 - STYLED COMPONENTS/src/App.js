import React, {useState} from "react";

import Header from "./Components/Header";
import Container from "./Components/Container";
import GlobalStyle from "./GlobalStyle";
import { temaClaro, temaOscuro } from "./Components/UI/temas";
import { ThemeProvider } from "styled-components";
import { BtnTema } from "./Components/UI";
import SwitcherTema from "./Components/SwitcherTema";


function App() {
  const [tema, setTema] =useState(true);



  
  const toggleTema = () => {
setTema((tema)=>!tema)
  }
  return (
    <ThemeProvider theme = {tema ? temaClaro :temaOscuro}>
    <GlobalStyle/>
    <BtnTema onClick={toggleTema}>
      <SwitcherTema tema = {tema}/>
    </BtnTema>
          <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;
