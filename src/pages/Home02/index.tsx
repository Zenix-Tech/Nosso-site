import React from 'react';
import Header02 from '../../components/Header02';

import { Container, HeroHeader, CardContainer } from './styles';

import GlobalStyle from '../../styles/GlobalStyles';

import heroIlustration from '../../assets/HeroImage.svg';
import HeroGeometric from '../../assets/hero-geometric.svg';
import CardServices from '../../components/ItemServices';

import develop from '../../assets/develop.svg';
import seoIlustration from '../../assets/SEO.svg';
import marketing from '../../assets/marketing.svg';

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
        <CardContainer>
          <CardServices
            text="Desenvolvemos desde sites e aplicativos até sistemas personalizados para você alavancar sua marca e atingir todos os seus clientes."
            title="Desenvolvimento"
            img={develop}
            alt="Desenvolvimento ilustração"
          ></CardServices>
          <CardServices
            text="Com a combinação de um belo design e otima performance, deixaremos seu site dentre os primeiros nas pesquisas do google."
            title="SEO"
            img={seoIlustration}
            alt="SEO ilustração"
          ></CardServices>
          <CardServices
            text="Montando uma estrategia de marketing digital, vamos mostrar as vantagens de contratarem os seus servicos, apresentar sua empresa principalmente no nicho que voce deseja atingir."
            title="Marketing"
            img={marketing}
            alt="Marketing ilustração"
          ></CardServices>
        </CardContainer>
      </Container>
    </>
  );
};

export default Home02;
