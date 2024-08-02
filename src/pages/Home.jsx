import React from 'react';
import Header from '../components/Header';
import Form from '../components/Form';

const Home = () => {
  return (
    <div className='home-page'>
      <Header/>
      <Form/>
      <ul>
        {
          data.map((film, index) => {
            <Card key={index} film={film}/>
          })
        }
      </ul>
    </div>
  );
};

export default Home;