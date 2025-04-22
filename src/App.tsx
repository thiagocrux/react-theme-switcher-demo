import { ThemeProvider, DefaultTheme } from "styled-components";
import usePersistedState from "./hooks/usePersistedState";

import Header from "./components/Header";

import GlobalStyles from "./styles/global";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import TextPlaceholder from "./components/TextPlaceholder";

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  function toggleTheme() {
    setTheme(theme.title === "light" ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyles />
        <Header toggleTheme={toggleTheme} />
        <TextPlaceholder />
      </div>
    </ThemeProvider>
  );
}

export default App;
