import React from 'react';
import { connect } from 'react-redux';
import { REMOVE_SUB_PLAYER } from './../constants';
import './../style/style.css';

const SubPlayers = ({ subPlayers, removeSubPlayer }) => {
    return (
        <section>
            {
                subPlayers.length > 0 ?
                    <div>
                        <h2>Sub Players</h2>
                        <div className="place">
                            {
                                subPlayers.map(player => {
                                    return (
                                        <article className="best-player" key={player.id}>
                                            <img src={player.photo} alt={player.name} />
                                            <p>{player.name}</p>
                                            <button className="danger" onClick={() => removeSubPlayer(player)}>REMOVE PLAYER</button>
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