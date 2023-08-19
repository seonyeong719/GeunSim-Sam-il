import GlobalStyles from "@styles/global";
import { theme } from "@styles/theme";
import { ThemeProvider, styled } from "styled-components";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Div>안녕하세요</Div>
        <div>안녕하세요</div>
      </ThemeProvider>
    </>
  );
}

export default App;

const Div = styled.div`
  font-family: ${({ theme }) => theme.FONT_WEIGHT.light};
`;
