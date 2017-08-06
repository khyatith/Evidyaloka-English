import Store from './Store';
import AppDispatcher from '../dispatcher/AppDispatcher';
import Game1Constants from '../constants/Game1Constants';
import alphabet from '../data/alphabet';

let _state;

const resetState = function () {
    _state = {
    	userAnswer: null,
        currentLevel: 0,
        mouseClickCoordinates: {},
        message: '',
        previousLevel: 1
    };
};

resetState();

const _setUserAnswer = function (answer) {
    _state.userAnswer = answer;
    checkUserAnswer(answer);
};

const _setMouseClickCoordinates = function(coord) {
    _state.mouseClickCoordinates = coord;
};

const _setCurrentLevel = function() {
    _state.currentLevel++;
    if(_state.currentLevel === 26) {
        resetState();
    } else {
        resetCurrentState();
    }
};

const _setPreviousLevel = function() {
    _state.currentLevel--;
    resetCurrentState();
}

function resetCurrentState() {
    _state.userAnswer= null;
    _state.mouseClickCoordinates= {};
    _state.message='';
}

function checkUserAnswer(answer) {
    const currentLevel = _state.currentLevel;
    if(alphabet[currentLevel].answer === answer) {
        _state.message = true;
    } else {
        _state.message = false;
    }
}

class Game1Store extends Store {
    constructor() {
        super();
    }
    getState() {
        return _state;
    }
    resetState() {
        return resetState();
    }
}

let game1Instance = new Game1Store();

game1Instance.dispatchToken = AppDispatcher.register(function (action) {

    switch (action.actionType) {
        case Game1Constants.SET_USER_ANSWER:
            _setUserAnswer(action.userAnswer);
            break;
        case Game1Constants.SET_MOUSE_COORDINATES:
            _setMouseClickCoordinates(action.mouseClickCoordinates);
            break;
        case Game1Constants.SET_CURRENT_LEVEL:
            _setCurrentLevel();
            break;
        case Game1Constants.SET_PREVIOUS_LEVEL:
            _setPreviousLevel();
            break;
    }

    game1Instance.emitChange();
});

export default game1Instance;