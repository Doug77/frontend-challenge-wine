import styled from 'styled-components';

export const DivSearchStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button:hover {
    background-color: #CCCCCC;
    color: white;
    transition: 0.3s;
  }
`

export const InputSearchStyle = styled.input`
  background-color: #F5F8FA;
  border: none;
  border-bottom: 1px solid #CCCCCC;
  height: 25px;
  width: 50%;
`

export const BtnSearchStyle = styled.button`
  margin-top: 20px;
  margin-left: 20px;
  border: 1px solid #CCCCCC;
  border-radius: 4px;
  cursor: pointer;
  padding: 10px;
  background-color: #F5F8FA;
  font-family: 'Neo Sans Pro';
  font-size: 15px;
  transition: 0.3s;
`
