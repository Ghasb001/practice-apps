import React from "react";
// import ReactDOM from "react-dom";
import App from ".//components/app.jsx";
// import "..//dist/styles.css";

// ReactDOM.render(<App />, document.getElementById("root"));



//this is the previous code


// import React from "react";
import { render } from "react-dom";

render(
  <div>
    <p>Guillermo's Online Stop-n-Shop!</p>
    <p>
      <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
    </p>
    <App />
  </div>,
  document.getElementById("root")
);

//

