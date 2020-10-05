import React from 'react';
import Header02 from '../../components/Header02';

import { Container, HeroHeader } from './styles';

import GlobalStyle from '../../styles/GlobalStyles';

import heroIlustration from '../../assets/HeroImage.svg';
import HeroGeometric from '../../assets/hero-geometric.svg';

const Home02: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header02 />
        <HeroHeader>
          <img src={HeroGeometric} id="geometric" alt="" />
          <div className="text">
            <h1>
              <strong>Você</strong> em outro nível
            </h1>
            <p>
              A Zênix oferece serviços digitais de exelente qualidade para
              ajudar você alavancar sua marca.
            </p>
            <div className="hero-buttons">
              <button className="btn-active">Solicitar orçamento</button>
              <button className="btn-normal">Ver serviços</button>
            </div>
          </div>
          <div className="ilustration">
            <img src={heroIlustration} id="ilustration-img" alt="" />
          </div>
        </HeroHeader>
      </Container>
    </>
  );
};

export default Home02;
