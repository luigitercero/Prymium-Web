import React from 'react';
import initialState from '../src/initiaState';
// import myImg from '../src/img/img.png';


const Home = () => {


  return (
    <div>
      <h1>
        home
        {initialState.products[0].description}
      </h1>
      {/* <img src={myImg} alt="nueva imange " /> */}
    </div>
  );

};

export default Home;
