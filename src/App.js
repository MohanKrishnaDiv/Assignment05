import './App.css';
import { useState } from 'react';
import CarouselComponent from './components/Carousel/CarouselComponent';
import Header from './Header/Header';
import Tabs from './common components/Tabs/Tabs';
import {tabTitlesHomeAppliance, tabTitlesMobileComputing, tabTitlesTVandAV, tabTitlesWeekHighlights}from './MockData/Mock';
import Highlights from './components/Highlights/Highlights';
import MobieAndComputing from './components/MobileAndComputing/MobieAndComputing';
import TVandAV from './components/TVandAV/TVandAV';
import HomeAppliances from './components/HomeAppliance/HomeAppliances';
import Footer from './components/Footer/Footer';


function App() {
  const [selectedHighIndex, setselectedHighIndex] = useState(0);
  const [selectedMobileIndex,setSelectedMobileIndex] = useState(0);
  const [TVIndex, setTVIndex] = useState(0);
  const [selectedHomeApp, setSelectedHomeApp] = useState(0);

  const recieveHighIndex = (index) =>{
    setselectedHighIndex(index);
  }

  const recieveMobileIndex = (index) =>{
    setSelectedMobileIndex(index);
  }

  const recieveTVIndex =(index) =>{
    setTVIndex(index);
  }

  const recieveHomeIndex =(index) =>{
    setSelectedHomeApp(index);
  }

  return (
    <>
      <Header/>
      <CarouselComponent/>
      <div className='highlights-app'>
        <h2 className='headings'>This Week's Highlights</h2>
        <Tabs tabTitles={tabTitlesWeekHighlights} recieveIndex={recieveHighIndex}/>
        <Highlights selectedIndex={selectedHighIndex}/>
      </div>
      <div className='mobile-main'>
        <h2 className='headings'>Mobile and Computing</h2>
        <Tabs tabTitles={tabTitlesMobileComputing} recieveIndex={recieveMobileIndex}/>
        <MobieAndComputing selectedIndex={selectedMobileIndex}/>
      </div>
      <div className='TVandAV'>
        <h2 className='headings'>TV and AV</h2>
        <Tabs tabTitles={tabTitlesTVandAV} recieveIndex={recieveTVIndex}/>
        <TVandAV selectedIndex={TVIndex}/>
      </div>
      <div className='HomeAppliance'>
        <h2 className='headings'>Home Appliances</h2>
        <Tabs tabTitles={tabTitlesHomeAppliance} recieveIndex={recieveHomeIndex}/>
        <HomeAppliances selectedIndex={selectedHomeApp}/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
