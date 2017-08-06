import Game1Constants from '../constants/Game1Constants';
import AppDispatcher from '../dispatcher/AppDispatcher';

const Game1Actions = {
    setUserAnswer(answer) {
        AppDispatcher.dispatch({
            actionType: Game1Constants.SET_USER_ANSWER,
            userAnswer: answer
        });
    }
};

export default Game1Actions;
