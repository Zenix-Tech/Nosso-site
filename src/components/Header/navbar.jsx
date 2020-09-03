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
    display: flex;
    justify-content:center;
    background-color: white;
    border-radius: 0 0 5px 5px;
    color: black;
    width: 4rem;
      height: 80px;
    align-items: center;

    margin-left: 20px;
      
      }
  background-color: var(--color-main); 
  @media(min-width:768px){
    height: 90px;
    padding: 0 50px;
    h1{
      width: 100px;
      height: 100px;
      font-size:50px;
      color: black;
      
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