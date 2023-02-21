import { createRoot } from 'react-dom/client';
import GlobalStyle from './GlobalStyle';
import { App } from './App';

const container = document.getElementById('root');
const root = createRoot(container as Element);

root.render(
  <>
    <GlobalStyle />
    <App />
  </>
);
