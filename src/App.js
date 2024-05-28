import React from 'react';
import Navbar from './components/Navbar';
import SectionHotel from './components/Sectionhotel';
import SectionGuide from './components/SectionGuide';
import TravelForm from './components/TravelForm'

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <form>
      </form>
      <div className="container">
        <SectionHotel title="แนะนำโรงแรม" />
        <SectionGuide title="แนะนำสถานที่ท่องเที่ยว" />
      </div>
    </div>
  );
}

export default App;
