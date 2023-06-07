import Header from './users/components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserDashboard from './users/pages/UserDashboard';
import Footer from './users/components/Footer';
import './App.css';



function App() {
  return (

    <div>
      <h1>Salut</h1>
      <Header/>
      <Routes>
        <Route path='/user' element={<UserDashboard />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
