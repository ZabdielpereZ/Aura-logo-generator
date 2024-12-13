
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Auth0Provider } from '@auth0/auth0-react'

createRoot(document.getElementById('root')!).render(
  <Auth0Provider
    domain="dev-3niskqr7oyd1o1x3.us.auth0.com"
    clientId={"70cbN0Hq4XwBTiV5cscF5euIxmsJrCEl"}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
)
