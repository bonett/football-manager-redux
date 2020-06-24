import {
    ADD_BEST_PLAYER,
    REMOVE_BEST_PLAYER,
    BEST_PLAYERS
} from './../constants';

const bestPlayers = (state = BEST_PLAYERS, action) => {
    switch (action.type) {
        case ADD_BEST_PLAYER:
            return {
                ...state,
                bestPlayers: state.bestPlayers.concat(action.player),
                players: state.players.filter(player => player.id !== action.player.id)
            }
        case REMOVE_BEST_PLAYER:
            return {
                ...state,
                bestPlayers: state.bestPlayers.filter(player => player.id !== action.player.id),
                players: state.players.concat(action.player)
            }
        default:
            return state
    }
}

export default bestPlayers;