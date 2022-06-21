import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import AuthProvider from './context/auth';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route exact path="/register" element={<Register/>} />
            <Route exact path="/login" element={<Login/>} />
            <Route path="/*" element={<PrivateRoute />}>
              <Route path="/*" element={<Home />} />
            </Route>
              <Route path="profile" element={<Profile />} />
          </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
