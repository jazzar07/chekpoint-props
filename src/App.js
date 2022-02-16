import React from "react";
import Bio from "./Profile/Components/Bio";
import FullName from "./Profile/Components/FullName";
import Profession from "./Profile/Components/Profession";



function App() {
  const name = "Bassem";
  const lastName = "Jazzar";
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ color: "blue" }}>Welcome To My Profile</h1>
        <FullName name={name} lastName={lastName} />
        <Bio />
        <Profession />
        
      </header>
    </div>
  );
}
export default App;
