import styled from 'styled-components'

export const DivDetails = styled.div`
  overflow-x: hidden;
  display: flex;
  justify-content: space-evenly;
  background-color: #F5F8FA;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const DivImageWine = styled.div`
  margin-right: 75px;
`

export const AboutWine = styled.div`
  width: 500px;
  height: 100%;
  margin-left: 75px;
`

export const MainDetailsProduct = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const DetailsWine = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`

export const NameWine = styled.span`
  font-size: 30px;
  color: #111111;
  font-weight: bold;
`

export const TypeDetailsWine = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 25px;

  img {
    margin-right: 20px;
  }

  span {
    margin-right: 20px;
  }
`

export const PriceMemberWine = styled.div`
  color: #C81A78;
  font-size: 32px;
  font-weight: bold;
`

export const PriceNonMemberWine = styled.div`
  color: #C81A78;
  font-size: 16px;
  margin-bottom: 35px;
`

export const SommelierComment = styled.div`
  span {
    font-size: 16px;
    color: #111111;
    font-weight: bold;
  }

  p {
    margin-top: 10px;
    margin-bottom: 35px;
    font-size: 14px;
    color: #666666;
  }
`

export const DivButtonAdd = styled.div`
  background-color: #7EBC43;
  display: flex;
  justify-content: center;
  width: 350px;
  height: 56px;
  align-items: center;
  color: #FFFFFF;
  border-radius: 3px;

  input {
    border: none;
    background-color: #7EBC43;
    color: #FFFFFF;
    align-items: center;
    text-align: center;
    font-size: 30px;
    width: 100px;
  }
`

export const ButtonQuantity = styled.button`
  font-size: 20px;
  color: #FFFFFF;
  border: 1px solid white;
  border-radius: 50%;
  background-color: #7EBC43;
  width: 25px;
`

export const ButtonAddToCart = styled.button`
  font-size: 20px;
  font-weight: bold;
  width: 70px;
  height: 22;
  border: none;
  background-color: #7EBC43;
  color: #FFFFFF;
  margin-left: 45px;
`
