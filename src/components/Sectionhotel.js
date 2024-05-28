import React from 'react';
import ImageCarousel from './ImageCarousel';
import './Section.css';

const SectionHotel = ({ title }) => {
  return (
    <div className="section">
      <div className="section-header">
        <h2>{title}</h2>
        <button onClick={() => alert("ไปหน้าจองโรงแรม")}>จองโรงแรม</button>
      </div>
      <ImageCarousel />
    </div>
  );
};

export default SectionHotel;
