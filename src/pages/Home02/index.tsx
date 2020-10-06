import React from 'react';
import Header02 from '../../components/Header02';

import { Container, HeroHeader, CardContainer, Contact } from './styles';

import { MdPlace, MdPhone, MdMail } from 'react-icons/md';

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
        <Contact>
          <h1>Contato</h1>
          <p>Entre em contato conosco e solicite um orçamento.</p>
          <div className="contact-infos">
            <div className="info-item">
              <MdPlace className="item-icon" />
              <h2>Rua Engenheiro Tito Marquês 380</h2>
            </div>
            <div className="info-item">
              <MdPhone className="item-icon" />
              <h2>(51) 91234-5678</h2>
            </div>
            <div className="info-item">
              <MdMail className="item-icon" />
              <h2>comercial@zenixtech.com</h2>
            </div>
          </div>
          <form action="">
            <h3>
              Formulário para
              <br /> contato
            </h3>
            <div className="input-group">
              <div className="input-item">
                <label htmlFor="nome">Nome</label>
                <input type="text" placeholder="Informe seu nome" />
              </div>
              <div className="input-item">
                <label htmlFor="nome">Assunto</label>
                <input type="text" placeholder="Ex: orçamento aplicativo" />
              </div>
            </div>
            <div className="input-item">
              <label htmlFor="nome">E-mail</label>
              <input type="mail" placeholder="Informe seu e-mail" />
            </div>
            <div className="input-item">
              <label htmlFor="nome">Mensagem</label>
              <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                placeholder="Escreva sua mensagem"
              ></textarea>
            </div>
            <button type="submit">Enviar mensagem</button>
          </form>
        </Contact>
      </Container>
    </>
  );
};

export default Home02;
