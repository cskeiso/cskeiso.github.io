import React from 'react';
import '../../App.css';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import img1 from './WAYS1.jpg';
import img2 from './WAYS2.jpg';
import img3 from './WAYS3.jpg';

function FiveWays() {
    return (
        <div>
            <Header />
                <p>
                    Street theatre performance commissioned by the Faculty of Music and Fine Arts, at The University of Melbourne.
                    <br/>
                    Exhibited as part of the First Commissions showcase at the Martin Myer Arena.
                    <br/>
                    Completed in April 2019 for the&nbsp;
                    <a target="_blank" rel="noopener noreferrer" href="https://firstcommissions.com.au/titanic/carmen-sibha-keiso#response">firstcommissions.com.au</a>
                    &nbsp;online gallery, where the video-document and transcript are available.
                </p>
                <img alt="" src={img1}/>
                <img alt="" src={img2}/>
                <img alt="" src={img3}/>
            <Footer />
        </div>
    );
}

export default FiveWays;