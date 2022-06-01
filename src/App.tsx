import Signup from "./components/Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "./contexts/AuthContext"
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from "./components/Dashboard"
import Login from "./components/Login"
import ForgotPassword from "./components/ForgotPassword"
import UpdateProfile from "./components/UpdateProfile"
import { useAuth } from "./contexts/AuthContext"

function App() {

  const { currentUser } = useAuth()

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
      
        <BrowserRouter>
        <AuthProvider>
          <Routes>
              {currentUser ?  <Route path="/" element={<Dashboard />} /> : <Route element={<Navigate to="/configure" replace />}/>}
              {currentUser ? <Route path="/update-profile" element={<UpdateProfile />} /> : <Route element={<Navigate to="/configure" replace />}/>}
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </AuthProvider>
        </BrowserRouter>
      
      </div>
    </Container>
  )
}

export default App
