import React from 'react'
import styled from 'styled-components'
import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { DucatiMonster } from './DucatiMonster';

const Container = styled.div`
 height: 100%;
scroll-snap-align: center;
width: 1400px;
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;


`;
const Section = styled.div`
height: 20rem;
width: 50rem;
box-shadow: 0px 0px 20px 0px rgba(104, 156, 245, 0.9);
outline: 1px solid white;

`;
const SectionRigt = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
    text-align: center;
    padding: 10px;
    gap: 10px;
`;
const Title = styled.h1`
  font-size: 50px;

`;
const Title2 = styled.h3`
  font-size: 25px;
  font-style: italic;

`;
const Button = styled.button`
    background-color: #d73751;
    color: white;
    padding: 10px 7px;
    outline: none;
    border-radius: 5px;
    cursor: pointer;
`;

export const Moto2 = () => {
  return (
    <Container>
    <Section>
      <Canvas>
        <OrbitControls enableZoom={true} autoRotate={true} />
        <Stage intensity={0.5} scale={4}>
          <DucatiMonster/>
        </Stage>
      </Canvas>
      </Section>
      
      <SectionRigt>
        <Title>Ducati Monster 796</Title>
        <Title2>Naked Monster with Itallian Beauty</Title2>
        <Button>Book Now</Button>
      </SectionRigt>
    </Container>
  )
}
