import { injectGlobal } from 'emotion'

export default injectGlobal`
  * {
    box-sizing: border-box; 
  }
  html,
  body {
    -webkit-font-smoothing: antialiased;
    -webkit-appearance: none;
    font-family: 'roboto', Arial, Helvetica, sans-serif;
    font-size: 14px;
    line-height: 1.5em;
    color: #4f5f6f;
  }
  @font-face {
    font-family: 'roboto';
    font-style: normal;
    font-weight: 400;
    src: local('Roboto'), local('Roboto-Regular'),
         url('../fonts/roboto/roboto-regular.woff2') format('woff2'), 
         url('../fonts/roboto/roboto-regular.woff') format('woff'); 
  }
  
  @font-face {
    font-family: 'roboto';
    font-style: italic;
    font-weight: 400;
    src: local('Roboto Italic'), local('Roboto-Italic'),
         url('../fonts/roboto/roboto-italic.woff2') format('woff2'),
         url('../fonts/roboto/roboto-italic.woff') format('woff');
  }
  
  @font-face {
    font-family: 'roboto';
    font-style: normal;
    font-weight: 500;
    src: local('Roboto Medium'), local('Roboto-Medium'),
         url('../fonts/roboto/roboto-medium.woff2') format('woff2'), 
         url('../fonts/roboto/roboto-medium.woff') format('woff'); 
  }
  
  @font-face {
    font-family: 'roboto';
    font-style: normal;
    font-weight: 700;
    src: local('Roboto Bold'), local('Roboto-Bold'),
         url('../fonts/roboto/roboto-bold.woff2') format('woff2'), 
         url('../fonts/roboto/roboto-bold.woff') format('woff'); 
  }
`