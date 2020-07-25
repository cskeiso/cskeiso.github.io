import React from 'react';
import '../../App.css';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import img1 from "./muse-1.jpg"
import img2 from "./muse-2.jpg"
import img3 from "./muse-3.jpg"
import img4 from "./muse-4.jpg"
import img5 from "./muse-5.jpg"
import img6 from "./muse-6.jpg"
function Muse() {
    return (
        <div>
            <Header />
                <p>
                    A depressed girl tries to go for a walk in Brunswick…. Thinking she is in a French new-wave film, when in fact her reality is simply a slacker.
                    <br/>
                    <br/>
                    <iframe title="Muse 2019 Trailer" src="https://player.vimeo.com/video/370806768" width="768" height="432" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                    <br/>
                    Exhibited at The Alderman for UN Projects
                    <br/>
                    <br/>
                    <iframe title="Mue (2019)" src="https://player.vimeo.com/video/383350720" width="768" height="432" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
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