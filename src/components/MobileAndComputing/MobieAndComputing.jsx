import React from 'react';
import Card from '../../common components/Cards/Card';
import "./MobileAndComputing.scss";
import { allMobileAndComputingArray } from '../../MockData/Mock';

const MobieAndComputing = ({selectedIndex}) => {
  return (
    <div>
    <div className='MobileAndComputing-main'>
        
        {allMobileAndComputingArray[selectedIndex].map((item,index) => (
        <div className='Mobile-cards' key={index}>
            <Card imageUrl={item.url} deviceName={item.deviceName} cardType="singleCard"/>
        </div>    
    ))}
    </div>
</div>
  )
}

export default MobieAndComputing
