import Game1Constants from '../constants/Game1Constants';
import AppDispatcher from '../dispatcher/AppDispatcher';

const Game1Actions = {
    setUserAnswer(answer) {
        AppDispatcher.dispatch({
            actionType: Game1Constants.SET_USER_ANSWER,
            userAnswer: answer
        });
    },
    setMouseClickCoordinates(coord) {
        AppDispatcher.dispatch({
            actionType: Game1Constants.SET_MOUSE_COORDINATES,
            mouseClickCoordinates: coord
        });
    },
    setCurrentLevel() {
        AppDispatcher.dispatch({
            actionType: Game1Constants.SET_CURRENT_LEVEL
        });
    },
    setPreviousLevel() {
        AppDispatcher.dispatch({
            actionType: Game1Constants.SET_PREVIOUS_LEVEL
        });
    }
};

export default Game1Actions;
