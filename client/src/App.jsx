import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserDashboard from './users/pages/UserDashboard';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/userDashboard' element={<UserDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
