import React from 'react';
import '../../App.css';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import Player from '../../common/Player';

function BangBang() {
    var url = "https://vimeo.com/112134680";
    return (
        <div>
            <Header />
            <Player url={url} />
            <Footer />
        </div>
    )
}

export default BangBang;