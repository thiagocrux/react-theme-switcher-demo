import { DefaultTheme, ThemeProvider } from 'styled-components';

import Header from './components/Header';
import TextPlaceholder from './components/TextPlaceholder';
import usePersistedState from './hooks/usePersistedState';
import GlobalStyles from './styles/global';
import dark from './styles/themes/dark';
import light from './styles/themes/light';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  function toggleTheme() {
    setTheme(theme.title === 'light' ? dark : light);
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
