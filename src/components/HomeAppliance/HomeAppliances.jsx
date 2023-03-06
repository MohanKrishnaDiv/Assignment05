import React from 'react';
import Card from '../../common components/Cards/Card';
import { allHomearray } from '../../MockData/Mock';


const HomeAppliances = ({selectedIndex}) => {
  return (
    <div>
    <div className='HomeApp-main'>
        
        {allHomearray[selectedIndex].map((item,index) => (
        <div className='Home-card' key={index}>
            <Card imageUrl={item.url} deviceName={item.deviceName} cardType="singleCard" textColor="black"/>
        </div>    
    ))}
    </div>
</div>
  )
}

export default HomeAppliances

