import {useState} from "react-redux";
import styled from "styled-components";

const Button = styled.button `
width: 100px;
height: 40px;
color: white;
`;

const ButtonThemeDark = styled(Button) `
background-color: ${(props) => (props.dark ? "gray" : "black")}`;


function App() {
  
  return (
    <>
      <header>
        <h1>Overreacted</h1>
        <ButtonDarkMode onClick= {() => setDark()}DarkMode></ButtonDarkMode>
      </header>

    </>
  );
}

export default App;
