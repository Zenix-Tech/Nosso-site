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

export const Contact = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > h1 {
    font-size: 48px;
    color: var(--color-secondary);
    margin-bottom: 10px;
  }
  > p {
    font-size: 24px;
    color: var(--color-secondary);
    font-weight: 300;
  }

  .contact-infos {
    margin-top: 50px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .info-item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    width: 350px;
    height: 200px;
  }

  .info-item .item-icon {
    width: 50px;
    height: 50px;
    color: var(--color-secondary);
  }
  .info-item h2 {
    font-size: 18px;
    color: var(--color-secondary);
    font-weight: 200;
    margin-top: 10px;
  }
  .info-item:nth-child(1) h2 {
    text-align: center;
  }

  form {
    width: 100%;
    padding: 50px 100px;
    background-color: #5e17eb;
    border-radius: 0.8rem;
    font-family: 'Poppins', sans-serif;
  }
  form h3 {
    font-size: 32px;
    font-weight: 500;
    margin-bottom: 20px;
    color: white;
  }
  form .input-group {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .input-item {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    width: 100%;
  }

  .input-group .input-item + .input-item {
    margin-left: 50px;
  }
  .input-item label {
    font-size: 16px;
    font-weight: 300;
    margin-bottom: 5px;
    color: white;
  }
  input,
  textarea {
    width: 100%;
    padding: 15px 20px;
    font-size: 14px;
    color: var(--color-secondary);
    border: none;
    border-radius: 0.3rem;
  }
  form button {
    width: 300px;
    padding: 20px 0;
    font-size: 18px;
    color: white;
    background-color: #eb9617;
    border: none;
    border-radius: 0.2rem;
    margin: 20px auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  textarea {
    resize: vertical;
    min-height: 200px;
    width: 100%;
  }

  @media (max-width: 840px) {
    form {
      padding: 50px 20px;
    }
    .input-group {
      flex-direction: column;
    }
    .input-group .input-item + .input-item {
      margin-left: 0px;
    }
    .contact-infos {
      flex-direction: column;
      justify-content: center;
    }
  }
  @media (max-width: 375px) {
    form button {
      width: 100%;
    }
  }
`;
