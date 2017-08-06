import React, { Component } from 'react';
import dogPic from '../images/jakeDog.jpg';
import jakeSitting from '../images/jakeSitting.png';
import Question from './Question';
import Game1Store from '../store/Game1Store';
import Notification from './Notification';

class Dog extends Component {

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

    render() {
        const { mouseClickCoordinates, userAnswer, currentLevel } = this.state,
            imgX = mouseClickCoordinates.x,
            imgY = mouseClickCoordinates.y - 100,
            imageStyle = {
                top: imgY,
                left: imgX,
                width: '150px',
                height: '150px',
                zIndex: 1000,
                position:'absolute'
            };
        return (
        <div>
            {
            userAnswer && mouseClickCoordinates ? 
            <img className="jakeSitting" src={ jakeSitting } alt="Sitting Dog" style={ imageStyle } />
            :
            <img className="dogPic" src={ dogPic } alt="Dog"/>
            }
            {
                currentLevel >= 0 && 
                <Question 
                    userAnswer={ userAnswer }
                    mouseClickCoordinates={ mouseClickCoordinates }
                    currentLevel={ currentLevel }
                />
            }
            {
                this.state.message && <Notification message={ this.state.message } />
            }
        </div>
        );
    }
}

export default Dog;
