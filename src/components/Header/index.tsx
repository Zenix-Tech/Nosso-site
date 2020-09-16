import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineBulb, AiOutlinePhone } from 'react-icons/ai';
import { RiTeamLine } from 'react-icons/ri';
import { Link } from 'gatsby';

import {
  Container,
  LogoContainer,
  Burger,
  RightMenu,
  Menu,
  ContactButton,
} from './styles';

const Header: React.FC = () => {
  const [status, setStatus] = useState('hidden');

  function handleClick() {
    setStatus(status == 'hidden' ? 'show' : 'hidden');
  }

  return (
    <Container>
      <div className="content">
        <LogoContainer>
          <p>ZT.</p>
        </LogoContainer>

        <Menu>
          <Link to="/" className="link">
            Página Inicial
          </Link>
          <Link to="/" className="link">
            Sobre Nós
          </Link>
          <Link to="/" className="link">
            Serviços
          </Link>
        </Menu>

        <Burger className={status} id="burger" onClick={handleClick}>
          <div id="one" />
          <div id="two" />
          <div id="three" />
        </Burger>

        <RightMenu className={status} id="menu-mobile">
          <ul>
            <li>
              <div>
                <AiOutlineHome />
                <p>Página inicial</p>
              </div>
            </li>
            <li>
              <div>
                <RiTeamLine />
                <p>Sobre nós</p>
              </div>
            </li>
            <li>
              <div>
                <AiOutlineBulb />
                <p>Serviços</p>
              </div>
            </li>
            <li>
              <div>
                <AiOutlinePhone />
                <p>Contato</p>
              </div>
            </li>
          </ul>
        </RightMenu>

        <ContactButton>Contato</ContactButton>
      </div>

      <div className="line"></div>
    </Container>
  );
};

export default Header;
