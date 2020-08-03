import React, { Suspense } from 'react';
import '../App.css';

const homePlaceholder = React.lazy(() =>
import('./sibhplaceholder.JPG'));
const ReactPlayer = React.lazy(() =>
import('react-player'));

function Player(url) {
    // after some testing it seems like videos only take marginally longer 
    // to load than the placeholder thumbnails or even a spinner from font awesome 
    // so, won't add it unnecessarily 
    //<img className="placeholder" alt="thumbnail" src={getThumbnail(url)} />

    var fallback_div = 
        <div className=" fallback-div center-parent">
            <div className="center-child">Loading...</div>
        </div>;
    return (
        <div className="player">
            <Suspense fallback={fallback_div}>
                <ReactPlayer
                    className='react-player'
                    url = {url.url}
                    width = '100%'
                    height = '100%'
                    config={{
                        vimeo: {
                            playerOptions: {
                                title: 1,
                                controls: 1
                            }
                        },
                        file: {
                            attributes: {
                                autoPlay: true,
                                muted: true,
                                controls: false,
                                loop: true
                            }
                        }

                    }}
                />
           </Suspense> 
        </div>
    ) 
}

//code for getting a thumbnail of a video
//but it never has time to show anyway 
/*
function getThumbnail(url) {
    if(String(url).includes("youtube")) {
        var id = getYoutubeID(url);
        return("https://img.youtube.com/vi/" + id + "/0.jpg");

    } else if(String(url).includes("vimeo")) {
        return(getVimeoThumbnailURL);
    } else {
        // it's the homepage video
        return {homePlaceholder};
    }
}
*/
function getYoutubeID(url) {
    return(url
        .match(
            /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|&v(?:i)?=))([^#&?]*).*/
        )
    );
}

async function getVimeoThumbnailURL(url) {
    try {
        let res = await fetch("https://vimeo.com/api/oembed.json?url=" + { url });
        let jsonData = await res.json();
        return jsonData.thumbnail_url;
    }
    catch (error) {
        console.error(error);
    }
}

export default Player;