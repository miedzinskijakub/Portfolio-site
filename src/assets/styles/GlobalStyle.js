import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after{
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin: 0;
        padding: 0;
    }
    html{
        font-size: 62.5%;
  
    }

    body{
        font-size: 1.6rem;
        overflow-x: hidden;
 
    }
   
    ::-webkit-scrollbar {
        width: 6px;
    
    }
    ::-webkit-scrollbar-thumb {
        background-color: #542CE2;
    }
`;

export default GlobalStyle;