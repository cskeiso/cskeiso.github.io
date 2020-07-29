import React from 'react';
import '../App.css';
import Header from '../common/Header';
import Footer from '../common/Footer';
import TwoColumns from '../common/TwoColumns';
import artAlmanac from './art-almanac-hatched-pica.png';
const storyHouseSelect = './story-house-select/story_house_select.html';

function Text() {
  return (
    <div className="Text">
      <Header />
      <TwoColumns 
        Column1 = "Others"
        Column2 = "Selected Texts"
        Rows1 = {Rows1}
        Rows2 = {Rows2} 
      />
      <Footer />
    </div>
  );
}

function Rows1() {
  return (
    <div className="row-data">
      <p>
			<a target="_blank" rel="noopener noreferrer" href="https://offsite.westspace.org.au/work/meowtv-episode-1-2-3-4/">WestSpace Offsite: Meow TV</a>
			<br/>
			West Space
			<br/><br/>
			<a target="_blank" rel="noopener noreferrer" href="http://1856.com.au/artists/reproductions">Improvements &amp; Reproductions</a>
			<br/>
			1856
			<br/><br/>
			<a target="_blank" rel="noopener noreferrer" href="x">Art Show, Meow2</a>
			<br/>
			Audrey Schmidt, Memo Review	
			<br/><br/>
			<a target="_blank" rel="noopener noreferrer" href={artAlmanac}>Hatched, PICA</a>
			<br/>
			Art Almanac
			<br/><br/>
			<a target="_blank" rel="noopener noreferrer" href="https://memoreview.net/blog/lyon-housemuseum-galleries-meow-by-paris-lettau">The Museological Consciousness: MeowTV</a>
			<br/>
			Paris Latteu, Memo Review
			<br/><br/>
			<a target="_blank" rel="noopener noreferrer" href="http://pelicanmagazine.com.au/2019/05/13/rigour-and-intricacy-a-review-of-hatched-national-graduate-show-2019/">Rigour and Intricacy: A Review of Hatched, PICA</a>
			<br/>
			Patrick Gunasekera, Pelican Magazine
			<br/><br/>
			<a target="_blank" rel="noopener noreferrer" href={storyHouseSelect}> Love & Fascism in the 21st Century: Interview with Carmen-Sibha Keiso</a>
			<br/>
			Lisa Radford, Story House Select
			<br/><br/>
			<a target="_blank" rel="noopener noreferrer" href="https://vimeo.com/125689552">Media Mogul: Subject Snapshot</a>
			<br/>
			Sasha Geyer 
			<br/><br/>
      </p>
    </div>
  )
}

function Rows2() {
  return (
    <div className="row-data">
      <p>
			<a target="_blank" rel="noopener noreferrer" href="https://min.report/art/theres-no-art-in-heaven/">There Is No Art In Heaven Publication, Min Report</a>
			<br/>
			<i>These Are My Confessions Pt.3 Even Though No One Seems To Be Talking About Usher Anymore</i>
			<br/>
			Carmen-Sibha Keiso
			<br/>
			<br/>
			<a target="_blank" rel="noopener norefferer" href="./love-and-fascism-script.pdf"> Love & Fascism in the 21st Century Script</a>
			<br/>
			PDF 
			<br/>
      </p>
    </div>
  )
}

export default Text;