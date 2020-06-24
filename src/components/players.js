import React from 'react';
import { ADD_BEST_PLAYER, ADD_SUB_PLAYER } from './../constants';
import { connect } from 'react-redux';
import './../style/style.css';

const Players = ({ players, addBestPlayer, addSubPlayer }) => {
    return (
        <section>
            <h2>Players</h2>
            <div className="place">
                {
                    players.map(player => (
                        <article className="player" key={player.id}>
                            <img src={player.photo} alt={player.name} />
                            <h3>{player.name}</h3>
                            <div>
                                <button className="success" onClick={() => addBestPlayer(player)}>TITULAR</button>
                                <button className="warning" onClick={() => addSubPlayer(player)}>SUPLENTE</button>
                            </div>
                        </article>
                    ))
                }
            </div>
        </section>
    )
}

const mapStateToProps = state => ({
    players: state.players
});

const mapDispatchToProps = dispatch => ({
    addBestPlayer(player) {
        dispatch({
            type: ADD_BEST_PLAYER,
            player
        });
    },
    addSubPlayer(player) {
        dispatch({
            type: ADD_SUB_PLAYER,
            player
        });
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Players);