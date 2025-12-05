import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

// Simple Dashboard Placeholder (We will build the real one next)
const Dashboard = () => {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">HR Dashboard</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <p>Welcome back, Recruiter.</p>
        {/* We will add candidate lists here later */}
      </div>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* PARENT ROUTE: The Layout (Navbar + Footer) */}
        {/* All child routes will be rendered inside the <Outlet /> of Layout.tsx */}
        <Route path="/" element={<Layout />}>
          {/* Public Pages */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />

          {/* Protected Pages (We will add the AuthGuard later) */}
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
