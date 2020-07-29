import React from 'react';
import '../../App.css';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import img1 from './casting-couch-1.png';
import img2 from './casting-couch-2.jpg';
import img3 from './casting-couch-3.jpg';

function CastingCouch() {
    return (
        <div>
            <Header />
            <p>
                Casting Couch - 2020
                <br/>
                Exhibited at Mejia Gallery
                <br/>
                <a target="_blank" rel="noopener noreferrer" href="https://min.report/art/theres-no-art-in-heaven/">min.report article</a>
            </p>

            <img alt="carmen lying on a black leather couch" src={img1}/>
            <img alt="a small old tv showing the same scene" src={img2}/>
            <img alt="the tv is in the corner of an art gallery" src={img3}/>
            <Footer />
        </div>
    );
}

export default CastingCouch;