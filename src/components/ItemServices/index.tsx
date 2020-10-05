import React from 'react';

import { Container, Text } from './styles';

interface ItemServiceProps {
  color?: string;
  text: string;
  title: string;
  img: string;
  alt: string;
  className?: string;
}

const CardServices: React.FC<ItemServiceProps> = props => {
  return (
    <Container className="container" color={props.color}>
      <img src={props.img} alt={props.alt} />
      <Text className="text-content">
        <h1> {props.title} </h1>
        <p> {props.text} </p>
      </Text>
    </Container>
  );
};

export default CardServices;
