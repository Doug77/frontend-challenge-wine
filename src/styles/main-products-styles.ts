import styled from 'styled-components';

export const MainCardProducts = styled.div`
  @media screen and (min-width: 769px){
    display: flex;
    flex-direction: row;
    padding: 40px 80px 0px;
  }
`

export const FormStyled = styled.div`
  display: none;

  @media screen and (min-width: 769px){
    display: block;
    width: 250px;
    margin-right: 100px;

    span {
      font-size: 20px;
      font-weight: bold;
    }
  }
`

export const DivSpanTotalProducts = styled.div`
  border-bottom: 1px solid #CCCCCC;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 90%;
  margin-left: 10px;

  span {
    padding: 10px 30px 0px 0px;
  }

  @media screen and (min-width: 1440px) {
    border-bottom: none;
  }
`

export const DivProductCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 20px;
`

export const DivProduct = styled.div`
  background-color: #FFFFFF;
  width: 150px;
  height: 350px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 8px;
  margin: 5px;
  border-radius: 4px;
  border-bottom: 1px solid #CCCCCC;
  box-shadow: 1px 2px 2px #CCCCCC;

  @media screen and (min-width: 769px){
    width: 250px;
    margin-right: 35px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 8px;
    margin: 5px;

    span {
      font-size: 20px;
      font-weight: bold;
    }
  }
`

export const DivNameWine = styled.div`
  font-weight: bold;
  font-size: 13px;
  color: #1D1D1B;

  @media screen and (min-width: 769px){
    text-align: center;
    font-size: 17px;
    color: #1D1D1B;
  }
`

export const SpanPrice = styled.span`
  font-size: 12px;
  text-decoration: line-through;
  color: #888888;
  text-align: center;
`

export const SpanOffPrice = styled.span`
  background-color: #F79552;
  font-size: 12px;
  color: #FFFFFF;
  padding: 3px 10px;
  border-radius: 3px;
  width: 65px;
  align-items: center;
`
export const SpanWineSocio = styled.div`
  font-size: 10px;
  color: #555555;
  margin-right: 10px;
`

export const DivPriceSocio = styled.div`
  font-weight: bold;
  color: #C81A78;
`

export const DivPrice = styled.div`
  display: flex;
`

export const PriceFull = styled.span`
  font-size: 10px;
  color: #888888;
`

export const DivButtonAdd = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0px 15px 0px;

  button {
    background-color: #7EBC43;
    color: #FFFFFF;
    border: none;
    width: 150px;
    height: 40px;
    border-radius: 4px;
    box-shadow: 1px 2px 2px #7EBC43;
    cursor: pointer;
    transition: 0.3s;
  }

  button:hover {
    cursor: pointer;
    background-color: #5ba514;
    transition: 0.3s;
  }

  @media screen and (min-width: 769px){
    display: block;

    button {
      font-size: 14px;
      background-color: #7EBC43;
      color: #FFFFFF;
      border: none;
      width: 256px;
      height: 40px;
      border-radius: 4px;
      box-shadow: 1px 2px 2px #7EBC43;
      cursor: pointer;
    }
  }
`

export const DivButtonPages = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    font-size: 10px;
    border: 1px solid #B6116E;
    background-color: #F5F8FA;
    width: 45px;
    height: 25px;
    margin-right: 10px;
    color: #B6116E;
    cursor: pointer;
    transition: 0.3s;
    border-radius: 3px;
  }

  button:focus {
    background-color: #B6116E;
    color: white;
  }

  button:hover {
    background-color: #B6116E;
    color: white;
    transition: 0.3s;
  }

  button:disabled {
    display: none;
  }

  @media screen and (min-width: 769px){
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      border: 1px solid #B6116E;
      background-color: #F5F8FA;
      width: 73px;
      height: 38px;
      margin-right: 10px;
      color: #B6116E;
      cursor: pointer;
      transition: 0.3s;
      border-radius: 3px;
    }

    button:focus {
      background-color: #B6116E;
      color: white;
    }

    button:hover {
      background-color: #B6116E;
      color: white;
      transition: 0.3s;
    }

    button:disabled {
      display: none;
    }
  }
`
export const FormFilter = styled.form`
  display: flex;
  flex-direction: column;
  font-size: 14px;

  label {
    margin-bottom: 20px;
  }
`

export const DivTextPrice = styled.div`
  margin: 32px 0px 20px;
`

export const ContainerButtons = styled.div`
  margin-bottom: 35px;
`
