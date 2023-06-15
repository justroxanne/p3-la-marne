
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderAdmin from './admin/components/HeaderAdmin/HeaderAdmin'
import FooterAdmin from './admin/components/FooterAdmin/FooterAdmin';
import AdminDashboard from './admin/pages/AdminDashboard';
import DemandeTable from './admin/components/DemandTable/DemandeTable';
import Historytable from './admin/components/HistoryTable/Historytable';
import './AppAdmin.css';

function AppAdmin() {
  return (

    <div>
      <HeaderAdmin/>
      <DemandeTable/>
      <Historytable/>
      <Routes>
        <Route path='/admin/*' element={<AdminDashboard/>} />
      </Routes>
      <FooterAdmin/>
    </div>
  );
}

export default AppAdmin;