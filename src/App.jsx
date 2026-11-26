
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Projects from "./Pages/project";
import Tasks from "./Pages/task";
import Login from "./Pages/login";

import Team from "./Pages/Team";
import Client from "./Pages/Client";
import Dashboard from "./Pages/Dashboard";
import Calender from "./Pages/Calender";
import Settings from "./Pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/team" element={<Team />} />
        <Route path="/client" element={<Client />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/calender" element={<Calender />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
