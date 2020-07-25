import React from 'react';
import '../../App.css';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import img1 from './long-legs.jpg';
import img2 from './clipboard-floorplan.jpg';
import LongLegsPDF from './long-legs.pdf';

function LongLegs() {
    return (
        <div>
            <Header />
            <p>
            <a target="_blank" rel="noopener noreferrer" href={LongLegsPDF}>Yea she's got long legs and huge tits</a>
            <br/>
            PDF
            </p>
            <img alt="she's got long legs" src={img1}/>
            <img alt="clipboard floorplan" src={img2}/>
            <Footer />
        </div>
    );
}

export default LongLegs;