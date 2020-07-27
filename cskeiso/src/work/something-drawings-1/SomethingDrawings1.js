import React from 'react';
import '../../App.css';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import Player from '../../common/Player';
import img1 from "./catalogue.jpg";
import img2 from "./left corner chair 2.jpg";
import img3 from "./jasmine billy close.jpg";
import img4 from "./bren ellen.jpg";
import img5 from "./abella brit.jpg";

function SomethingDrawings1() {
    var url = "https://player.vimeo.com/video/341499729";
    return (
        <div>
            <Header />
                <h1>'SOmething Drawings1' READTHEROOM</h1>

                <p>
                Opening reception for Something Drawings series1 presented by Read the Room in Melbourne, Spencer Lai lecture performance of catalogue text. Curated by Carmen-Sibha Keiso <br />
                28.5.2019<br />
                <br />
                DAVID BORG<br />
                BILLY BOB COULTHURST<br />
                ABELLA D'ADAMO<br />
                ELLEN FAIRBAIRN<br />
                MADARA PAULA GRI&#310;E<br />
                BRENNAN OLVER<br />
                JASMINE PICKUP<br />
                BRITTANY ROSE WYPER<br />
                <br />
                'Read the Room' is an expanded literary practice space focusing on writers and artists working both on an off the page. Co-directed by Kat Capel and Carmen Keiso, the initiative runs workshopping, reading, and exhibition events.
                </p>

                <Player url={url}/>
                <img alt="" src = {img1}/> 
                <img alt="" src = {img2}/> 
                <img alt="" src = {img3}/> 
                <img alt="" src = {img4}/> 
                <img alt="" src = {img5}/> 
            <Footer />
        </div>
    )
}

export default SomethingDrawings1;