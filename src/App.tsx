import Card from "components/Card";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [iShowPreview, setIShowPreview] = useState<boolean>(false);
  return (
    <main className="container-layout">
      <Card
        iShowPreview={iShowPreview}
        setIShowPreview={setIShowPreview}
        author="Woo Yen San"
        timeLeft="3 days left"
        value="0.041"
        name="Equilibrium #3429"
        desc="Our Equilibrium collection promotes balance and calm."
      />
      <footer>
        <div className="attribution">
          Challenge by{" "}
          <a
            rel="noreferrer"
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/yen-san-443429187/"
            target="_blank"
          >
            Woo Yen San
          </a>
          .
        </div>
      </footer>
    </main>
  );
}

export default App;
