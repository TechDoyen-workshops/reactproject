import React from 'react'
import Card from './components/Card.jsx'
import Chart from './components/Chart.jsx'
import Weekplan from './components/Weekplan.jsx'
import Currentplan from './components/Currentplan.jsx'
import UpcomingPlan from './components/UpcomingPlan.jsx'

function Dashboard() {
  return (
    <div className='flex'>
      <div>
        <Card />
        <Chart />
        <Weekplan />
      </div>
      <div className='flex flex-col '>
        <Currentplan />
        <UpcomingPlan />
      </div>
    </div>
  )
}

export default Dashboard