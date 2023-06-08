import Header from './users/components/header/Header'
import Home from './users/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserDashboard from './users/pages/UserDashboard';
import Footer from './users/components/footer/Footer';
import './App.css';



function App() {
  return (

    <div>
      
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/user' element={<UserDashboard />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
