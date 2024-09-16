import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'primeicons/primeicons.css';
import { PrimeReactProvider } from 'primereact/api';
import 'primeflex/primeflex.css';  
import 'primereact/resources/primereact.css';
// import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/themes/tailwind-light/theme.css';

// import './index.css'
import App from 'src/App'
import Upload from 'src/sample/Upload'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PrimeReactProvider>
      <App />
      <Upload />
    </PrimeReactProvider>
  </StrictMode>,
)
