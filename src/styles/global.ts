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
		@font-face {
		font-family: 'Suite_regular';
		src: url('/Font/SUITE-Regular.ttf');
        font-display: swap;
	    }
		@font-face {
		font-family: 'Suite_bold';
		src: url('/Font/SUITE-Bold.ttf');
        font-display: swap;
	    }
		@font-face {
		font-family: 'Suite_extraBold';
		src: url('/Font/SUITE-ExtraBold.ttf');
        font-display: swap;
	    }
		@font-face {
		font-family: 'Suite_heavy';
		src: url('/Font/SUITE-Heavy.ttf');
        font-display: swap;
	    }
		@font-face {
		font-family: 'PartialSans_regular';
		src: url('/Font/PartialSansKR-Regular.otf');
        font-display: swap;
	    }
        
    }
	body{
		font-family: 'Suite_regular';
	}
	button: {
		border: none;
	}
	input {
		outline: none;
	}

`;
export default GlobalStyles;
