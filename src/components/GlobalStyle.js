import { createGlobalStyle } from 'styled-components'
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`

body {
 
  padding: 30px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  background-color: rgba(249, 246, 243, 0.959);
  display: flex;
  flex-direction: column;
  align-items: center;
}

ul {
list-style: none;
}
p, ul, h1, h2, li {
  margin: 0px;
  padding: 0px;
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

`;


//   body {
//     color: ${props => (props.whiteColor ? 'white' : 'black')};
//   }