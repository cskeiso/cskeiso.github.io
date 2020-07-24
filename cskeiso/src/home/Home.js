import React from 'react';
import ReactPlayer from 'react-player';
import { A } from 'hookrouter';
import '../App.css';
import Footer from '../common/Footer';
import logoVideo from './movie.mp4';
import CV from './CARMENKEISO_CV_03_21_2020.pdf';

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
    <div class="home-above">
      <x>
        Carmen-Sibha Keiso
      </x>
      <a 
        class = "right"
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
        <table className = "home-table">
          <tr>
            <td>
              <A href="/work"> WORK</A>
            </td>
            <td>
              <A href="/text">TEXT</A>
            </td>
            <td>
              <A href="/audio"> AUDIO</A>
            </td>
            <td>
              <a target="_blank" rel="noopener noreferrer" href={CV}> CV</a>
            </td>
          </tr>
        </table>
        <A class="right" href="./readtheroom"> READTHEROOM</A>
      </div>
    </div>
  )

}

function Video() {
  var url = logoVideo;
  // having the 'light' property set seems to disable autoplay
  //light = 'sibhplacholder.JPG'
  return (
    <ReactPlayer
      url = {url} 
      width = "100%"
      height = "auto"
      playing
      muted
      loop
    />
  ) 
}

export default Home;