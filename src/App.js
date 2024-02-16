import logo from './logo.svg';
import './App.css';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lang) => i18n.changeLanguage(lang);
  
  return (
    <div className="App">
      <Helmet>
        <title>{t('변경된_제목')}</title>
      </Helmet>
        <button type="button" onClick={() => changeLanguage('en')}>English</button>
        <button type="button" onClick={() => changeLanguage('en')}>한국어</button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
