import React from 'react';

import { Container } from './styles';

interface Member {
  src: string;
  name: string;
  function: string;
}

const TeamPhoto: React.FC<Member> = props => {
  return (
    <Container>
      <img src={props.src} alt="" />
      <span>
        <h2>{props.name}</h2>
        <h3>{props.function}</h3>
      </span>
    </Container>
  );
};

export default TeamPhoto;
