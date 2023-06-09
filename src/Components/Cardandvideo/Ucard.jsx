import React from "react"


const Ucard = ({ item: { id, video, } }) => {
  return (
    <>
      <div className='MovieBox'>
        <div className='img'>
          {video}
        </div>
      </div>
    </>
  )
}

export default Ucard