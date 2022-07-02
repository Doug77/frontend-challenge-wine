import { DivContainer, DivLine1, DivLine2, DivLine3 } from '../../styles/mobile/burger-menu-styles';

export default function BurgerMenu() {
  return (
    <DivContainer
      role='button'
      onClick={ () => console.log('clicou pra abrir o menu')}
    >
      <DivLine1></DivLine1>
      <DivLine2></DivLine2>
      <DivLine3></DivLine3>
    </DivContainer>
  );
};
