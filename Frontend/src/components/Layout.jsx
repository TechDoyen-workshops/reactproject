import React, { useEffect, useState } from 'react';
import Sidebar from '../pages/Dashboard/components/Sidebar.jsx';
import Header from '../pages/Dashboard/components/Header.jsx';
import { Routes, Route } from 'react-router-dom';
import Estimating from '../pages/Dashboard/Estimating.jsx';
import Projects from '../pages/Dashboard/Projects.jsx';
import Scheduling from '../pages/Dashboard/Scheduling.jsx';
import Customers from '../pages/Dashboard/Customers.jsx';
import Models from '../pages/Dashboard/Models.jsx';
import Todo from '../pages/Dashboard/Todo.jsx';
import Mytask from '../pages/Dashboard/Mytask.jsx';
import Users from '../pages/Dashboard/Users.jsx';
import Settings from '../pages/Dashboard/Settings.jsx';
import Documents from '../pages/Dashboard/Documents.jsx';
import Selections from '../pages/Dashboard/Selections.jsx';
import Finances from '../pages/Dashboard/Finances.jsx';
import Subcontractors from '../pages/Dashboard/Subcontractors.jsx';
import Feedback from '../pages/Dashboard/Feedback.jsx';
import Dashboard from '../pages/Dashboard/Dashboard.jsx';



function Layout() {
  
  const [email, setEmail] = useState('');

  useEffect(() => {
    const savedEmail = localStorage.getItem('userEmail');
    if (savedEmail) {
      setEmail(savedEmail);  // Save the email from localStorage to state
    }
  }, []);
  
  return (
    <div className='flex items-center justify-center min-h-screen font-roboto'>
      <div className="flex w-[1440px] h-[900px] mx-auto py-[15px] pl-[30px] bg-[#F7F7FA]">
        <Sidebar />
        <div>
          <Header email={email} />
          
          <Routes>
            <Route index element={<Dashboard />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Estimating" element={<Estimating />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Scheduling" element={<Scheduling />} />
            <Route path="/Customers" element={<Customers />} />
            <Route path='/Models' element={<Models />} />
            <Route path="/Todo" element={<Todo />} />
            <Route path="/Mytask" element={<Mytask />} />
            <Route path="/Users" element={<Users />} />
            <Route path="/Settings" element={<Settings />} />
            <Route path='/Documents' element={<Documents />} />
            <Route path='/Selections' element={<Selections />} />
            <Route path='/Finances' element={<Finances />} />
            <Route path='/Subcontractors' element={<Subcontractors />} />
            <Route path='/Feedback' element={<Feedback />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Layout;
