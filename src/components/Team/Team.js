import React from 'react';
import { Link } from 'react-router-dom';
import './Team.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDirections } from '@fortawesome/free-solid-svg-icons';

const Team = (props) => {
    const { strTeam, strTeamBadge, strSport, idTeam } = props.team;
    return (
        <div className="team-container">
            <div className="teamStyle">
            <img style={{ width: '100px' }} src={strTeamBadge} alt="" />
            <h1>{strTeam}</h1>
            <p>Sports Type: {strSport}</p>
            <Link to={`/team/${idTeam}`}>
                <button className="btn btn-warning">Explore <FontAwesomeIcon icon={faDirections} /></button>
            </Link>
        </div>
        </div>
    );
};

export default Team;