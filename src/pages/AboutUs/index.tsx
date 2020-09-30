import React from 'react';

import { Container, Text, Content } from './styles';

import GlobalStyles from '../../styles/GlobalStyles';
import Header from '../../components/Header';

import foto from '../../assets/teste.jpg';
import user from '../../assets/user.jpg';
import user2 from '../../assets/user2.jpg';
import user3 from '../../assets/user3.jpg';

import TeamPhoto from '../../components/TeamPhoto';
import Footer from '../../components/Footer';

function AboutUs() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Container>
        <img src={foto} alt="" />
        <Text>
          <h1>Sobre nós</h1>
          <p>
            A <strong>Zenix Tech</strong> é uma startup sediada em Porto Alegre
            focada em desenvolvimento de sites, criação de aplicativos e
            marketing digital. Nosso propósito é criar soluções modernas e de
            alta performance para o seu negócio com o objetivo de alavancar a
            visibilidade da sua marca. Contamos com uma equipe de pessoas
            criativas e inovadoras que compartilham da ideia de criar
            experiências e colocar sua marca em outro nível.
          </p>
        </Text>
      </Container>
      <Content>
        <div className="about">
          <h1>O que fazemos ?</h1>
          <p>
            Desenvolvemos desde sites simples aos mais complexos, com design
            inovador e atrativo, compativel com desktop, tablets e celulares.
            Aplicativos mobile para dar praticidade e relevancia ao seu negocio.
            Fazemos marketing digital focado em potenciais clientes a partir de
            um estudo com inteligencia artificial aumentando a visibilidade da
            sua empresa no nicho certo.
          </p>
        </div>

        <div className="team">
          <TeamPhoto
            src={user}
            name="Eduardo Moresco"
            function="Desenvolvedor"
          />
          <TeamPhoto src={user2} name="Vitor Cunha" function="Desenvolvedor" />
          <TeamPhoto src={user3} name="Henrique Bighouse" function="Nao sei" />
        </div>
      </Content>
      <Footer />
    </>
  );
}

export default AboutUs;
