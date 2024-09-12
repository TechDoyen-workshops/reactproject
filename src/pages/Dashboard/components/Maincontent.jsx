import React from 'react'
import Card from './Card.jsx'
import Chart from './Chart.jsx'
import Weekplan from './Weekplan.jsx'
import Currentplan from './Currentplan.jsx'
import UpcomingPlan from './UpcomingPlan.jsx'

function Maincontent() {
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

export default Maincontent