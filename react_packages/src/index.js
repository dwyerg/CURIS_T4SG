import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import SimpleReactLightbox from 'simple-react-lightbox'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <SimpleReactLightbox>
      <App />
    </SimpleReactLightbox>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();

export default App;
