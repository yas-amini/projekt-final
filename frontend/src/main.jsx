// This file starts the react app & sets up the app globally, Its primary job is to tell React: "Render my <App /> component into the div in index.html."
// 1. Imports tools & the app
// 2. Finds the root div in HTML , document.getElementById('root')
// 3. Opens a door between react and the browser , createRoot(...)
// 4. Renders the app inside that div
// 5. Applies safety checks (StrictMode) and routing (BrowseRouter)


// Helps catch potential problems during development
import { StrictMode } from "react";
// Creates the React root (entry point to the DOM)
import { createRoot } from "react-dom/client";
// // Enables client-side routing (URLs without page reloads)
import { BrowserRouter } from "react-router-dom";
// Main App component (UI starts here)

import App from "./App.jsx";
// Global styles
import "./index.css";
// document.getElementById('root') → finds the div in the HTML
// createRoot(...) → open the door in that div
// .render(<App />) → send your app through the door
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
