import React from 'react';
import styled from 'styled-components';
import { AiFillHome,AiFillContacts } from 'react-icons/ai';
import {MdWork} from 'react-icons/md';
import {TiGroup} from 'react-icons/ti';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content:center;
  flex-flow: row nowrap;
  align-items:center;
  .item-icon{
      display:none;
  }
  a {
    padding: 14px 18px;

      display:block;
      text-decoration:none;
      color: #F2F2F2;
  }

  a:hover{
        color: #6C63FF;
    }
  @media(min-width:768px){

    .btnContact{
      border: 1px solid var(--color-white);
      border-radius: 0.4rem;
      transition: background-color .2s;
    }
  .btnContact:hover{
      background-color:var(--color-white);
      color: var(--color-secondary);
    }
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: var(--color-secondary);
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    transition: transform 0.3s ease-in-out;
    li {
      color: #F2F2F2;
    }
    a{
      color: #F2F2F2;
      width: 180px;
      display:flex;
      align-items:center;
    }
    .item-icon{
        font-size:1.2rem;
        margin-right: 1.2rem;
        display:block;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li><a href=""><AiFillHome className="item-icon"/>Página Inicial</a></li>
      <li><a href=""><TiGroup className="item-icon"/>Sobre nós</a></li>
      <li><a href=""><MdWork className="item-icon"/>Serviços</a></li>
      <li><a href="" className="btnContact"><AiFillContacts className="item-icon"/>Contato</a></li>
    </Ul>
  )
}

export default RightNav;