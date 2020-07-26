import React from 'react';
import '../../App.css';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import Player from '../../common/Player';
import img1 from "./1 copy.jpg";
import img2 from "./2.jpg";
import img3 from "./SD_2.jpg";
import img4 from "./S2CF.jpg";
import img5 from "./S2CB.jpg";

function SomethingDrawings2() {
    var url = "https://vimeo.com/353194832";
    return (
        <div>
            <Header />
                <h1>'SOmething Drawings2' READTHEROOM</h1>
                <Player url={url} />
                <p>Opening reception for Something Drawings series2 presented by Read the Room in Melbourne, Audrey Schmidt presentation of catalogue text / RTR lecture series.  Curated by Carmen-Sibha Keiso.  6.8.2019</p>
                <p>@readtheroom_  ANDER RENNICK BRIGHID FITZGERALD DOUGLAS MAXTED GEORGE EGERTON-WARBURTON LORILEE YANG NIK LEE VICTORIA TODOROV  ZOE JACKSON</p>
                <p>+ catalogue text as part of our RTR LECTURE SERIES by:  AUDREY SCHMIDT</p>
                <p>'Read the Room' is an expanded literary practice space focusing on writers and artists working both on an off the page. Co-directed by Kat Capel and Carmen Keiso, the initiative runs workshopping, reading, and exhibition events. &copy;</p>

                <img alt="" src = {img1}/> 
                <img alt="" src = {img2}/> 
                <img alt="" src = {img3}/> 
                <img alt="" src = {img4}/> 
                <img alt="" src = {img5}/> 
            <Footer />
        </div>
    )
}

export default SomethingDrawings2;