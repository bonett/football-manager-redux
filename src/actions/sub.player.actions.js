import { ADD_SUB_PLAYER, REMOVE_SUB_PLAYER } from './../constants';

export function addSubPlayer() {
    return {
        type: ADD_SUB_PLAYER
    };
}

export function removeSubPlayer() {
    return {
        type: REMOVE_SUB_PLAYER
    };
}