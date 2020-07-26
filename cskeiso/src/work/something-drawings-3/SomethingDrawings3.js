import React from 'react';
import '../../App.css';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import img1 from "./ALETHEA-.jpg";
import img2 from "./SD3.jpg";
import img3 from "./the-room.jpg";

function SomethingDrawings3() {
    return (
        <div>
            <Header />
                <h1>'SOmething Drawings3' READTHEROOM</h1>
                <div className="para">
                    <img alt="" src = {img1}/> 
                    <img alt="" src = {img2}/> 
                    <img alt="" src = {img3}/> 
                </div>
            <Footer />
        </div>
    )
}

export default SomethingDrawings3;