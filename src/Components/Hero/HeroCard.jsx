import React from "react"
import { Link } from "react-router-dom"



import "./home.css"



const HeroCard = ({ item: { id, cover, name, time, desc, starring, genres, tags, video } }) => {
  return (
    <>
      
      <div className='box'>
      
        <div className='content flex'>
            
          <div className='details row' >
              <div className="espacio" >
            <h1 className="prueba" >{name}</h1>
           
            <div className='rating flex'>
              <label className="tiempo"  > <span>Tiempo:  </span>{time}</label>
            </div>
            
            <p className="parrafo">{desc}</p>
            
            <div className='cast'>
              <h4>
                <span>Exponente </span>
                {starring}
              </h4>
              <h4>
                <span>Area </span>
                {genres}
              </h4>
              <h4 Link={tags} >
                <span>Link </span>
                 {tags}
              </h4>
            </div>
            </div>
                  
          </div>
          <div className='palyButton row'>
                      <Link to={`/singlepage/${id}`}>
                        <button>
                          
                          <div className='img'>
                          {video}
                          </div>
                          
                        </button>
                      </Link>
                    </div>       
        </div>
      </div>
    </>
  )
}

export default HeroCard;
