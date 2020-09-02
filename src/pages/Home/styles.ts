import styled from 'styled-components';

import Background from '../../assets/Background.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  color: white;

  align-items: center;

  background-image: url(${Background});
  background-size: 100vw 100vh;
  background-repeat: no-repeat;

  width: 100%;
  height: 100vh;

  .text {
    display: flex;
    flex-direction: column;

    align-items: center;
    margin-top: 8rem;
  }

  p {
    font-family: 'Nunito sans';
    font-size: 0.9rem;

    margin-top: 10px;

    width: 95%;

    text-align: center;
  }

  .hero-image {
    margin-top: 7rem;
  }
`;

export const Title = styled.h1`
  font-family: 'Nunito sans';
  font-weight: 700;
  font-size: 2rem;
`;

export const HeroImage = styled.img`
  height: 100%;
`;

export const PageContent = styled.div`
  display: flex;
  flex-direction: column;

  .text {
    display: flex;
    flex-direction: column;

    width: 100%;

    align-items: center;

    font-family: 'Nunito Sans';
    font-weight: 400;

    color: #a6a6a6;

    .title {
      font-weight: 900;
    }
  }

  .secondary-title {
    font-family: 'Nunito Sans';
    font-size: 1.3rem;
    font-weight: 900;

    margin-top: 2rem;

    color: #2f2e41;

    width: 60%;

    text-align: center;

    align-self: center;
  }
`;

export const Carousel = styled.div`
  display: flex;

  overflow-x: auto;

  .service {
    display: flex;
    flex-direction: column;

    width: 15rem;
    height: 20rem;

    box-shadow: 0 0 20px rgba(121, 114, 114, 0.4);

    border-radius: 5px;

    margin: 2rem 2rem 0 2rem;

    align-items: center;

    .image {
      margin-top: 40px;

      img {
        height: 100%;
      }
    }

    h3 {
      color: #3f3d56;
      font-family: 'Roboto';

      margin-top: 20px;
    }

    p {
      color: #a6a6a6;
      font-family: 'Ubuntu';

      text-align: center;

      width: 15rem;

      margin-top: 25px;

      line-height: 30px;
    }
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;

  .card {
    height: 30rem;
    width: 70%;

    margin-top: 2rem;

    align-self: center;

    box-shadow: 0 0 20px rgba(121, 114, 114, 0.5);

    .up {
      display: flex;

      align-items: center;
      justify-content: center;

      background-color: #5e17eb;

      height: 50%;
    }

    .down {
      h3 {
        color: #5e17eb;
        font-size: 1.5rem;

        margin-top: 20px;
      }

      p {
        color: #a6a6a6;
        font-size: 1.1rem;

        text-align: justify;

        width: 14rem;

        margin-top: 20px;
      }
    }
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
