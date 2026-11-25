import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");

  const formsubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/project" element={<Project/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/tasks" element={<Tasks/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;