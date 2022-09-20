import React, { useState, useEffect } from 'react';
import reactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import ParentButton from './ParentButton.jsx';
const root = createRoot(document.getElementById("root"));

// Huzzah for jsx!
const App = () => {
  return (
    <div>
      <h1>App</h1>
      <ParentButton />
    </div>
  )
}

root.render(<App />);