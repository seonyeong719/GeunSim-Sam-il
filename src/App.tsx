import router from "@routes/router";
import GlobalStyles from "@styles/global";
import { theme } from "@styles/theme";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
