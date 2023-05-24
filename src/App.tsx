import { BaseCSS } from "styled-bootstrap-grid";
import GlobalStyles from './styles/globalStyles';
import {ThemeProvider} from 'styled-components';
import "./styles/_fonts.scss"

function App() {
  return (
    <ThemeProvider>
      <GlobalStyles/>
      <BaseCSS />
    </ThemeProvider>
  );
}

export default App;
