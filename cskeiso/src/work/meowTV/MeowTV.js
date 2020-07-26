import React from 'react';
import '../../App.css';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import Player from '../../common/Player';

function MeowTV() {
    var url1 = "https://www.youtube.com/embed/I-pPthpaItw";
    var url2 = "https://www.youtube.com/embed/A6Mb_bm52CM";
    var url3 = "https://www.youtube.com/embed/ih4NcBcCjTc";
    var url4 = "https://www.youtube.com/embed/UhsFJ3-q7Mc";
    return (
        <div>
            <Header />
                <div className="para">
                    Meow is an artist run initiative co-directed by: Calum Lockey, Hana Earles, & Brennan Olver. Meow presented the work of four Melbourne based artists over the summer of 2018-2019. MeowTV, directed and filmed by Carmen-Sibha Keiso was aired on Channel31 from May-July of 2019.
                    <br/>
                    <a target="_blank" rel="noopener noreferrer" href="https://memoreview.net/blog/lyon-housemuseum-galleries-meow-by-paris-lettau">Paris Lettau's review for Memo</a>
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