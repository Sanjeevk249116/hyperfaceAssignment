import React from 'react'
import PlayerTop from '../playerPages/PlayerTop'
import PlayerMain from '../playerPages/PlayerMain'
import MainPlayerControl from '../playerPages/MainPlayerControl'

function Player() {
  return (
    <div className='player'>
      <PlayerTop/>
      <PlayerMain/>
      <MainPlayerControl/>
    </div>
  )
}

export default Player
