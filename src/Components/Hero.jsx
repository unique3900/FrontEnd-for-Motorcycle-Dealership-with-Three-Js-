import React from 'react'
import Navbar from './Navbar'
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei';

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

`;
const Section = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const LeftDiv = styled.div`
   flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;
const RightDiv = styled.div`
  flex: 2;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;
const Title = styled.h1`
  font-size: 50px;

`;
const Title2 = styled.h3`
  font-size: 25px;
  font-style: italic;

`;
const Img = styled.img`
 width: 800px;
  height: 500px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;
`;


const Button = styled.button`
    background-color: #d73751;
    color: white;
    padding: 10px 7px;
    outline: none;
    border-radius: 5px;
    cursor: pointer;
`;
export const Hero = () => {
  return (
    <Container>
<Navbar/>
      <Section>

        <LeftDiv>
          <Title>Moto Dealers</Title>
          <Title2>Toy for Boy</Title2>
          <Button>Contact us Now</Button>
        </LeftDiv>

        <RightDiv>
          <Canvas>
            <OrbitControls enableZoom={true} />
            <ambientLight intensity={2} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1,100,200]} scale={2.5}>
            <MeshDistortMaterial color={"rebeccapurple"} attach="material" distort={0.3} speed={2}/>
            </Sphere>
          </Canvas>

          <Img src='./img/biker.png'/>
        </RightDiv>
      </Section>
    </Container>
  
  )
}
