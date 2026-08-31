import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import { ThemeProvider } from './store/ThemeContext';
import { SearchOverlayProvider } from './store/SearchOverlayContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <SearchOverlayProvider>
          <App />
        </SearchOverlayProvider>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
