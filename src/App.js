import React from 'react'
import TabScreenbg from './components/TabScreenbg'
import Desktopscreen from './components/Desktopscreen'


function App() {
  return (
   
    <div>
      {/* Show on phone and tablet views, hide on larger screens */}
      <div className="block lap:hidden">
        <TabScreenbg />
      </div>

      {/* Show on desktop view, hide on smaller screens */}
      <div className="hidden lap:block">
        <Desktopscreen />
      </div>
    </div>
  )
}

export default App