import React from 'react';
import { RiMenu3Fill } from 'react-icons/ri';

import { Container, LogoContainer } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <LogoContainer>
        <p>ZT.</p>
      </LogoContainer>

      <div className="menu">
        <RiMenu3Fill id="menu-icon" size={30} />
      </div>
    </Container>
  );
};

export default Header;
