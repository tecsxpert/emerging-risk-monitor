import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ListPage from "./pages/ListPage";
import DetailPage from "./pages/DetailPage";
import Analytics from "./pages/Analytics";
import RiskForm from "./pages/RiskForm";

function App() {

  // ✅ ADD THIS (login check)
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  return (
    <BrowserRouter>

      {/* NAVBAR */}
      <div style={{
  background: "#1B4F8A",
  padding: "10px",
  display: "flex",
  gap: "15px",
  flexWrap: "wrap"
}}>
  {!isLoggedIn && (
    <Link style={{ color: "white" }} to="/login">Login</Link>
  )}

  {isLoggedIn && (
    <>
      <Link style={{ color: "white" }} to="/dashboard">Dashboard</Link>
      <Link style={{ color: "white" }} to="/list">List</Link>
      <Link style={{ color: "white" }} to="/analytics">Analytics</Link>
      <Link style={{ color: "white" }} to="/create">Create</Link>
    </>
  )}
</div>

      {/* PAGES */}
      <div style={{ padding: "20px" }}>
        <Routes>

          {/* Default → Login */}
          <Route path="/" element={<Navigate to="/login" />} />

          {/* Login */}
          <Route path="/login" element={<Login />} />

          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />}
          />

          <Route
            path="/list"
            element={isLoggedIn ? <ListPage /> : <Navigate to="/login" />}
          />

          <Route
            path="/detail"
            element={isLoggedIn ? <DetailPage /> : <Navigate to="/login" />}
          />

          <Route
            path="/analytics"
            element={isLoggedIn ? <Analytics /> : <Navigate to="/login" />}
          />

          <Route
            path="/create"
            element={isLoggedIn ? <RiskForm /> : <Navigate to="/login" />}
          />

        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;