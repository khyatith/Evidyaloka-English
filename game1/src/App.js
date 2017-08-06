import React, { Component } from 'react';
import './App.css';
import Dog from './Components/Dog';

class App extends Component {

    state = {
        pressedPlay: false
    };

    _handlePlayClick = () => {
        this.setState({ pressedPlay: true });
    }

    render() {

        const pressedPlay = this.state.pressedPlay;

        return (
        <div>
        {
        !pressedPlay ? 
        <div className="App">
            <button type="button"  className="playButton" onClick={ this._handlePlayClick }>
                <i className="fa fa-play-circle fa-5x" aria-hidden="true"></i>
            </button>
        </div>
        :
        <Dog />
        }
        </div>
        );
    }
}

export default App;
