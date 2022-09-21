import React, { useState, useEffect } from 'react';
import { gsap } from "gsap";
import reactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import styled from 'styled-components'
import Goku from './Goku.jsx';
import SlideButton from './SlideButton.jsx';
import Antman from './Antman.jsx';
import Welcome from './Welcome.jsx';
import Website from './Glow.jsx';
const root = createRoot(document.getElementById("root"));

const Container = styled.div`
  display: flex;
  margin: 0 15% 0 15%;
  flex-direction: column;
`
const Title = styled.h1`
  color: white;
  font-size: 100px;
`

// Huzzah for jsx!
const App = () => {
  return (
    <Container>
      <Title>GSAP Animations</Title>
      <Welcome/>
      <SlideButton/>
      <Antman/>
      <Goku />
      <Website/>
    </Container>
  )
}

root.render(<App />);