import styled from 'styled-components';

export const Container = styled.header`
  display: flex;

  z-index: 11;

  position: absolute;

  background-color: #5e17eb;

  width: 100vw;

  padding-bottom: 10px;

  .show {
    #one {
      transform: rotate(45deg);
    }

    #two {
      visibility: hidden;
    }

    #three {
      transform: rotate(-45deg) translate(45%, -0.9rem);
    }
  }
`;

export const LogoContainer = styled.div`
  display: flex;

  border-radius: 0 0 5px 5px;

  background-color: white;

  padding: 10px;

  margin-left: 2rem;

  width: 7rem;
  height: 100%;

  align-items: center;
  justify-content: center;

  a {
    display: flex;

    height: 100%;
    width: 100%;

    align-items: center;
    justify-content: center;
  }

  img {
    height: 3rem;
  }
`;

export const Burger = styled.div`
  display: flex;
  flex-direction: column;

  margin: auto 2rem auto auto;

  align-items: center;
  justify-content: center;

  z-index: 20;

  width: 2rem;
  height: 2rem;

  div {
    background-color: white;
    height: 2px;

    width: 100%;

    margin-top: 0.5rem;

    transition: all 0.3s ease-in-out;
  }

  #two {
    width: 50%;
    align-self: flex-end;
  }

  @media (min-width: 1000px) {
    visibility: hidden;
    position: absolute;
  }
`;

export const RightMenu = styled.div`
  width: 50vw;
  height: 100%;

  z-index: 10;

  right: 0;
  top: 0;

  color: #6c63ff;

  transform: ${props =>
    props.className == 'hidden' ? 'translateX(50vw)' : 'none'};

  transition: transform 0.45s ease-in-out;

  position: fixed;

  background: #2f2e41;

  ul {
    display: flex;
    flex-direction: column;

    margin-top: 5rem;

    align-items: center;

    li {
      margin-top: 2rem;
    }

    div {
      display: flex;

      text-align: left;

      width: 8rem;

      justify-content: space-between;
    }
  }

  @media (min-width: 1000px) {
    visibility: hidden;
  }
`;

export const Menu = styled.nav`
  display: flex;
  width: 100%;
  visibility: hidden;

  align-items: center;
  justify-content: center;
  margin: 0 auto;

  .link {
    color: white;
    font-family: 'Nunito Sans';
    font-size: 18px;

    padding: 10px 20px;
    transition: color 0.4s ease;
  }

  .link:hover {
    color: #8b55f8;
  }

  @media (min-width: 1300px) {
    visibility: visible;
  }
`;

export const ContactButton = styled.button`
  width: 10rem;
  height: 2.3rem;

  margin: auto 2rem auto auto;

  border: 1px solid white;
  border-radius: 0.3rem;

  visibility: hidden;

  position: absolute;

  cursor: pointer;

  font-size: 1rem;
  font-family: 'Nunito Sans';

  background-color: rgba(0, 0, 0, 0);

  color: white;

  transition: background-color 0.4s ease;

  &:hover {
    background-color: white;
    color: var(--color-main);
  }

  @media (min-width: 1000px) {
    visibility: visible;
    position: relative;
  } ;
`;
