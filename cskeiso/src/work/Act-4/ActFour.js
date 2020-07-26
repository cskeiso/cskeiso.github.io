import React from 'react';
import '../../App.css';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import img1 from './Act4_1.jpg';
import img2 from './Act4_2.jpg';
import img3 from './Act4_3.jpg';
import ActFourPDF from './act4.pdf';

function ActFour() {
    return (
        <div>
            <Header />
            <p>
            <a target="_blank" rel="noopener noreferrer" href={ActFourPDF}>Act Four: Fragments</a>
            <br/>
            PDF
            </p>
            <img alt="" src={img1}/>
            <img alt="" src={img2}/>
            <img alt="" src={img3}/>
            <Footer />
        </div>
    );
}

export default ActFour;