import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Neo Sans Pro';
    font-style: normal;
    font-weight: 400;
    src: local('Neo Sans Pro'),
      url('https://fonts.cdnfonts.com/s/40085/NeoSansProRegular.woff')
      format('woff');
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #FFF;
    font-family: 'Neo Sans Pro';
  }
`;

export default GlobalStyles;
