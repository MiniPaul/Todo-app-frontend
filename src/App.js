import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import UserSignup from './Components/UserSignup';
import Todopage from './Components/Todopage';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/signup" element={<UserSignup/>}/>
        <Route path="/todo" element={<Todopage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
