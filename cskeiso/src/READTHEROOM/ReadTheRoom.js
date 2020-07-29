
import React from 'react';
import '../App.css';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Player from '../common/Player';
import img1 from "./RTR_blue.png";
import img2 from "./RTR_DOOR0.jpg";
import img3 from "./16.jpg";

function ReadTheRoom() {
    var url = "https://www.youtube.com/embed/f25rr3bHu1Y";
    return (
        <div>
            <Header />
                <p>
                    Read the Room is co-directed by Carmen-Sibha Keiso &amp; Kat Capel
                    <br/><br/>
                    Instagram: <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/readtheroom_/">@readtheroom_</a>
                    <br/>
                    Email: readtheroom.info@gmail.com
                    <br/>
                    <br/>
                    ReadtheRoom is an expanded literary practice space that encourages experimental writing, both on and off the page. RTR functions as a liaising hub for various practitioners interested in pursuing the literary form. The space hosts ongoing writing workshops, lecture, exhibitions and reading events. Read the Room is dedicated to both challenging and fostering a community of expanded-literary-practice in Melbourne.
                    <br/>
                    <br/>
                    KCCK
                    <br/><br/>
                </p>
                <img alt="" src={img1}/>
                <br/>
                <Player url={url} />
                <img alt="" src={img2}/>
                <img alt="" src={img3}/>
            <Footer />
        </div>
    );
}

export default ReadTheRoom;