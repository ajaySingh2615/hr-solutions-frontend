import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";

// Simple Dashboard for testing
const Dashboard = () => {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Welcome to HR Dashboard! 🚀</h1>
      <p>If you see this, you logged in successfully.</p>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* Default route goes to Login for now */}
        <Route path="/" element={<Login />} />

        {/* Protected Route (We will secure this later) */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
