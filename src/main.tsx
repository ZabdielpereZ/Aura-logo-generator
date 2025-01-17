import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Auth0Provider } from "@auth0/auth0-react";

createRoot(document.getElementById("root")!).render(
  <Auth0Provider
    domain="dev-3niskqr7oyd1o1x3.us.auth0.com"
    clientId={"70cbN0Hq4XwBTiV5cscF5euIxmsJrCEl"}
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: "aura-gen",
    }}
  >
    <App />
  </Auth0Provider>
);

// My Domain and client ID
// domain="dev-3niskqr7oyd1o1x3.us.auth0.com"
// clientId={"70cbN0Hq4XwBTiV5cscF5euIxmsJrCEl"}

// Kareems Domain and client ID
// domain="dev-y870izsbr3wx4epg.us.auth0.com"
//clientId={"Zpc4qwTgZShW82WUmnAZtwQpHS90jXck"}
