import React from 'react';
import '../../App.css';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import img1 from "./somethingfractions.jpeg"
import img2 from "./somethingfractions1.jpeg"
import img3 from "./SF1.jpg"

function SomethingFractions() {
    return (
        <div>
            <Header />
            <p>
                a night of music and performance at Suicidal Oil Piglet<br/>
                Presented by Carmen Keiso<br/>
                <br/>
                <br/>
                Starring:<br/>
                henri &amp; tyreise KERslake<br/>
                isobel d'cruz<br/>
                arse'inns inferno<br/>
                coachella<br/>

                28th April 2017<br/>
            </p>
            <img alt=""  src={img1}/>
            <img alt=""  src={img2}/>
            <img alt=""  src={img3}/>
            <Footer />
        </div>
    );
}

export default SomethingFractions;