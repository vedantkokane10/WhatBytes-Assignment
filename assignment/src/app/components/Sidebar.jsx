"use client";
import React, { useState } from 'react';
import './progressBarStyles.css'
import { Skillset } from './Skillset';

export const Sidebar = () => {
  const [activeButton, setActiveButton] = useState('Dashboard');
  const handleButtonClick = (buttonName) => {
    // Set clicked button as active
    // Check if the button being clicked is already active to avoid unnecessary re-renders
    if (activeButton !== buttonName) {
      setActiveButton(buttonName);
    }
  };
  return (
    <div className='main'>
        <div className='sidebar'>
            <button className={`sidebar-button ${activeButton === 'Dashboard' ? 'active' : ''}`}
                    onClick={() => handleButtonClick('Dashboard')}>
                Dashboard
            </button>
            <button className={`sidebar-button ${activeButton === 'Skill test' ? 'active' : ''}`} 
                    onClick={() => handleButtonClick('Skill test')}>
                Skill test
            </button>
            <button className={`sidebar-button ${activeButton === 'Internship' ? 'active' : ''}`}
                    onClick={() => handleButtonClick('Internship')}>
                Internship
            </button>
        </div>
        <div className=''>
            <Skillset />
        </div>
    </div>
  )
}
