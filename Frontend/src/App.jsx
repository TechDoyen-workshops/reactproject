
// export default App;
import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LoginPage from './pages/Login/LoginPage'
// import Layout from './components/Layout'
import ProfilePage from './pages/Profilepage/components/ProfilePage.jsx';
function App() {
  return (
    <div>
      {/* <LoginPage /> */}
      <ProfilePage />
      {/* <Layout/> */}
    </div>

    
    // <div>
    //   <Router>
    //     <Routes>
    //       {/* Define Routes */}
    //       <Route path="/" element={<LoginPage />} />
    //       <Route path="/Layout" element={<Layout />} />
    //     </Routes>
    //   </Router></div>

  )
}

export default App
