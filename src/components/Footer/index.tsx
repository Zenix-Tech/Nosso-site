import React from 'react';
import {
  FaInstagram,
  FaWhatsapp,
  FaFacebookF,
  FaPhoneAlt,
} from 'react-icons/fa';
import { GoMailRead } from 'react-icons/go';
import { FiMapPin } from 'react-icons/fi';
import { RiArrowUpSLine } from 'react-icons/ri';

import { Container, Social, Button } from './styles';

const Footer: React.FC = () => {
  function handleClick() {
    window.scroll(0, 0);
  }

  return (
    <Container>
      <div className="copyright"></div>

      <Social>
        <div>
          <a href="https://www.instagram.com/zenixtech/" target="_blank">
            <FaInstagram size="50%" />
          </a>
          <a href="https://web.whatsapp.com/send?phone=5551996713794&text=Olá, por favor, identifique-se!%0D%0ANome:%0D%0AE-mail:%0D%0AFale mais sobre as informações desejadas e/ou duvidas:%0D%0">
            <FaWhatsapp size="50%" />
          </a>
          <a href="">
            <FaFacebookF size="50%" />
          </a>
        </div>

        <div>
          <a href="mailto:contatozenixtech@gmail.com">
            <GoMailRead size="50%" />
          </a>
          <a href="">
            <FaPhoneAlt size="50%" />
          </a>
          <a href="">
            <FiMapPin size="50%" />
          </a>
        </div>
      </Social>

      <Button onClick={handleClick}>
        <p>Voltar ao topo</p>
        <RiArrowUpSLine id="arrow" size="1.5rem" />
      </Button>
    </Container>
  );
};

export default Footer;
