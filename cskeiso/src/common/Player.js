import React from 'react';
import '../App.css';
import ReactPlayer from 'react-player';

function Player(url) {
    return (
        <div className="player">
            <ReactPlayer
                className='react-player'
                url = {url.url}
                width = '100%'
                height = '100%'
                controls
                config={{
                    vimeo: {
                        playerOptions: {
                            title: 1
                        }
                    }
                }}
            />
        </div>
    ) 
}

export default Player;