import React from 'react';
import Card from '../../common components/Cards/Card';
import "./Highlights.scss";
import { allHighlightsArrays } from '../../MockData/Mock';

const Highlights = ({selectedIndex}) => {
     
  return (
    <div>
      <div className='hightlights-main'>
        {allHighlightsArrays[selectedIndex].map((item,index) => (
        <div className='highlights-cards' key={index}>
            <Card imageUrl={item.url} deviceName={item.deviceName}/>
        </div>    
       ))}
      </div>
    </div>
  )
}

export default Highlights
