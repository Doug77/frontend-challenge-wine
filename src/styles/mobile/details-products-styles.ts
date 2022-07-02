import styled from 'styled-components';

export const DivMainDetails = styled.div`
  padding: 20px;

  a {
    text-decoration: none;
    color: #555555;
  }
`

export const DivDetailsMobile = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    margin-top: 20px;
    background-color: #F5F8FA;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
export const SpanNameWine = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  font-weight: bold;
  text-align: center;
`

export const DivTypeWine = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 20px;

  span {
    color: #555555;
  }
`
export const DivImgWine = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`
export const DivDescription = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;
  span {
    font-size: 20px;
    font-weight: bold;
  }

  p {
    font-size: 16px;
    color: #555555;
  }
`

export const DivPriceBtn = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #FFFFFF;
  width: 100%;
  position: absolute;
  left: 0;
  padding: 20px;
  box-shadow: 0 0 15px #CCCCCC;

  div {
    display: flex;
    flex-direction: column;
  }

  button {
    font-size: 18px;
    background-color: #7EBC43;
    color: #FFFFFF;
    border: none;
    width: 180px;
    height: 48px;
    border-radius: 4px;
    box-shadow: 1px 2px 2px #7EBC43;
  }
`
export const SpanDiscount = styled.span`
  text-align: center;
  background-color: #F26649;
  color: #FFFFFF;
  position: absolute;
  font-size: 10px;
  width: 52px;
  height: 16px;
  top: -1vh;
  padding: 3px;
  border-radius: 2px;
`
export const FullPrice = styled.span`
  font-size: 10px;
  color: #555555;
`

export const SpanPriceMember = styled.span`
  font-size: 24px;
  color: #C81A78;
  font-weight: bold;
`
