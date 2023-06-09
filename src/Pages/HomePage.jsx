import React, { useState } from "react"
import { back, logic, react, front, homeData, } from "..//Components/Hero/datos"

import  Uptarjeta from "../Components/Cardandvideo/Uptarjeta"

import Hero from "../Components/Hero/Hero"



const HomePage = () => {
  
  const [data] =useState(homeData)
  const [frontend] = useState(front)
  const [backend] = useState(back)
  const [rec] = useState(react)
  const [logi] = useState(logic)
  return (

      <div>
      <Hero items={data} title='Datos'  />
      <Uptarjeta items={frontend} title='Frond-End' />
      <Uptarjeta items={backend} title='Back-End' />
      <Uptarjeta items={rec} title='React' />
      <Uptarjeta items={logi} title='Log. Programacion' />
      
      </div>
    
  )
}

export default HomePage
