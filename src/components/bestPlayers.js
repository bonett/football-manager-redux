import React from 'react';
import { connect } from 'react-redux';
import { REMOVE_BEST_PLAYER } from './../constants';
import './../style/style.css';

const BestPlayers = ({ bestPlayers, removeBestPlayer }) => {
    return (
        <section>
            {
                bestPlayers.length > 0 ?
                    <div>
                        <h2>Best Players</h2>
                        <div className="place">
                            {
                                bestPlayers.map(player => {
                                    return (
                                        <article className="best-player" key={player.id}>
                                            <img src={player.photo} alt={player.name} />
                                            <p>{player.name}</p>
                                            <button className="danger" onClick={() => removeBestPlayer(player)}>REMOVE PLAYER</button>
                                        </article>
                                    )
                                })
                            }
                        </div>
                    </div>
                    : null
            }
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