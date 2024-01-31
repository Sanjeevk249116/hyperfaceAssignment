import React, { useContext } from 'react'
import { article } from '../ApiValue'
import { useNavigate } from 'react-router-dom';
import { AuthContainVal } from '../AuthProvider/AuthContainer';

function Section2() {
    const {setProducts} =useContext(AuthContainVal)
         
    const navgate=useNavigate();
    const handleChanges = (el) => {
        setProducts(el);
          navgate("/audio");
        }
  return (
    <div className='section_Top sec2' >
            <h1>{article.heading}</h1>
            <p>{article.desc}</p>
            <div className="map_card" >
                {
                    article?.cardData.map((el, idx) => (
                       <div className="card" key={idx} onClick={(e)=>handleChanges(el)} >
                            <div className={idx % 2 === 0 ? "heightDiv11" : "heightDiv12"}></div>
                            <h1>{el.title}</h1>
                            <p><span>{"8 Chapetrs"}</span> <span> . </span><span>{el.duration}</span></p>
                        </div>
                    ))
                }
            </div>
        </div>
  )
}

export default Section2
