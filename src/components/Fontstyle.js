// FontStyles.js

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@500&family=Lato:wght@400;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');

  body {
    font-family: 'Open Sans', sans-serif; /* Default font for body text */
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'EB Garamond', serif; /* Font for headings */
    font-weight: 500; /* Font weight for headings */
  }
`;

export default GlobalStyle;
