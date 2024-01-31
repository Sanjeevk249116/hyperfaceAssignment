import React from 'react'
import { courses } from '../ApiValue'

function Section2() {
  return (
    <div className='section_Top sec2' >
            <h1>{courses.heading}</h1>
            <p>{courses.desc}</p>
            <div className="map_card" >
                {
                    courses?.cardData.map((el, idx) => (
                       <div className="card" key={idx} >
                            <img src={el.img} alt="Courses_Image" />
                            <h1>{el.heading}</h1>
                            <p><span>{el.chapters}</span> <span> . </span><span>{el.duration}</span></p>
                        </div>
                    ))
                }
            </div>
        </div>
  )
}

export default Section2
