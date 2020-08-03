import React from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'raviger';
import '../App.css';
import Footer from '../common/Footer';
import Player from '../common/Player'
import logoVideo from './movie.mp4';
import CV from './CARMENKEISO_CV_28_07_2020.pdf';
import placeholder from './sibhplaceholder.JPG';

function Home() {
  return (
    <div className="App">
      <Above/>
      <Player url={logoVideo}/>
      <Below/>
      <Footer/>
    </div>
  );
}

function Above() {
  return (
    <div className="home-above">
      <span className="home-title">&nbsp;Carmen-Sibha Keiso&nbsp;</span>
      <a 
        className = "right home-email"
        target = "_blank" 
        rel = "noopener noreferrer"
        href = "mailto:carmen.s.keiso@gmail.com"
      >
        carmen.s.keiso@gmail.com
      </a>
    </div>
  )

}

function Below() {
  return (
    <div>
      <div>
        <div className = "home-table home-below">
          <span>
              <Link href="/work"> WORK</Link>
          </span>
          <span>
              <Link href="/text">TEXT</Link>
          </span>
          <span>
              <Link href="/audio"> AUDIO</Link>
          </span>
              <a target="_blank" rel="noopener noreferrer" href={CV}> CV</a>
        </div>
        <Link className="home-below right" href="./READTHEROOM"> READTHEROOM</Link>
      </div>
    </div>
  )

}

function Video() {
  var url = logoVideo;
  // having the 'light' property set seems to disable autoplay
  //light = {placeholder} 
  return (
      <div className="  player">
          <img className="video-placeholder" alt="" src={placeholder} />
          <ReactPlayer
              className='react-player'
              url = {url} 
              width = "100%"
              height = "auto"
              playing
              muted
              loop
          />
      </div>
  ) 
}

export default Home;