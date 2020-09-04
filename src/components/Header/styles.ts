import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 0px;
  width: 100%;
  height: 3rem;
  background-color: #5E17EB;

  padding-left:20px;
  padding-right: 20px;
  padding-bottom: 10px;

  .menu {
    display: flex;

    height: 100%;
    margin-left: auto;

    align-items: center;
    justify-content: center;

    color: white;
  }
`;

export const LogoContainer = styled.div`
  display: flex;

  background-color: white;
  border-radius: 0 0 5px 5px;
  
  padding-top: 10px;

  width: 4rem;

  align-items: center;


  p {
    font-family: 'Nunito Sans';
    font-size: 2.5rem;
    color: #5e17eb;

    margin: 0 auto;

    letter-spacing: -0.3rem;
  }
`;
