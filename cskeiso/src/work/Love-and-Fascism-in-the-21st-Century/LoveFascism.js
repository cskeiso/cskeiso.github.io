import React from 'react';
import '../../App.css';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import Player from '../../common/Player';
import img1 from "./scripts1.jpg";
import img2 from "./film1.jpg";
import img3 from "./LF-edit.jpg";
import img4 from "./LFINSTALL2.jpg";
import img5 from "./21_edited.jpg";
import img6 from "./36_edited.jpg";
import img7 from "./45_edited.jpg";
import img8 from "./47_edited.jpg";
import img9 from "./48_edited.jpg";

function LoveFascism() {
    return (
        <div>
            <Header />
                Carmen-Sibha Keiso&rsquo;s debut feature-length film &lsquo;Love &amp; Fascism in the 21st Century&rsquo; is a meta-non-narrative-docudrama-video-essay, based on a text written by the artist. The script is performed by a range of drama, art, music, and dance students who attempt to enact Keiso&rsquo;s reflections on their shared contemporary condition.<br />
                <br />
                Presenting a self-reflexive internal dialogue which questions themes surrounding aesthetic representation, technique, and cultural diaspora. A French and American voice-over narrate the confessional monologue over a backdrop of vignettes, episodes and melodramatic soundbites. In search of the archival, Keiso attempts to re-imagine the possibilities for film and storytelling in an environment overwhelmed by the self.<br/><br />
                Please email carmen.s.keiso@gmail.com for exclusive private access to film link.<br /><br />
                <br/>
                <Player url={"https://player.vimeo.com/video/288111386"}/>
                <img alt="" src={img1}/>
                <img alt="" src={img2}/>
                <img alt="" src={img3}/>
                <img alt="" src={img4}/>
                <img alt="" src={img5}/>
                <img alt="" src={img6}/>
                <img alt="" src={img7}/>
                <img alt="" src={img8}/>
                <img alt="" src={img9}/>
            <Footer />
        </div>
    );
}

export default LoveFascism;