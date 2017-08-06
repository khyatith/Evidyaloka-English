import React, { Component } from 'react';
import Sound from 'react-sound';
import alphabet from '../data/alphabet';
import Answer from './Answer';
import Next from './Next';
import Previous from './Previous';

class Question extends Component {

    render() {

        const { userAnswer, mouseClickCoordinates, currentLevel } = this.props;

        return (
        <div>
            <Next />
            <Previous />
            <Sound
                url={ alphabet[currentLevel].sound }
                playStatus={ Sound.status.PLAYING }
                playFromPosition={ 600 }
            />
            <Answer 
                userAnswer={ userAnswer } 
                mouseClickCoordinates={ mouseClickCoordinates }
                currentLevel={ currentLevel }
                alphabet={ alphabet }

             />
        </div>
        );
    }
}

export default Question;
