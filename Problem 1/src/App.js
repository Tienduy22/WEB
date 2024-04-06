import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import UserList from './components/UserList/UserList';
import UserDetail from './components/UserDetail/UserDetail';
import UserPhotos from './components/UserPhotos/UserPhotos';


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="/about" element={<About />} />
      <Route path="/userdetail/:userId" element={<UserDetail />} />
      <Route path="/userphoto/:userId" element={<UserPhotos />} />
    </Routes>
  </Router>
  );
}

export default App;
