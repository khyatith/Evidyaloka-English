import React, { Component } from 'react';
import dogPic from '../images/jakeDog.jpg';
import Answer from './Answer';
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
        return (
        <div>
            <img className="dogPic" src={ dogPic } alt="Dog" />
            <Answer />
            <Question />
            {
                this.state.message && <Notification message={ this.state.message } />
            }
        </div>
        );
    }
}

export default Dog;
