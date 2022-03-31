import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import "./index.css";
import App from "./App";
import Auth0ProviderWithHistory from "./components/Auth0ProviderWithHistory";
import reportWebVitals from "./reportWebVitals";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing:border-box;
}
.main-content {
 display:block-flex;
 
}
.main-layout > * {  
  height:min-content;
  position:relative;
  padding:2% 10% 5% 10%;
}
.narrow-layout > * {
  max-width:627px;
  position:relative;
  padding:5% 10% 5% 10%;
}

.page-padding {
  padding-left:1rem;
  padding-right:1rem;
}
.section-padding {
  padding-top:1rem;
  padding-bottom:1rem;
  
}
@media only screen and (min-width: 672px) {
 .main-content {
    display:grid;
    grid-template-columns: auto auto auto auto;
    grid-gap:10px 10px;
  }
}
`;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0ProviderWithHistory>
        <GlobalStyle />
        <App />
      </Auth0ProviderWithHistory>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
