import React from 'react'
import styled from 'styled-components'
import './App.css'
import Navbar from './Components/Navbar';
import { About } from './Components/About';
import { Moto1 } from './Components/Moto1';
import { Hero } from './Components/Hero';
import { Moto2 } from './Components/Moto2';
const Container = styled.div`
height: 100vh;
scroll-snap-type: y mandatory;
scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: black;
  &::-webkit-scrollbar{
    display: none;
  }
/* background: url("./img/bg.jpeg"); */

`;
const App = () => {
  return (
    <Container>
      <Hero/>
      <Moto1 />
      <Moto2/>
    </Container>
  )
}

export default App
