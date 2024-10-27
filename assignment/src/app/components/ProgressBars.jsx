// components/ProgressBars.js
import React from 'react';
import './sidebarStyle.css'
const ProgressBars = () => {
  const skills = [
    { name: 'HTML Tools, Forms, History', value: 80,color:'bg-red-500' },
    { name: 'Tags & References in HTML', value: 60, color:'bg-yellow-500' },
    { name: 'Tables & References in HTML', value: 24, color:'bg-blue-500' },
    { name: 'Tables & CSS Basics', value: 96, color:'bg-green-500' },
  ];

  return (
    <div className="space-y-4">
      <h5 style={{ fontWeight: 'bold' }}>Syllabus Wise Analysis</h5>
      {skills.map((skill) => (
        <div key={skill.name} className="space-y-1">
          <div className="flex justify-between text-gray-700 font-medium">
            <span>{skill.name}</span>
            <span>{skill.value}%</span>
          </div>
          <div className="w-half bg-gray rounded-full ">
            <div
              className={`${skill.color} h-2 rounded-full transition-all duration-300`}
              style={{ width: `${skill.value}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgressBars;
