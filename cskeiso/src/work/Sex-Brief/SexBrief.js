import React from 'react';
import '../../App.css';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import img1 from './1_SB_jessie.JPG';
import img2 from './2-SB-jessie1.JPG';
import img3 from './3_SexBriefClipboard0.JPG';
import img4 from './4_SexBriefClipboard1.JPG';
import img5 from './5_SB_jessie0.jpg';
import img6 from './6_Sb_evelyn1.jpg';

function SexBrief() {
    return (
        <div>
            <Header />
            <p>
                Interview series with sculptural components filmed and exhibited in 2017.  
                <br/>
            </p>
                <img alt="" src={img1}/>
                <img alt="" src={img2}/>
                <img alt="" src={img3}/>
                <img alt="" src={img4}/>
                <img alt="" src={img5}/>
                <img alt="" src={img6}/>
            <Footer />
        </div>
    );
}

export default SexBrief;