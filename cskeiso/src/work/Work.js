import React from 'react';
import '../App.css';
import Header from '../common/Header';
import Footer from '../common/Footer';
import TwoColumns from '../common/TwoColumns';

function Work() {
  return (
    <div className="work">
      <Header />
      <TwoColumns 
        Column1 = "Exhibition"
        Column2 = "Curation"
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
        <i>
        <a href="/work/Casting-Couch">Casting Couch</a>
        <br/>
        <br/>
        <a href="/work/Muse">Muse</a>
        <br/>
        <br/>
        <a href="/work/Yea-Shes-Got-Long-Legs-and-Huge-Tits">Yea, She's Got Long Legs & Huge Tits</a>
        <br/>
        <br/>
        <a href="/work/5-Ways">5 Ways</a>
        <br/>
        <br/>
        <a href="/work/meowTV">MeowTv</a>
        <br/>
        <br/>
        <a href="/work/Love-Fascism">Love & Fascism In The 21st Century</a>
        <br/>
        <br/>
        <a href="/work/Act-4-Fragments">Act 4: Fragments</a>
        <br/>
        <br/>
        <a href="/work/Buster">Buster</a>
        <br/>
        <br/>
        <a href="/work/iPhone-Notes">iPhone Notes</a>
        <br/>
        <br/>
        <a href="/work/Frames">Frames</a>
        <br/>
        <br/>
        <a href="/work/My-Beige-Girl">My Beige Girl</a>
        <br/>
        <br/>
        </i>
      </p>
    </div>
  )
}

function Rows2() {
  // This Rows2 has 2 columns
  return (
    <div className="row-data">
      <p>
				<a href="/work/something-drawings-3-readtheroom">
						<i>SOmething Drawings3,</i>  
						<span className="right">READTHEROOM</span>
				</a>
        <br/><br/>
        <a href="/work/something-drawings-2-readtheroom">
          <i>SOmething Drawings2,</i> 
          <span className="right">READTHEROOM</span>
        </a>
        <br/><br/>
        <a href="/work/something-drawings-1-readtheroom">
          <i>SOmething Drawings1,</i>  
          <span className="right">READTHEROOM</span>
        </a>
        <br/><br/>
        <a href="/work/Toys-R-Us">
          <i>`Toys R Us,</i>
          <span className="right">Second Space Studios</span>
        </a>
        <br/><br/>
        <a href="/work/Something-Fractions/">
          Something Fractions, 
          <span className="right">Suicidal Oil Piglet</span>
        </a>
        <br/><br/>
        <a href="/work/The-Beige-Show">
          The Beige Show,
          <span className="right">VCA Studen Gallery</span>
        </a>
        <br/><br/>
      </p>
    </div>
  )
}

export default Work;