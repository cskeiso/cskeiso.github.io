import React from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'raviger';
import '../App.css';
import Footer from '../common/Footer';
import logoVideo from './movie.mp4';
import CV from './CARMENKEISO_CV_03_21_2020.pdf';
import placeholder from './sibhplaceholder.JPG';

function Home() {
  return (
    <div className="App">
      <Above/>
      <Video/>
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
        <table className = "home-table home-below">
          <tr>
            <td>
              <Link href="/work"> WORK</Link>
            </td>
            <td>
              <Link href="/text">TEXT</Link>
            </td>
            <td>
              <Link href="/audio"> AUDIO</Link>
            </td>
            <td>
              <a target="_blank" rel="noopener noreferrer" href={CV}> CV</a>
            </td>
          </tr>
        </table>
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