import React from 'react';
import '../../App.css';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import Player from '../../common/Player';
import img1 from './Westspace_Extra-8.jpg';


function MeowTV() {
    var url1 = "https://www.youtube.com/embed/I-pPthpaItw";
    var url2 = "https://www.youtube.com/embed/A6Mb_bm52CM";
    var url3 = "https://www.youtube.com/embed/ih4NcBcCjTc";
    var url4 = "https://www.youtube.com/embed/UhsFJ3-q7Mc";
    return (
        <div>
            <Header />
                <div className="para">
                    <br/>
                Meow is an artist run initiative co-directed by: Calum Lockey, Hana Earles, &amp; Brennan Olver. Meow exhibited the work of four Melbourne based artists over the summer of 2018 - 2019. These exhibitions were directed and filmed by Carmen-Sibha Keiso and aired on Channel31 from May - July of 2019. Meow TV was exhibited at 
                <a target="_blank" rel="noopener noreferrer" href="https://offsite.westspace.org.au/work/meowtv-episode-1-2-3-4/">
                &nbsp;West Space&nbsp;
                </a>
                in 2020 for 
                <a target="_blank" rel="noopener noreferrer" href="http://1856.com.au/artists/reproductions">
                &nbsp;‘Improvements &amp; Reproductions’&nbsp;
                </a>
                 curated by 1856 who have a catalogue PDF available.
                    <br/><br/>
                    <a target="_blank" rel="noopener noreferrer" href="https://memoreview.net/blog/lyon-housemuseum-galleries-meow-by-paris-lettau">Paris Lettau's review for Memo</a>
                    <br/><br/>
                    <img alt="" src={img1}/>
                    <br/>
                    <Player url={url1}/>
                    <br/>
                    <Player url={url2}/> 
                    <br/>
                    <Player url={url3}/>
                    <br/>
                    <Player url={url4}/>
                </div>
            <Footer />
        </div>
    );
}

export default MeowTV;