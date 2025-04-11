import React from "react";
import ButtonFade from "./ButtonFade";

const App: React.FC = () => {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>Fade-in Animation Button</h2>
      <ButtonFade />
    </div>
  );
};

export default App;
