import React from 'react';

import { Container } from './styles';

import Header from '../../../components/Header';
import ServicesItem from '../../../components/ServicesItem';

import optimization from '../../../assets/optimization.png';
import googleSearch from '../../../assets/googlesearch.png';


const Seo: React.FC = () => {
  return(
    <>
      <Header/>
      <Container>
        <ServicesItem 
        img={optimization}
        alt="Otimização de site"
        title="Otimização de site"
        text="A maioria das pessoas quando pensam em internet a primeira coisa que vem na cabeca eh o google, o maior site de pesquisa, ele apresenta sempre as melhores respostas a sua pesquisa, estar nas primeiras colocacoes numa pesquisa sobre trabalho que sua empresa exerce, te dara uma grande visibilidade."
        />
         <ServicesItem 
        img={googleSearch}
        alt="Posicionamento no google"
        title="Posicionamento no google"
        text="Com um conjunto de técnicas de otimização para sites. Essas otimizações visam alcançar a primeira colocacao na pagina de pesquisa do google ao procurar assuntos relacionados ao seu site. Quanto mais perto da primeira posicao, mais as pessoas confiam no site, aumentando o numero de visualizacoes que seu site tera."
        color="#F2F2F2"
        />
      </Container>
    </>
  );
}

export default Seo;