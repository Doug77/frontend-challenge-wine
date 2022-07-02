import styled from 'styled-components';


export const HeaderStyled = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0px 150px;
  border-bottom: 1px solid #CCCCCC;
  box-shadow: 1px 2px 2px #CCCCCC;
  @media screen and (max-width: 767px){
    background-color: red;
  }
`

export const NavBarStyled = styled.nav`
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
`

export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
`

export const InputSearchStyled = styled.input`
  border: none;
  border-bottom: 1px solid #CCCCCC;
`

export const DivIcon = styled.div`
  padding: 5px;
  margin-right: 30px;
`

export const BtnProfile = styled.button`
  border: none;
  background-color: #FFFFFF;
`

export const BtnCart = styled.button`
  border: none;
  background-color: #FFFFFF;
`
