import React from 'react';
import './Homepage.css';
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import Row from '../../components/Row/Row';

function Homepage() {
  return (
    <div className='Homepagecont'>
   <Navbar pr={false} logOut={true} show={true} />
       <Banner/>
     <div className='hello'>
     <Row
        title="MOVIE BOX HITS"
        fetchUrl="https://api.themoviedb.org/3/trending/all/week?api_key=3653c65d49aec32d55c3b5dd49c7b021&language=en-US"
        isLargeRow
      />
      <Row
        title="TOP OF THE CHART"
        fetchUrl="https://api.themoviedb.org/3/discover/tv?api_key=a3b71fbc78c80fd175316bffe373a71b&with_networks=123"
      />
      <Row
        title="ACTION"
        fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=a3b71fbc78c80fd175316bffe373a71b&with_genres=28`"
      />
      <Row
        title="COMEDY"
        fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=a3b71fbc78c80fd175316bffe373a71b&with_genres=35"
      />
      <Row
        title="HORROR"
        fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=a3b71fbc78c80fd175316bffe373a71b&with_genres=27"
      />

      <Row
        title="ROMANCE"
        fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=a3b71fbc78c80fd175316bffe373a71b&with_genres=10749"
      />

      <Row
        title="DOCUMENTARY"
        fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=a3b71fbc78c80fd175316bffe373a71b&with_genres=99"
      />
      </div>
      

    </div>
  )
}

export default Homepage ; 