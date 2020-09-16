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

    width: 80%;
    text-align: center;

    align-items: center;
    margin-top: 8rem;
  }

  p {
    font-family: 'Nunito sans';
    font-size: 0.9rem;

    margin-top: 10px;

    width: 95%;

    text-align: center;

    @media (min-width: 1000px) {
      font-size: 1.3rem;
    }
  }

  .hero-image {
    margin-top: 2rem;

    height: 10rem;

    img {
      height: 100%;
    }

    @media (min-width: 1000px) {
      height: 18rem;
    }
  }

  .scroll-down img {
    margin-top: 3rem;

    height: 3rem;
  }
`;

export const Title = styled.h1`
  font-family: 'Nunito sans';
  font-weight: 700;
  font-size: 2rem;
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

    margin: 2rem;

    align-items: center;

    .image {
      margin-top: 2rem;

      img {
        height: 6rem;
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

      width: 90%;

      margin-top: 25px;

      line-height: 1.5rem;
    }
  }

  @media (min-width: 1000px) {
    align-items: center;
    justify-content: center;

    .service {
      font-size: 0.9rem;
    }
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;

  .card {
    display: flex;
    flex-direction: column;

    width: 85%;

    margin-top: 2rem;

    align-self: center;

    box-shadow: 0 0 20px rgba(121, 114, 114, 0.5);

    .up {
      display: flex;

      align-items: center;
      justify-content: center;

      padding: 1rem 0;

      background-color: #5e17eb;

      height: 50%;

      img {
        height: 10rem;
      }
    }

    .down {
      display: flex;
      flex-direction: column;

      margin: 0 auto;

      text-align: center;
      align-items: center;

      width: 90%;

      padding: 1rem 0;

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

  @media (min-width: 1000px) {
    .card {
      flex-direction: row;
      width: 80%;
      height: 13rem;

      .up {
        width: 30%;
        height: 100%;

        padding: 0;

        img {
          height: 8rem;
        }
      }

      .down {
        .text {
          width: 100%;

          p {
            text-align: left;

            width: 90%;
          }
        }
      }
    }
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;

  form {
    margin-top: 2rem;

    .inputs {
      display: flex;
      flex-direction: column;

      align-items: center;

      .input {
        border: 2px solid #3f3d56;
        border-radius: 10px;

        width: 80%;
        margin-top: 1.3rem;

        background-color: #f2f2f2;
      }

      input {
        padding: 0 30px;

        height: 2.5rem;
      }

      textarea {
        padding: 15px 30px;
      }

      input::placeholder,
      textarea::placeholder {
        color: black;

        font-family: 'Nunito Sans';
        font-weight: 400;
      }

      button {
        display: flex;

        border: hidden;
        border-radius: 10px;

        width: 80%;

        height: 2.5rem;

        margin-top: 1.5rem;

        background-color: #5e17eb;

        color: white;

        font-family: 'Nunito Sans';
        font-weight: 700;
        font-size: 1.3rem;

        p {
          margin: auto auto auto 8%;
        }

        #icon {
          margin: auto 8% auto auto;
        }
      }
    }
  }

  .telephone {
    display: flex;

    font-family: 'Nunito Sans';
    font-weight: 400;
    font-size: 1.2rem;

    justify-content: space-between;
    align-items: center;

    margin: 1.5rem auto;

    width: 55%;
  }
`;
