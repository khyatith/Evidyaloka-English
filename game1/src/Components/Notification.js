import React, { Component } from 'react';
import Sound from 'react-sound';
import WinningSound from '../data/Sounds/WinningSound.mp3';

class Notification extends Component {

    render() {
        return (
        <div>
        {
            this.props.message &&
            <Sound
                url={ WinningSound }
                playStatus={ Sound.status.PLAYING }
            />
        }
        </div>
        );
    }
}

export default Notification;
