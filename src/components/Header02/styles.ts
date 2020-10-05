import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 20px 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .burger {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
  }
  .burger .linha {
    width: 30px;
    height: 3px;
    background-color: black;
    margin: 3px 0;
  }
  .linha:nth-child(2) {
    width: 15px;
  }
  > nav {
    width: 100%;
    display: flex;
    align-items: Center;
    justify-content: space-between;
  }
  .menu {
    display: none;
  }
  @media (min-width: 1100px) {
    > nav {
      width: 80%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .burger {
      display: none;
    }
    .menu {
      display: block;
    }
    .menu .link {
      display: inline-block;
      padding: 10px 30px;
      font-size: 18px;
      font-weight: 500;

      color: var(--color-secondary);
    }
    .link::after {
      content: '';
      display: block;
      width: 0px;
      height: 2px;
      background-color: var(--color-secondary);
      transition: width 0.2s;
    }
    .link:hover::after {
      width: 100%;
    }
    .menu .btn-contact {
      background-color: var(--color-main);
      border-radius: 0.2rem;
      color: var(--color-white);
      border: 2px solid var(--color-main);
      transition: background-color 0.2s, border 0.2s, color 0.2s;
    }
    .btn-contact::after {
      background: none;
    }
    .btn-contact:hover::after {
      background: none;
    }
    .btn-contact:hover {
      background-color: white;
      color: var(--color-main);
    }
  }
`;
