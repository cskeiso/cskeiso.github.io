import React from 'react';
import './App.css';
import ReactPlayer from 'react-player';

function App() {
  return (
    <div className="App">
      <Above/>
      <Video/>
      <Below/>
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
      <table className = "home-table">
        <tr>
          <td>
            <a href="./work/index.html"> WORK</a>
          </td>
          <td>
            <a href="./text/index.html"> TEXT</a>
          </td>
          <td>
            <a href="./audio/index.html"> AUDIO</a>
          </td>
          <td>
            <a target="_blank" rel="noopener noreferrer" href="./CARMENKEISO_CV_03.21.2020.pdf"> CV</a>
          </td>
        </tr>
      </table>
      <a class="right" target="_blank" rel="noopener noreferrer" href="./readtheroom"> READTHEROOM</a>
    </div>
  )

}

function Video() {
  var url = "videos/movie.mp4";
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

export default App;
