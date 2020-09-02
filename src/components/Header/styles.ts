import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: absolute;

  width: 100%;
  height: 3rem;

  .menu {
    display: flex;

    height: 100%;
    margin-left: auto;
    margin-right: 1rem;

    align-items: center;
    justify-content: center;

    color: white;
  }
`;

export const LogoContainer = styled.div`
  display: flex;

  background-color: white;
  border-radius: 0 0 5px 5px;

  width: 4rem;

  align-items: center;

  margin-left: 20px;

  p {
    font-family: 'Poppins';
    font-size: 2.5rem;
    color: #5e17eb;

    margin: 0 auto;

    letter-spacing: -0.3rem;
  }
`;
