import React from 'react'
import gary from '../../assets/images/gary.png'
import cato from '../../assets/images/cato.png'
import kvn from '../../assets/images/kvn.png'
import mooncake from '../../assets/images/mooncake.png'
import quinn from '../../assets/images/quinn.png'

const finalSpaceCharacters = [
  {
    id: 'gary',
    name: 'Gary Goodspeed',
    thumb: 'gary'
  },
  {
    id: 'cato',
    name: 'Little Cato',
    thumb: 'cato'
  },
  {
    id: 'kvn',
    name: 'KVN',
    thumb: 'kvn'
  },
  {
    id: 'mooncake',
    name: 'Mooncake',
    thumb: 'mooncake'
  },
  {
    id: 'quinn',
    name: 'Quinn Ergon',
    thumb: 'quinn'
  }
]

export default function Compared() {
  return (
    <div>
      Compared<br/>
      Compared<br/>
      Compared<br/>
      Compared<br/>
      Compared<br/>
      Compared<br/>
      <img src={gary} />
    </div>
  )
}