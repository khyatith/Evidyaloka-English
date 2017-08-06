import React, { Component } from 'react';
import NextQuestion from '../images/nextQuestion.png';
import Game1Actions from '../actions/Game1Actions';

class Next extends Component {

    _updateLevel = () => {
        Game1Actions.setCurrentLevel();
    }

    render() {
        const style = { 
            float: 'right',
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
            <button type="button" onClick={ this._updateLevel } style={ buttonStyle }>
                <img src={ NextQuestion } style={ style } alt="Next" />
            </button>
        </div>
        );
    }
}

export default Next;
