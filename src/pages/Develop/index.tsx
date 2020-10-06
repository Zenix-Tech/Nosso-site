import React from 'react';

import { Container } from './styles';

import GlobalStyles from '../../styles/GlobalStyles';

import Header02 from '../../components/Header02/index';
import Services from '../../components/ServicesItem';

import siteDev from '../../assets/sitesdevop.png';
import appsDev from '../../assets/appsdevop.png';
import systemDev from '../../assets/systemdevop.png';

function Develop() {
  return (
    <>
      <GlobalStyles />
      <Header02 />
      <Container>
        <Services
          img={siteDev}
          alt="Desenvolvimento de sites"
          title="Desenvolvimento de sites"
          text="Crie seu site conosco e transforme-se em uma marca digital. Desenvolvemos o seu site no modelo de seu negócio, seja ele pequeno, médio ou de grande porte. Os sites são desenvolvidos nos formatos de WordPress e ...... Contamos com uma equipe multidisciplinar que busca o melhor conteúdo e a mais alta performance para seu site e sua marca."
        />
        <Services
          color="#F2F2F2"
          img={appsDev}
          alt="Desenvolvimento de aplicativos"
          title="Desenvolvimento de APP's"
          text="Desenvolva um aplicativo que atenda as necessidades de sua empresa sendo ela pequena ou grande. Economize tempo e dinheiro automatizando alguns passos de seu serviço. Converse com seu cliente de forma mais próxima e fique por dentro do o que ele procura."
        />
        <Services
          img={systemDev}
          alt="Desenvolvimento de sistemas"
          title="Desenvolvimento de sistemas"
          text="No mundo atual o imediatismo pode te fazer ganhar clientes. Por meio da computacao podemos desenvolver sistemas automatizados que lhe darao praticidade, velocidade e irao manter um padrao de qualidade, uma resposta rapida e de qualidade ao cliente te dara uma vantagem em comparacao a outras empresas.
            Desenvolvemos sistemas desde automatizacao ate inteligencia artificial. Um bom exemplo eh: um robo para passar nos corredores de um supermercado "
        />
      </Container>
    </>
  );
}

export default Develop;
