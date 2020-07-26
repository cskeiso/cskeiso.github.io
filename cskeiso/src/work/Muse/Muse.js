import React from 'react';
import '../../App.css';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import Player from '../../common/Player';
import img1 from "./muse-1.jpg"
import img2 from "./muse-2.jpg"
import img3 from "./muse-3.jpg"
import img4 from "./muse-4.jpg"
import img5 from "./muse-5.jpg"
import img6 from "./muse-6.jpg"

function Muse() {
    var url1 = "https://player.vimeo.com/video/370806768"
    var url2 = "https://player.vimeo.com/video/383350720"
    return (
        <div>
            <Header />
                <p>
                    A depressed girl tries to go for a walk in Brunswick…. Thinking she is in a French new-wave film, when in fact her reality is simply a slacker.
                    <br/>
                    <br/>
                    <Player url={url1}/>
                    <br/>
                    Exhibited at The Alderman for UN Projects
                    <br/>
                    <br/>
                    <Player url={url2}/>
                </p>

                <img alt="" className="rotate90" src={img1}/>
                <img alt="" className="rotate90" src={img2}/>
                <img alt="" src={img3}/>
                <img alt="" src={img4}/>
                <img alt="" src={img5}/>
                <img alt="" src={img6}/>
            <Footer />
        </div>
    );
}

export default Muse;