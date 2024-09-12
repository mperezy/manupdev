import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ReactGA from 'react-ga4';
import App from 'app';
import '@fontsource/anton-sc/400.css';
import '@fontsource/cabin/400.css';
import '@fontsource/cabin/500.css';
import '@fontsource/cabin/600.css';
import '@fontsource/cabin/700.css';
import '@fontsource/graduate/400.css';

if (import.meta.env.PROD) {
  ReactGA.initialize(import.meta.env.VITE_GOOGLE_ANALYTICS_ID);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
