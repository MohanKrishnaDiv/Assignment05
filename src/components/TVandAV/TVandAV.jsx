import React from 'react'
import { allTVandAVArray } from '../../MockData/Mock';
import Card from '../../common components/Cards/Card';

const TVandAV = ({selectedIndex}) => {
  return (
    <div>
        <div className='MobileAndComputing-main'>
        
        {allTVandAVArray[selectedIndex].map((item,index) => (
        <div className='Mobile-cards' key={index}>
            <Card imageUrl={item.url} deviceName={item.deviceName} cardType="singleCard"/>
        </div>    
    ))}
    </div>
    </div>
  )
}

export default TVandAV
