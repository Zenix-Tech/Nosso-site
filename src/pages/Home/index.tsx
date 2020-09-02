import React, { useEffect } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';

import {
  Container,
  Title,
  HeroImage,
  PageContent,
  Carousel,
  CardsContainer,
  ContactContainer,
} from './styles';
import '../styles/GlobalStyles.css';

import Header from '../../components/Header';

import Hero from '../../assets/HeroImage.png';
import Development from '../../assets/develop.png';
import Rank from '../../assets/Rank.png';

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
          <HeroImage src={Hero} />
        </div>

        <div className="scroll-down">
          <RiArrowDownSLine size={70} />
        </div>
      </Container>
      <PageContent>
        <div className="text">
          <p className="title">CLIQUE PARA SABER MAIS.</p>
          <p>Arraste para o lado.</p>
        </div>
        <Carousel id="carousel">
          <div className="service">
            <div className="image">
              <img src={Development} alt="" />
            </div>
            <h3>Development</h3>
            <p>
              Somos especialistas em desenvolvimento de sites e aplicativos.
            </p>
          </div>
          <div className="service">
            <div className="image">
              <img src={Development} alt="" />
            </div>
            <h3>Development</h3>
            <p>
              Somos especialistas em desenvolvimento de sites e aplicativos.
            </p>
          </div>
          <div className="service">
            <div className="image">
              <img src={Development} alt="" />
            </div>
            <div className="text">
              <h3>Development</h3>
              <p>
                Somos especialistas em desenvolvimento de sites e aplicativos.
              </p>
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
        </CardsContainer>
        <ContactContainer>
          <h3 className="secondary-title">
            Entre em contato conosco e solicite um orçamento.
          </h3>
        </ContactContainer>
      </PageContent>
    </>
  );
}

export default Home;
