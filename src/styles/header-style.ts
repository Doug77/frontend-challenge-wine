import styled from 'styled-components';


export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0px 10px;
  background-color: #FFFFFF;
  height: 85px;
  border-bottom: 1px solid #CCCCCC;
  box-shadow: 1px 2px 2px #CCCCCC;

  @media screen and (min-width: 1024px) {
    justify-content: space-between;
    padding: 0px 80px;
  }
`;

export const NavBarStyled = styled.nav`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 11vh;
  width: 80vw;
  height: 100vh;
  background-color: #FFFFFF;
  left: 0;
  align-items: center;
  justify-content: space-around;
  transform: translateX(-100%);

  a {
    text-decoration: none;
    color: #555555;
    opacity: 0;
  }
`;

export const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  div:hover {
    cursor: pointer;
  }

  button:hover {
    cursor: pointer;
  }
`;

export const DivIconSearch = styled.div`
  @media screen and (min-width: 1024px) {
    margin-right: 15px;
  }
`;
export const DivIconProfile = styled.div`
  display: none;

  @media screen and (min-width: 769px) {
    display: block;
  }

  @media screen and (min-width: 1024px) {
    margin-right: 15px;
  }
`;
export const DivIconBtn = styled.div`
  @media screen and (min-width: 1024px) {
    margin-right: 15px;
  }
`;

export const BtnProfile = styled.button`
  border: none;
  background-color: #FFFFFF;
`;

export const BtnCart = styled.button`
  background-color: #FFFFFF;
  border: none;
`;

export const HeaderNav = styled.nav`
  display: none;
  @media screen and (min-width: 769px) {
    display: flex;
    background-color: #FFFFFF;
    align-items: center;
    justify-content: space-between;

    a {
      text-decoration: none;
      color: #555555;
      margin-left: 15px;
    }

    a:hover {
      transition: 250ms;
      color: #D14B8F;
    }
    a:focus {
      color: #D14B8F;
      border-bottom: 1px solid #D14B8F;
    }
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    padding-bottom: 1px;
    margin-left: 200px;
    a {
      margin: 0px 25px;
      text-decoration: none;
      color: #555555;
      transition: 250ms;
    }
    a:hover {
      transition: 250ms;
      color: #D14B8F;
    }
    a:focus {
      color: #D14B8F;
      border-bottom: 1px solid #D14B8F;
    }
  }
`
