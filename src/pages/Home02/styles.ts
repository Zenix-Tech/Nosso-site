import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const HeroHeader = styled.div`
  #geometric {
    display: none;
  }
  width: 80%;

  font-family: 'Poppins', sans-serif;

  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 80vh;

  .text {
    display: flex;
    justify-content: Center;
    flex-direction: column;
  }

  .text h1 {
    color: var(--color-secondary);
    font-weight: 400;
    font-size: 40px;
  }

  .text p {
    color: var(--color-secondary);
    font-weight: 200;
    font-size: 20px;

    margin: 20px 0;

    line-height: 30px;
  }
  .hero-buttons {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .hero-buttons button {
    width: 100%;
    padding: 20px 10px;

    font-weight: 400;
    font-size: 14px;

    border-radius: 0.2rem;
  }
  button + button {
    margin-top: 10px;
  }

  .btn-active {
    border: none;
    background-color: var(--color-main);
    color: white;
  }
  .btn-normal {
    background: none;
    color: var(--color-secondary);
    border: 1px solid var(--color-secondary);
  }

  button:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  .ilustration {
    display: none;
  }
  @media (min-width: 1430px) {
    flex-direction: row;
    justify-content: space-between;
    strong::before {
      content: '';
      background-color: var(--color-main);
      width: 180px;
      height: 15px;
      z-index: -2;
      position: absolute;
      margin-top: 58px;
    }
    .ilustration {
      display: flex;
      width: 45%;
    }
    #geometric {
      display: block;
      position: absolute;
      right: 0;
      z-index: -2;
      width: 40%;
    }
    .ilustration img {
      width: 100% !important;
    }
    .text {
      width: 55%;
    }
    .text h1 {
      font-size: 70px;
    }
    .text p {
      font-size: 24px;
      margin: 30px 0;
    }
    .hero-buttons {
      width: 80%;
      flex-direction: row;
      justify-content: space-between;
    }
    button + button {
      margin: 0px 20px;
    }
  }
`;

export const CardContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: Center;
  flex-direction: column;
  padding: 150px 0;

  @media (min-width: 800px) {
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;
