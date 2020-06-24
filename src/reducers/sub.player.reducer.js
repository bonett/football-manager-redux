import {
    ADD_SUB_PLAYER,
    REMOVE_SUB_PLAYER,
    SUB_PLAYERS
} from './../constants';

const subPlayers = (state = SUB_PLAYERS, action) => {
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

        default:
            return state
    }
}

export default subPlayers;