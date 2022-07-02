import styled from 'styled-components';

export const FormStyled = styled.div`
  display: none;
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
`

export const DivProductCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 20px 0px;
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
`

export const DivNameWine = styled.div`
  font-weight: bold;
  font-size: 13px;
`

export const SpanPrice = styled.span`
  font-size: 12px;
  text-decoration: line-through;
  color: #888888;
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
  }
`
