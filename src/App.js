import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import Main from "./Main";
function App() {
  const [profile_pic, setProfile_pic] = useState("");
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Login setProfile_pic={setProfile_pic} />} /> */}
        <Route path="/" element={<Main profile_pic="/Pro picture SMALL.jpg"/>} />
      </Routes>
    </div>
  );
}

export default App;
