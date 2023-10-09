import React, { useEffect } from 'react';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import './App.css';
import Profile from './profile';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import HomeScreen from './screens/HomeScreen';
import Login from './screens/login';
function App() {
  const login=useSelector(state=>state.log1.isAuthenticated);
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={login?<HomeScreen/>:<Login/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
