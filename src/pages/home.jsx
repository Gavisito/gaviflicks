import React from 'react';
import Navigation from '../components/navigation';
import Landing from '../components/landing';
import Header from '../components/header';

function Home() {
  return (
    <div>
      <Header/>
      <Landing/>
      <Navigation/>
    </div>
  );
}

export default Home;
