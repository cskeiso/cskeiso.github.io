import React from 'react';
import '../App.css';
import Header from '../common/Header';
import Footer from '../common/Footer';
import TwoColumns from '../common/TwoColumns';

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
				<a target="_blank" href="https://min.report/art/theres-no-art-in-heaven/">Casting Couch</a>
				<br/><br/><br/><br/>
				<a target="_blank" href="art-almanac-hatched-pica.png">Art Almanac: Hatched PICA</a>
					<br/><br/><br/>
				<a target="_blank" href="https://memoreview.net/blog/lyon-housemuseum-galleries-meow-by-paris-lettau">The Museological Consciousness: MeowTV</a>
				<br/>
				Paris Latteu, Memo Review
				<br/>
				<br/>
				<br/>
				<a target="_blank" href="http://pelicanmagazine.com.au/2019/05/13/rigour-and-intricacy-a-review-of-hatched-national-graduate-show-2019/">Rigour and Intricacy: A Review of Hatched National Graduate Show, PICA</a>
				<br/>
					Patrick Gunasekera, Pelican Magazine
				<br/>
				<br/>
					<br/>
				<a target="_blank" href="story_house_select.html"> LOVE & FASCISM IN THE 21ST CENTURY: Interview on the debut film by Carmen-Sibha Keiso</a>
				<br/>
				STORY HOUSE SELECT
					<br/>
				<br/>
				<br/>
				<a target="_blank" href="https://vimeo.com/125689552">~Media Mogul~ Subject Snapshot</a>
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
				<a target="_blank" href="./love-and-fascism-script.pdf"> Love & Fascism in the 21st Century Script</a>
				<br/>
				PDF 
				<br/>
      </p>
    </div>
  )
}

export default Text;