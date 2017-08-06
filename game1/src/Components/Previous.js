import React, { Component } from 'react';
import PreviousQuestion from '../images/previousQuestion.png';
import Game1Actions from '../actions/Game1Actions';

class  Previous extends Component {

    _updatePreviousLevel = () => {
        console.log('previous level');
        Game1Actions.setPreviousLevel();
    }

    render() {
        const style = { 
            float: 'left',
            width: '100px',
            height: '100px'
        },
        buttonStyle = {
            border: 'none',
            outline: 'none', 
            background: 'none'
        };
        return (
        <div style={ style }>
            <button type="button" onClick={ this._updatePreviousLevel } style={ buttonStyle }>
                <img src={ PreviousQuestion } style={ style } alt="Previous" />
            </button>
        </div>
        );
    }
}

export default Previous;
