import Store from './Store';
import AppDispatcher from '../dispatcher/AppDispatcher';
import Game1Constants from '../constants/Game1Constants';
import alphabet from '../data/alphabet';

let _state;

const resetState = function () {
    _state = {
    	userAnswer: null,
        currentLetter: 0,
        message: ''
    };
};

resetState();

const _setUserAnswer = function (answer) {
    _state.userAnswer = answer;
    checkUserAnswer(answer);
};

function checkUserAnswer(answer) {
    const currentLetter = _state.currentLetter;
    if(alphabet[currentLetter].answer === answer) {
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
    }

    game1Instance.emitChange();
});

export default game1Instance;