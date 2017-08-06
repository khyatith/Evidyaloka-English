import React, { Component } from 'react';
import puddlePic from '../images/puddle.jpg';
import Game1Actions from '../actions/Game1Actions';
import puddleSplash from '../images/puddleSplash.gif';
import Game1Store from '../store/Game1Store';

class Answer extends Component {

    constructor() {
        super();
        this.state = Game1Store.getState();
        this._onChange = this._onChange.bind(this);
    }

    componentDidMount = () => {
        Game1Store.addChangeListener(this._onChange);
    }

    _onChange = () => {
        this.setState(Game1Store.getState());
    }

    componentWillUnmount = () => {
        Game1Store.removeChangeListener(this._onChange);
    }

    _handleAnswerClick = (e) => {
        e.preventDefault();
        const userSelection = e.currentTarget.id;
        Game1Actions.setUserAnswer(userSelection);
        Game1Actions.setMouseClickCoordinates({ 'x': e.clientX, 'y': e.clientY });
    }

    render() {
        const answerStyle = { position:'absolute', left:'70%', top:'5%' },
            buttonStyle= { border: 'none', outline: 'none', background: 'none' },
            { userAnswer, mouseClickCoordinates, currentLevel, alphabet } = this.props,
            currentLetter = alphabet[currentLevel],
            puddleSplashStyle = {
                width: '250px',
                height: '250px',
                display: 'inline-block'
            };
        return (
        <div>
            <div className="puddle1">
            {
                userAnswer === currentLetter.option1 && mouseClickCoordinates ? 
                <img src={ puddleSplash } alt="Puddle Splash" style={ puddleSplashStyle } />
                :
                <button style={ buttonStyle } onClick={ this._handleAnswerClick } id={ currentLetter.option1 }>
                    <img src={ puddlePic } alt="Puddle1" />
                    <h1 style={ answerStyle } ref="option1">{ currentLetter.option1 }</h1>
                </button>
            }
            </div>
            <div className="puddle2">
            {
                userAnswer === currentLetter.option2 && mouseClickCoordinates ?
                <img src={ puddleSplash } alt="Puddle Splash" style={ puddleSplashStyle } />
                :
                <button style={ buttonStyle } onClick={ this._handleAnswerClick } id={ currentLetter.option2 }>
                    <img src={ puddlePic } alt="Puddle2" />
                    <h1 style={ answerStyle } ref="option2">{ currentLetter.option2 }</h1>
                </button>
            }
            </div>
            <div className="puddle3">
            {
                userAnswer === currentLetter.option3 && mouseClickCoordinates ?
                <img src={ puddleSplash } alt="Puddle Splash" style={ puddleSplashStyle } />
                :
                <button style={ buttonStyle } onClick={ this._handleAnswerClick } id={ currentLetter.option3 }>
                    <img src={ puddlePic } alt="Puddle3" />
                    <h1 style={ answerStyle } ref="option3">{ currentLetter.option3 }</h1>
                </button>
            }
            </div>
        </div>
        );
    }
}

export default Answer;
