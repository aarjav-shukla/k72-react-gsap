import React from 'react'
import Video from '../Components/Home/Video.jsx'
import Projects from './Projects.jsx'
import Top from '../Components/Home/Top.jsx';
import Bottom from '../Components/Home/Bottom.jsx';
import Navmenu from '../Components/main/Navmenu.jsx';

const Home = () => {
  return (
    <div className=''>
      <div className="h-full w-full fixed">
                  <Video />
                </div>
                <div className="relative h-screen flex flex-col justify-between ">
                  <Top />
                  <Bottom />
                </div>
      
    </div>
  );
}

export default Home
