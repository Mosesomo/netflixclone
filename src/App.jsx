import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Components/AuthContext';
import ProtectedRoute from './Components/ProtectedRoute';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Account from './Pages/Account';
import Navbar from './Components/Navbar';

const App = () => {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route element={<Account />} path="/account" />
          <Route element={<Home />} path="/" exact/>
        </Route>
        {/*<Route element={<Account />} path="/account" />*/}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
