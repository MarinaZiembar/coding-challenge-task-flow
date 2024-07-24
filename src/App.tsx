import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import EditTask from './pages/EditTask';
import AddTask from './pages/AddTask';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/edit/:id" element={<EditTask/>} />
        <Route path="/add" element={<AddTask/>} />
      </Routes>
    </Router>
  );
}

export default App;
