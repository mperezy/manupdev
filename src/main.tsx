import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from 'app';
import '@fontsource/anton-sc/400.css';
import '@fontsource/cabin/400.css';
import '@fontsource/cabin/500.css';
import '@fontsource/cabin/600.css';
import '@fontsource/cabin/700.css';
import '@fontsource/graduate/400.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
