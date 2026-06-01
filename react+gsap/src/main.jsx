import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Stair from './Components/animations/Stair.jsx'
import Navmenucontext from './context/Navmenucontext.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Stair>
        <Navmenucontext>
          <App />
        </Navmenucontext>
      </Stair>
    </BrowserRouter>
  </StrictMode>,
);
