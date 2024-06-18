import React from "react"
import "./App.css"
import moment from "moment-timezone"

function App() {
  const London = moment().tz('Europe/London').format('HH:mm')
  const Almaty = moment().tz('Asia/Almaty').format('HH:mm')
  const Paris = moment().tz('Europe/Paris').format('HH:mm')
  const Edinburgh = moment().tz('Europe/Edinburgh').format('HH:mm')

  const date = new Date()
  const hours = date.getHours() % 12
  let timeOfDay

  if (hours < 12) {
    timeOfDay = "morning"
  } else if (hours >= 12 && hours < 19) {
    timeOfDay = "afternoon"
  } else {
    timeOfDay = "night"
  }

  return (
    <>
    <div>
      <h1>Good {timeOfDay}! It is Dana. </h1>
      </div>
      <div>
      <h1>It is currently {London} in London. </h1>
      <h1>It is currently {Almaty} in Almaty. </h1>
      <h1>It is currently {Paris} in Paris. </h1>
      <h1>It is currently {Edinburgh} in Edinburgh. </h1>
    </div>
    </>
  )
}

export default App
