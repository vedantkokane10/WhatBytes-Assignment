import React from 'react';
import './skillsetStyles.css';
import Image from 'next/image';
import htmlLogo from '../assets/htmlLogo.png'
import trophy from '../assets/trophy.jpg';
import PercentileChart from './PercentileChart';
import ProgressBars from './ProgressBars';
import DonutChart from './DonutChart';
import { useState } from 'react';
import UpdateScoresModal from './UpdateScoresModal';
import clipboard from '../assets/clipboard.png';
import check from '../assets/check.png'
export const Skillset = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rank,setRank] = useState(0);
  const [percentile,setPercentile] = useState(0);
  const [score,setScore] = useState(0);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSave = (data) => {
    setRank(data.rank);
    setPercentile(data.percentile);
    setScore(data.score);
    closeModal();
  };
  return (
    <div className='skillset'>
        <h4 style={{color:'black', fontWeight:'bold'}}>Skill set</h4>
        <div className='main-section'>
          <div className='left-section'>
            <div className='add-skill'>
              <div className='image-section-skill-set'>
                <Image src={htmlLogo} height={80} width={80} alt={'html'} />
              </div>
              <div className='text-section'> 
                <p id='1'>Hyper text Markup Language</p>
                <p id='p2'>Questions: 08 | Duration: 15 mins I Submitted on 5 June 2021</p>
              </div>
              <div className='button-section'>
                <button className='button' onClick={openModal}>Update</button>
                <UpdateScoresModal isOpen={isModalOpen} onClose={closeModal} onSave={handleSave} />
              </div>
            </div>
        
            <div className='statistics'>
              <div className='heading'>
                  <h4>Quick Statistics</h4>
              </div>
              <div className='achievements'>
                  <div className='trophie'>
                      <div className='image-section'>
                        <Image src={trophy} height={30} width={30} />
                      </div>
                      <div className='inner-div'>
                          <h3>{rank}</h3>
                          <p>YOUR RANK</p>
                      </div>
                  </div>

                  <div className='trophie'>
                      <div className='image-section'>
                        <Image src={clipboard} height={30} width={30} />
                      </div>
                      <div className='inner-div'>
                          <h3>{percentile}</h3>
                          <p>YOUR PERCENTILE</p>
                      </div>
                  </div>

                  <div className='trophie'>
                      <div className='image-section'>
                        <Image src={check} height={30} width={30} />
                      </div>
                      <div className='inner-div'>
                          <h3>{score}</h3>
                          <p>YOUR SCORE</p>
                      </div>
                  </div>
                  
              </div>
            </div>
            <div className='graph'>
              <h5 style={{ fontWeight: 'bold' }}>Syllabus Wise Analysis</h5>
              <PercentileChart />
            </div>
            </div>
           

            <div className='right-section'>
                <ProgressBars />
                <h5 style={{ fontWeight: 'bold' }}>Question Analysis</h5>
                <DonutChart />
            </div>

         
        </div>
    </div>
  )
}
