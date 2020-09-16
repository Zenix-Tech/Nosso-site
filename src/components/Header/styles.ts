import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: column;

  z-index: 11;

  position: absolute;

  width: 100vw;
  height: 5rem;

  .content {
    display: flex;
  }

  .line {
    margin-top: 0.3rem;

    width: 100vw;
    height: 2px;

    background-color: #6a26f1;
  }

  .show {
    #one {
      transform: rotate(45deg);
    }

    #two {
      visibility: hidden;
    }

    #three {
      transform: rotate(-45deg);
    }
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
    font-family: 'Nunito Sans';
    font-size: 2.5rem;
    color: #5e17eb;

    margin: 0 auto;

    letter-spacing: -0.3rem;
  }
`;

export const Burger = styled.div`
  display: flex;
  flex-direction: column;

  margin: auto 1rem auto auto;

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

  width: 30%;

  visibility: hidden;

  justify-content: space-around;
  align-self: center;

  .link {
    color: #8b55f8;
    font-family: 'Nunito Sans';
    font-size: 0.9rem;

    transition: color 0.4s ease;
  }

  .link:hover {
    color: white;
  }

  @media (min-width: 1300px) {
    visibility: visible;
  }
`;

export const ContactButton = styled.button`
  width: 10rem;
  height: 2rem;

  margin: auto 2rem auto auto;

  border: 2px solid #8b55f8;
  border-radius: 10px;

  cursor: pointer;

  font-size: 1rem;
  font-family: 'Nunito Sans';

  color: #8b55f8;

  transition: all 0.2s ease;

  &:hover {
    color: white;
    border-color: white;
  }
`;
