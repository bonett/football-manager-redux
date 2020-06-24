import { createStore } from 'redux';

const INITIAL_STATE = {
    players: [
        {
            id: 1,
            name: 'Neymar Jr',
            photo: 'https://d22uy85tnpcynx.cloudfront.net/2019/12/neyjrs-1024x574.jpg'
        },
        {
            id: 2,
            name: 'Edinson Cavanni',
            photo: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/2400/public/media/image/2019/10/fifa-20-grandes-jugadores_8.jpg?itok=EaGFB5_t'
        },
        {
            id: 3,
            name: 'Lionel Messi',
            photo: 'https://t.resfu.com/media/img_news/agencia-efe_multimedia_4203992.multimedia.photos.16374014.file.jpg?size=776x&q=60'
        },
        {
            id: 4,
            name: 'Cristiano Ronaldo',
            photo: 'https://e00-marca.uecdn.es/deporte/100-mejores-jugadores/imagenes/jugadores/Cristiano-Ronaldo.jpg'
        }
    ],
    bestPlayers: [],
    subPlayers: []
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case 'ADD_BEST_PLAYER':
            return {
                ...state,
                bestPlayers: state.bestPlayers.concat(action.player),
                players: state.players.filter(player => player.id !== action.player.id)
            }
        case 'ADD_SUB_PLAYER':
            return {
                ...state,
                subPlayers: state.subPlayers.concat(action.player),
                players: state.players.filter(player => player.id !== action.player.id)
            }
        case 'REMOVE_BEST_PLAYER':
            return {
                ...state,
                bestPlayers: state.bestPlayers.filter(player => player.id !== action.player.id),
                players: state.players.concat(action.player)
            }
        case 'REMOVE_SUB_PLAYER':
            return {
                ...state,
                subPlayers: state.subPlayers.filter(player => player.id !== action.player.id),
                players: state.players.concat(action.player)
            }

        default:
            return state
    }
}

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());