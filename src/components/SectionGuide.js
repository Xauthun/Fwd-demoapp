import React from 'react';
import ImageCarousel from './ImageCarousel';
import './Section.css';

const SectionGuide = ({ title }) => {
  return (
    <div className="section">
      <div className="section-header">
        <h2>{title}</h2>
        <button onClick={() => alert("ไปหน้าจองไกด์")}>จองไกด์</button>
      </div>
      <ImageCarousel />
    </div>
  );
};

export default SectionGuide;
