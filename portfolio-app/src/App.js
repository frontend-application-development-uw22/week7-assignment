import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styles/Global';
import NavLinks from './components/Routes';
import Footer from './components/Footer'

const theme = {
  colors: {
    header: '#cdd3c2',
    body: '#fff',
    footer: '#e4c1a0',
  },

  mobile: '768px',
}

function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <NavLinks />
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
