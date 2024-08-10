import React from 'react';
import Navigation from '../components/navigation';
import Landing from '../components/landing';
import Footer from '../components/footer';
import HomeContent from '../components/homecontent';


function Home() {
  return (
    <div>
      <Navigation/>
      <Landing/>
      <HomeContent/>
      <Footer/>
    </div>
  );
}

export default Home;
