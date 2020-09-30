import React, { useEffect } from 'react';
import { FiSend } from 'react-icons/fi';
import { FaPhone } from 'react-icons/fa';
import { Link } from 'gatsby';

import {
  Container,
  Title,
  PageContent,
  Carousel,
  CardsContainer,
  ContactContainer,
} from './styles';

import GlobalStyle from '../../styles/GlobalStyles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import Hero from '../../assets/HeroImage.svg';
import Development from '../../assets/develop.svg';
import SEO from '../../assets/SEO.svg';
import Marketing from '../../assets/marketing.svg';
import Rank from '../../assets/Rank.svg';
import Rocket from '../../assets/rocket.svg';
import Partner from '../../assets/partner.svg';
import ArrowDown from '../../assets/ArrowDown.svg';

function Home() {
  useEffect(() => {
    const carousel = document.getElementById('carousel');
    carousel.addEventListener('scroll', handleScroll);
  }, []);

  function handleScroll(e) {
    console.log(e.target.scrollLeft);
  }

  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        <div className="text">
          <Title>Você em outro nivel.</Title>
          <p>
            Oferecemos serviços digitais de excelente qualidade para ajudar você
            a alavancar sua empresa.
          </p>
        </div>
        <div className="hero-image">
          <img src={Hero} />
        </div>

        <div className="scroll-down">
          <button onClick={() => window.scrollTo(0, window.innerHeight)}>
            <img src={ArrowDown} alt="arrow down" />
          </button>
        </div>
      </Container>
      <PageContent>
        <div className="text">
          <p className="title">CLIQUE PARA SABER MAIS.</p>
          <p className="commentary">Arraste para o lado.</p>
        </div>
        <Carousel id="carousel">
          <Link to="Develop">
            <div className="service">
              <div className="content">
                <div className="image">
                  <img src={Development} alt="" />
                </div>
                <h3>Development</h3>
                <p>
                  Somos especialistas em desenvolvimento de sites e aplicativos.
                </p>
              </div>
            </div>
          </Link>
          <div className="service">
            <div className="content">
              <div className="image">
                <img src={SEO} alt="" />
              </div>
              <h3>SEO</h3>
              <p>
                Com a combinação de um belo design e otima performance,
                deixaremos seu site dentre os primeiros nas pesquisas do google.
              </p>
            </div>
          </div>
          <div className="service">
            <div className="content">
              <div className="image">
                <img src={Marketing} alt="" />
              </div>
              <div className="text">
                <h3>Marketing</h3>
                <p>
                  Somos especialistas em desenvolvimento de sites e aplicativos.
                </p>
              </div>
            </div>
          </div>
        </Carousel>
        <h3 className="secondary-title">O que podemos fazer por você?</h3>
        <CardsContainer>
          <div className="card">
            <div className="up">
              <div className="image">
                <img src={Rank} alt="Rank" />
              </div>
            </div>
            <div className="down">
              <div className="text">
                <h3>Ranqueando seu site</h3>
                <p>
                  Com a combinação de um belo design e otima performance,
                  deixaremos seu site dentre os primeiros nas pesquisas do
                  google.
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="up">
              <div className="image">
                <img src={Rocket} alt="Rank" />
              </div>
            </div>
            <div className="down">
              <div className="text">
                <h3>Divulgando sua marca</h3>
                <p>
                  Com métodos de divulgação realmente efetivos, estamos prontos
                  para divulgar sua empresa e atigir seu público alvo.
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="up">
              <div className="image">
                <img src={Partner} alt="Rank" />
              </div>
            </div>
            <div className="down">
              <div className="text">
                <h3>Valorizando seu trabalho</h3>
                <p>
                  Mostre para seus clientes que sua marca é única investindo em
                  seu visual e conteúdos digitais, passando credibilidade e
                  confiança.
                </p>
              </div>
            </div>
          </div>
        </CardsContainer>

        <ContactContainer id="contact">
          <h3 className="secondary-title">
            Entre em contato conosco e solicite um orçamento.
          </h3>

          <form>
            <div className="inputs">
              <input type="text" placeholder="Nome" className="input" />
              <input type="text" placeholder="Assunto" className="input" />
              <input type="text" placeholder="E-mail" className="input" />
              <textarea
                name="Message"
                cols="30"
                rows="10"
                className="input"
                placeholder="Mensagem"
              />

              <button type="submit">
                <p>Enviar</p>
                <FiSend id="icon" />
              </button>
            </div>
          </form>

          <h3 className="secondary-title">
            Se preferir, ligue pra gente para tirar dúvidas.
          </h3>

          <div className="telephone">
            <FaPhone size={'1.2rem'} />
            <p>(51) 996713794</p>
          </div>
        </ContactContainer>
      </PageContent>
      <Footer />
    </>
  );
}

export default Home;
