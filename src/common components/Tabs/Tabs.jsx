import React, { useState } from 'react'
import "./Tabs.scss"
const Tabs = ({tabTitles,recieveIndex}) => {
    
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    const activateTab = (index) =>{
        setActiveTabIndex(index);
        
    };


  return (
    
    <div className='tabs-main'>
      {
        <div className='tabs-title'>
            {
                tabTitles.map((items,index) => <label 
                key={index} 
                className={index === activeTabIndex ? "active-tabTitle tabTitle":"tabTitle"}
                onClick = {() => {activateTab(index); recieveIndex(index)}}
                >
                    {items}
                </label>)
            }
        </div> 
      }

    </div>
  )
}

export default Tabs
