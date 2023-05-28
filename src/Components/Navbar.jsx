import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px 0;
`;
const Section = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
`;
const Logo = styled.img`
    width: 8rem;
    height: 8rem;

`;
const NavLinks = styled.ul`
display: flex;
width: 100%;
flex-direction: row;
justify-content: space-evenly;
gap: 5px;
list-style: none;
`;
const Button=styled.button`
    background-color: #d73751;
    color: white;
    padding: 10px 7px;
    outline: none;
    border-radius: 5px;
    cursor: pointer;
`

const Link = styled.li`
cursor: pointer;
font-size: 1.3rem;
`;
const Navbar = () => {
  return (
    <Container>
          <Section>
              <Logo src='./img/logo.png' />
              <NavLinks>
                  <Link>Home</Link>
                  <Link>About</Link>
                  <Link>Ducati Monster</Link>
                  <Link>Cbr 400</Link>
                <Button>Book a Visit</Button>
              </NavLinks>

      </Section>
    </Container>
  )
}

export default Navbar
