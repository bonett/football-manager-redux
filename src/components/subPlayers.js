import React from 'react';
import { connect } from 'react-redux';
import { REMOVE_SUB_PLAYER } from './../constants';

const SubPlayers = ({ subPlayers, removeSubPlayer }) => {
    return (
        <section>
            <h2>Sub Players</h2>
            <div className="place">
                {
                    subPlayers.map(player => {
                        return (
                            <article className="best-player" key={player.id}>
                                <div>
                                    <img src={player.photo} alt={player.name} />
                                    <button onClick={() => removeSubPlayer(player)}>X</button>
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
    subPlayers: state.subPlayers
})

const mapDispatchToProps = dispatch => ({
    removeSubPlayer(player) {
        dispatch({
            type: REMOVE_SUB_PLAYER,
            player
        });
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SubPlayers);