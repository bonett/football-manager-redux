import {
    ADD_SUB_PLAYER,
    REMOVE_SUB_PLAYER,
    ADD_BEST_PLAYER,
    REMOVE_BEST_PLAYER,
    INITIAL_STATE
} from './../constants';

const reducer = (state = INITIAL_STATE, action) => {
    console.log(state)
    switch (action.type) {
        case ADD_SUB_PLAYER:
            return {
                ...state,
                subPlayers: state.subPlayers.concat(action.player),
                players: state.players.filter(player => player.id !== action.player.id)
            }
        case REMOVE_SUB_PLAYER:
            return {
                ...state,
                subPlayers: state.subPlayers.filter(player => player.id !== action.player.id),
                players: state.players.concat(action.player)
            }
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

export default reducer;