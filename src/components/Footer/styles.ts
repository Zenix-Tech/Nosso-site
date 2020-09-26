import styled from 'styled-components';

import Copyright from '../../assets/copyright_WEB.png';
import Copyright_Mobile from '../../assets/copyright.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #2f2e41;

  .copyright {
    height: 12rem;

    background-image: url(${Copyright_Mobile});
    background-position: center;
    background-size: cover;

    @media (min-width: 1000px) {
      background-image: url(${Copyright});
    }
  }
`;

export const Social = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  align-items: center;

  div {
    display: flex;

    margin-top: 1.7rem;

    width: 70%;

    justify-content: space-evenly;
  }

  a {
    display: flex;

    align-items: center;
    justify-content: center;

    background-color: #5e17eb;

    color: white;

    height: 2.5rem;
    width: 2.5rem;

    border-radius: 50%;
  }
`;

export const Button = styled.div`
  display: flex;

  font-family: 'Roboto';
  font-size: 0.8rem;

  white-space: nowrap;

  align-items: center;
  justify-content: space-evenly;

  width: 40%;
  height: 2.5rem;

  cursor: pointer;

  color: white;

  border-radius: 1.3rem;

  margin-top: 1.7rem;
  margin-bottom: 1.5rem;

  box-shadow: 4px 5px 25px rgba(14, 13, 13, 0.5);

  align-self: center;

  @media (min-width: 1000px) {
    width: 15%;
  }
`;
