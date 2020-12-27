import React from 'react';
import initialState from '../initiaState';


const Home = () => {


  return (
    <div>
      <h1>
        home
        {initialState.products[0].description}
      </h1>
      
    </div>
  );

};

export default Home;
