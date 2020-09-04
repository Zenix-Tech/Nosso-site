import React from 'react';

import { Container,Text } from './styles';

interface ServicesProps{
  color?: string;
  text: string;
  title: string;
  img: string;
  alt:string;
  className?:string;
}

const ServicesItem: React.FC<ServicesProps> = props => {
  return(
        <Container className="container" color={props.color}>
            <img src={props.img}  alt={props.alt}/>
            <Text className="text-content">
              <h1> {props.title} </h1>
              <p> {props.text} </p>
            </Text>
        </Container>  
    );
};

export default ServicesItem;