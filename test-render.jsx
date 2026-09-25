import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import App from './src/App.jsx';

try {
  const html = renderToStaticMarkup(<App />);
  console.log("Success");
} catch (e) {
  console.error(e);
}
