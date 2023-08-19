import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;

        @font-face {
		font-family: 'Suite_light';
		src: url('/Font/SUITE-Light.ttf');
        font-display: swap;
	    }
        
    }
	body{
		font-family: 'Suite_light';
	}
	button: {
		border: none;
	}
	input {
		outline: none;
	}

`;
export default GlobalStyles;
