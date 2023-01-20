import React from 'react';
import Sidebar from '../components/Dasboard/Sidebar';
import MainDash from '../components/Dasboard/MainDash';

const Dashboard = () => {

  return (
    <div className='d-flex'>
      <div className='bg-success'>
        <Sidebar />
      </div>
      <div className='w-100'>
        <MainDash />
      </div>
    </div>
  )
}

export default Dashboard