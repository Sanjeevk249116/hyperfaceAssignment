import React, { useContext } from 'react'
import { tweetShorts } from '../ApiValue'
import { useNavigate } from 'react-router-dom';
import { AuthContainVal } from '../AuthProvider/AuthContainer';


function Tweets() {
    const{setProducts} =useContext(AuthContainVal);
    const navgate=useNavigate();
    const handleChanges = (el) => {
        setProducts(el);
          navgate("/audio");
        }
  return (
    <div className='tweet_top' >
            <h1>{tweetShorts.heading}</h1>
            <p>{tweetShorts.desc}</p>

            <div className="tweet_cards" >
                {
                    tweetShorts?.cardData.map((el, idx) => (
                       <div className="cardtweet" key={idx} onClick={(e)=>handleChanges(el)}>
                            <img src={el.img} alt="Tweets_Image" />
                            <div>
                                <div>
                                    {
                                        el.type.map((ele, index) => (
                                             <span key={index} className="cardtweet_child">{ele}</span>
                                        ))
                                    }
                                </div>
                                <h1>{el.heading}</h1>
                                <p>{el.name}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
  )
}

export default Tweets
