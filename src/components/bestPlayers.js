import React from 'react';
import { connect } from 'react-redux';
import { REMOVE_BEST_PLAYER } from './../constants';

const BestPlayers = ({ bestPlayers, removeBestPlayer }) => {
    return (
        <section>
            <h2>Best Players</h2>
            <div className="place">
                {
                    bestPlayers.map(player => {
                        return (
                            <article className="best-player" key={player.id}>
                                <div>
                                    <img src={player.photo} alt={player.name} />
                                    <button onClick={() => removeBestPlayer(player)}>X</button>
                                </div>
                                <p>{player.name}</p>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

const mapStateToProps = state => ({
    bestPlayers: state.bestPlayers
});

const mapDispatchToProps = dispatch => ({
    removeBestPlayer(player) {
        dispatch({
            type: REMOVE_BEST_PLAYER,
            player
        });
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(BestPlayers);