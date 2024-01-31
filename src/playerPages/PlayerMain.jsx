import React, { useContext } from 'react'
import { AuthContainVal } from '../AuthProvider/AuthContainer'

function PlayerMain() {
    const {products}=useContext(AuthContainVal);
    const currentPlay={
        heading:"Fundamentals of Product Des..",
      img:"https://i.ibb.co/6gFY0bC/Rectangle.png",
      chapterName:"Chapter 2 - What is Product Design?",

      
    }
  return (
    <div >
            <div>
                <div className='player_img'>
                    <img src={currentPlay.img} alt="player poster" />
                </div>
                <div className='main_player1'>
                    {products.title?<h1>{products.title}</h1>:<h1>{currentPlay.heading}</h1>}
                    <p>{currentPlay.chapterName}
                    </p>
                    <div>
                        <p className="view">View Chapter Notes</p>
                        <p className="view">Attempt Quiz</p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default PlayerMain
