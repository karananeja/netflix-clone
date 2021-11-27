import React from 'react';
import requests from './requests';
import './App.css';
import Row from './components/Row';
import Banner from './components/Banner';
import Nav from './components/Nav';

function App() {
  return (
    <div className='app'>
      {/* Nav  */}
      <Nav />
      {/* Banner */}
      <Banner />
      {/* Row */}
      <Row
        title='NETFLIX ORIGINALS'
        fetchUrl={requests.fetchNetflixOrginals}
        isLargeRow
      />
      <Row title='Trending' fetchUrl={requests.fetchTrending} />
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
      <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
      <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentMovies} />
    </div>
  );
}

export default App;
