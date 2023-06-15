import  AdminIdentity  from '../components/AdminIdentity/AdminIdentity'
import DemandeTable from '../components/DemandTable/DemandeTable'
import FooterAdmin from '../components/FooterAdmin/FooterAdmin'
import HeaderAdmin from '../components/HeaderAdmin/HeaderAdmin'
import HistoryTable from '../components/HistoryTable/Historytable'
import './AdminDashboard.css'

function AdminDashboard() {

  return (
   
      <div className=''>
        <HeaderAdmin/>
        <AdminIdentity/>
        <DemandeTable/>
        <HistoryTable/>
        <FooterAdmin/>
      </div>
      

  )
}

export default AdminDashboard