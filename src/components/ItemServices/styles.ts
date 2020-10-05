import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  padding: 30px;

  padding-top: 0;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  & + & {
    margin: 50px 0;
  }

  &::before {
    display: flex;
    content: '';
    background: none;
    width: 90%;
    height: 4px;
    margin: 0 auto;
    margin-bottom: 50px;
    transition: background-color 0.2s;
    border-bottom-right-radius: 0.1rem;
    border-bottom-left-radius: 0.1rem;
  }
  &:hover::before {
    background-color: var(--color-main);
  }
  &:hover {
    cursor: pointer;
  }
  @media (min-width: 1000px) {
    width: 400px;

    img {
      width: 200px;
      height: 200px;
    }

    & + & {
      margin: 0px;
    }
  }
`;

export const Text = styled.div`
  > h1 {
    font-size: 20px;
    color: var(--color-secondary);
    margin: 15px 0;
  }
  > p {
    font-size: 16px;
    color: var(--color-text);
    font-weight: 200;
    line-height: 30px;
  }

  @media (min-width: 1230px) {
    > h1 {
      font-size: 28px;
      font-weight: 700;
    }
    > p {
      font-size: 18px;
      color: var(--color-secondary);
      font-family: 'Poppins', sans-serif;
      font-weight: 200;
    }
  }
`;
