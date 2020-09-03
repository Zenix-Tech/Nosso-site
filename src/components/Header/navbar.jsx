import React from 'react';
import styled from 'styled-components';
import Burger from './burger';


const Nav = styled.nav`
  width: 100%;
  height: 60px;
  padding: 40px 50px;
  display: flex;
  justify-content: space-between;
  align-items:center;
  h1{
      font-size:50px;
      color: var(--color-white);
      
      }
  background-color: var(--color-main); 
  @media(min-width:768px){
    height: 90px;
    padding: 50px;
    h1{
      font-size:50px;
      color: var(--color-white);
      
      }
    
}
  
`

const Header = () => {
  return (
    <Nav>
      <div className="logo">
        <h1>ZT.</h1>
      </div>
      <Burger />
    </Nav>
  )
}

export default Header