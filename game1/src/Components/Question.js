import React, { Component } from 'react';
import Sound from 'react-sound';
import ASound from '../data/Sounds/ASound.mp3';

class Question extends Component {

    render() {
        return (
        <div>
            <Sound
                url={ ASound }
                playStatus={ Sound.status.PLAYING }
                playFromPosition={ 600 }
            />
        </div>
        );
    }
}

export default Question;
