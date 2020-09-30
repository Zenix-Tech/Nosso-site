import React from 'react';

import { Container } from './styles';
import Header from '../../components/Header';
import ServicesItem from '../../components/ServicesItem';

import mktDigital from '../../assets/mktdigital.png';
import visualId from '../../assets/visualid.png';
import uxuiDesign from '../../assets/uxuidesign.png';

function Marketing() {
  return (
    <>
      <Header />
      <Container>
        <ServicesItem
          img={mktDigital}
          alt="Marketing digital"
          title="Marketing digital"
          text="Sua empresa tem dificuldade em conseguir novos clientes? Voce nao sabe se apresentar pelas redes sociais? A Zenix Tech pode te ajudar! Montando uma estrategia de marketing digital, vamos mostrar as vantagens de contratarem os seus servicos, apresentar sua empresa principalmente no nicho que voce deseja atingir. Publicidades direcionadas e especificas para o seu publico alvo."
        />
        <ServicesItem
          img={visualId}
          alt="Identidade visual"
          title="Identidade visual"
          text="A primeira impressao eh a que fica, a forma como a sua empresa se apresenta eh muito importante para conquistar o cliente a ponto de fazer ele se lembrar de voce na hora de recomendar para outros. Ser visto mesmo sem ter sua logo estampada, ter uma paleta de cores que combine com a sua logo, deixar sua marca na memoria de quem ve. Materiais personalizados e cartao de visita. A filosofia por tras de sua identidade visual eh de suma importancia, dar significado ao que voce apresenta ... A Zenix faz uma identidade visual completa da sua empresa"
          color="#F2F2F2"
        />
        <ServicesItem
          img={uxuiDesign}
          alt="UX/ UI Design"
          title="UX/ UI Design"
          text="Voce pode estar planejando os proximos passos do seu negocio e quer ter uma ideia de como ficaria um site ou um aplicativo e para isso podemos fazer apenas um design com um orcamento por layout."
        />
      </Container>
    </>
  );
}

export default Marketing;
