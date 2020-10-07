import React from 'react';

import { Container, Text } from './styles';

interface ServicesProps {
  text: string;
  title: string;
  img: string;
  alt: string;
  className?: string;
}

const SecondServicesCard: React.FC<ServicesProps> = props => {
  return (
    <Container className="container">
      <div className="ilustration">
        <img src={props.img} alt={props.alt} />
      </div>
      <Text className="text-content">
        <h1> {props.title} </h1>
        <p> {props.text} </p>
      </Text>
    </Container>
  );
};

export default SecondServicesCard;
