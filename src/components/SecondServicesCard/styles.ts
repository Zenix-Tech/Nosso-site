import styled from 'styled-components';

export const Container = styled.div`
  box-shadow: 1px 1px 19px #e9e6e6;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & + & {
    margin-top: 20px;
  }
  .ilustration {
    background-color: var(--color-main);
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 20px;
  }

  @media (min-width: 840px) {
    &:nth-last-child(2) .ilustration {
      order: 1;
    }
    height: 200px;
    width: 80%;
    margin: 0 auto;
    flex-direction: row;
    justify-content: flex-start;
    .ilustration {
      height: 200px;
      width: 20%;
    }
  }
`;

export const Text = styled.div`
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  font-family: 'Poppins', sans-serif;
  h1 {
    font-size: 18px;
    font-weight: 700;

    color: var(--color-secondary);
  }
  p {
    font-size: 16px;
    font-weight: 200;

    color: var(--color-seconary);

    margin-top: 10px;

    line-height: 25px;
  }
  @media (min-width: 1200px) {
    padding: 20px;
    h1 {
      font-size: 22px;
    }
    p {
      font-size: 20px;
    }
  }
`;
