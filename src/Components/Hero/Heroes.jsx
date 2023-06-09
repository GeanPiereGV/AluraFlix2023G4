import React, { useState } from "react"
import "./home.css"
import { homeData } from "./datos"
import Hero from "./Hero"

const Heroes = () => {
  const [items, setItems] = useState(homeData)

  return (
    <>
      <section className='home'>
        <Hero items={items} />
      </section>
      
    </>
  )
}

export default Heroes;
