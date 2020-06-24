import { combineReducers } from "redux";

import bestPlayers from './best.player.reducer';
import subPlayers from './sub.player.reducer';
import players from './team.reducer';

export default combineReducers({ players, bestPlayers, subPlayers });