
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Project from "./Pages/project";
import Tasks from "./Pages/task";
import Login from "./Pages/login";
import Register from "./Pages/register";
import Calender from "./Pages/Calender";
import Clients from "./Pages/Client";
import Dashboard from "./Pages/Dashboard";
import Settings from "./Pages/Settings";
import Team from "./Pages/Team";

// Admin pages
import Adminlayout from "./Pages/admin/Adminlayout";
import AdminDashboard from "./Pages/admin/Dashboard";
import AdminSettings from "./Pages/admin/Settings";
import Userdetails from "./Pages/admin/Userdetails";

function App() {

    return (
        <BrowserRouter>

            <Routes>

                {/* Existing Routes */}
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/project" element={<Project />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/calender" element={<Calender />} />
                <Route path="/clients" element={<Clients />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/team" element={<Team />} />

                {/* Admin Parent Route */}
                <Route path="/admin" element={<Adminlayout />}>

                    {/* Admin Child Routes */}
                    <Route path="dashboard" element={<AdminDashboard />} />
                    <Route path="settings" element={<AdminSettings />} />
                    <Route path="userdetails" element={<Userdetails />} />

                </Route>

            </Routes>

        </BrowserRouter>
    );
}

export default App;
