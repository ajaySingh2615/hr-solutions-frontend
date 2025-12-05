import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute"; // Import this

// Simple Dashboard Placeholder
const Dashboard = () => {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">HR Dashboard</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <p>Welcome back, Recruiter.</p>
      </div>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* PUBLIC ROUTES (Inside Layout) */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
        </Route>

        {/* PROTECTED ROUTES (The Guarded Area) */}
        <Route element={<ProtectedRoute />}>
          {/* The Dashboard is now protected */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
