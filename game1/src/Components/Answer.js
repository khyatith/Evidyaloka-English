import React, { Component } from 'react';
import alphabet from '../data/alphabet';
import puddlePic from '../images/puddle.jpg';
import Game1Actions from '../actions/Game1Actions';

class Answer extends Component {

    _handleAnswerClick = (e) => {
        e.preventDefault();
        const userSelection = e.currentTarget.id;
        Game1Actions.setUserAnswer(userSelection);
    }

    render() {
        const answerStyle = { position:'absolute', left:'70%', top:'5%' },
            buttonStyle= { border: 'none', outline: 'none', background: 'none' };
        return (
        <div>
            <div className="puddle1">
                <button style={ buttonStyle } onClick={ this._handleAnswerClick } id={ alphabet[0].option1 }>
                    <img src={ puddlePic } alt="Puddle1" />
                    <h1 style={ answerStyle } ref="option1">{ alphabet[0].option1 }</h1>
                </button>
            </div>
            <div className="puddle2">
                <button style={ buttonStyle } onClick={ this._handleAnswerClick } id={ alphabet[0].option2 }>
                    <img src={ puddlePic } alt="Puddle2" />
                    <h1 style={ answerStyle } ref="option2">{ alphabet[0].option2 }</h1>
                </button>
            </div>
            <div className="puddle3">
                <button style={ buttonStyle } onClick={ this._handleAnswerClick } id={ alphabet[0].option3 }>
                    <img src={ puddlePic } alt="Puddle3" />
                    <h1 style={ answerStyle } ref="option3">{ alphabet[0].option3 }</h1>
                </button>
            </div>
        </div>
        );
    }
}

export default Answer;
