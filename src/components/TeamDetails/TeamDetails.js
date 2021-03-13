import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import maleImg from '../../images/Photo/male.png';
import femaleImg from '../../images/Photo/female.png';
import './TeamDetails.css'
import { Link } from 'react-router-dom';
import facebook from '../../images/Icon/Facebook.png';
import twitter from '../../images/Icon/Twitter.png';
import youtube from '../../images/Icon/YouTube.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faFutbol, faPodcast, faVenusMars } from '@fortawesome/free-solid-svg-icons';

const TeamDetails = () => {
    const { teamId } = useParams();
    const [team, setTeam] = useState([]);
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`)
            .then(res => res.json())
            .then(data => setTeam(data.teams[0]))
    }, [teamId])
    let gender;
    if (team.strGender === 'Male') {
        gender = <img style={{ width: '300px' }} src={maleImg} alt="" />
    }
    else if(team.strGender === 'Female'){
        gender = <img style={{ width: '300px' }} src={femaleImg} alt="" />
    }
    return (
        <div>
            <div className="banner">
                <img src={team.strTeamBadge} alt="" />
            </div>
            <div className="team-details">
                <div style={{ width: '80%' }}>
                    {console.log(team)}
                    <h1>{team.strTeam}</h1>
                    <p><FontAwesomeIcon icon={faPodcast} /> Founded: {team.intFormedYear}</p>
                    <p><FontAwesomeIcon icon={faFlag} /> Country: {team.strCountry}</p>
                    <p><FontAwesomeIcon icon={faFutbol} /> Sports Type: {team.strSport}</p>
                    <p><FontAwesomeIcon icon={faVenusMars} /> Gender: {team.strGender}</p>
                </div>
                <div>
                    {gender}
                </div>
            </div>
            <div className="team-banner">
                <img src={team.strTeamBanner} alt="" />
            </div>
            <div>
                <p>{team.strDescriptionEN}</p>
            </div>
            <div className="icons">
                <div>
                    <Link to={`/facebook/${team.strWebsite}`}>
                        <img src={facebook} alt="" />
                    </Link>
                </div>
                <div>
                    <Link to={`/twitter/${team.strTwitter}`}>
                        <img src={twitter} alt="" />
                    </Link>
                </div>
                <div>
                    <Link to={`/youtube/${team.strYoutube}`}>
                        <img src={youtube} alt="" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TeamDetails;