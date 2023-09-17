import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Providers } from './components/Providers.tsx';
import GlobalStyle from './style/globalStyle.ts';

const container = document.getElementById('root') as HTMLDivElement;

ReactDOM.createRoot(container).render(
  // <React.StrictMode>
  <Providers>
    <GlobalStyle />
    <App />
  </Providers>,
  // </React.StrictMode>,
);
