import {
    ADD_BEST_PLAYER,
    REMOVE_BEST_PLAYER
} from './../constants';

export function addBestPlayer() {
    return {
        type: ADD_BEST_PLAYER
    };
}

export function removeBestPlayer() {
    return {
        type: REMOVE_BEST_PLAYER
    };
}