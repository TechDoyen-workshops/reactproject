import React from 'react'
import Sidebar from './components/Sidebar.jsx'
import Header from './components/Header.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Maincontent from './components/Maincontent.jsx';
import Estimating from './components/Estimating.jsx';


function Dashboard() {
  return (
    <div className='flex items-center justify-center min-h-screen font-roboto '>
      <div className=" flex w-[1440px] h-[900px] mx-auto py-[15px] pl-[30px] bg-[#F7F7FA]">
        <Sidebar />
        <div>
          <Header />
            <Router>
              <Routes>
                <Route path="/Maincontent" element={<Maincontent />} /> 
                <Route path="/Estimating" element={<Estimating />} /> 
              </Routes>
            </Router>
        </div>
      </div>
    </div>

  )
}

export default Dashboard