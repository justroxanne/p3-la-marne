import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserDashboard from './users/pages/UserDashboard';

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
