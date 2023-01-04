import React from "react";
import App from ".//components/app.jsx";
import { render } from "react-dom";

render(
  <div>
    <p>Hack Reactor's Stop & Shop</p>
    <p>
      <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
    </p>
    <App />
  </div>,
  document.getElementById("root")
);

//

