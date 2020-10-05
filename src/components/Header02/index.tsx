import React from 'react';

import { Container } from './styles';
import { Link } from 'gatsby';

const Header02: React.FC = () => {
  return (
    <Container>
      <nav>
        <h1>Logo zenix</h1>
        <div className="burger">
          <div className="linha"></div>
          <div className="linha"></div>
          <div className="linha"></div>
        </div>
        <div className="menu">
          <Link to="/" className="link">
            Página inicial
          </Link>
          <Link to="/" className="link">
            Sobre nós
          </Link>
          <Link to="/" className="link">
            Serviços
          </Link>
          <Link to="/" className="link btn-contact">
            Contato
          </Link>
        </div>
      </nav>
    </Container>
  );
};

export default Header02;
