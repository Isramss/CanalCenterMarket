import { useState } from "react";

import "./App.css";
import FooterRouter from "./routes/FooterRouter";
import PageFooterlegalRouter from "./routes/PageFooterlegalRouter";
import PageHome from "./routes/PageHomeRouter";

function App() {
  return (
    <>
      <div>
        <PageHome />
        <FooterRouter />
        <PageFooterlegalRouter />
      </div>
    </>
  );
}

export default App;
