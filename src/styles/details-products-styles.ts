import styled from 'styled-components'

export const DivDetails = styled.div`
  display: block;
  background-color: red;
  @media screen and (max-width: 768px) {
    background-color: blue;
    display: none;
  }
`
