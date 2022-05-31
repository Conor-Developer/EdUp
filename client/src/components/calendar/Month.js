import React, { useContext, useState, useEffect } from 'react'
import Day from './Day'

export default function Month({ month }) {

  const [data, setData] = useState([])
  useEffect(()=>{
    async function fetchMyAPI() {
      let response = await fetch("http://localhost:9000/backend/calendar/index")
      response = await response.json()
      setData(response.events.filter((event) => event.month === month[1][0].format("MM")))
    }
    fetchMyAPI()
  }, [month])
  
  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5">
      {month.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day, idx) => (
            <Day day={day} key={idx} rowIdx={i} data={data}/>
          ))}
        </React.Fragment>
      ))}
    </div>
  )
};