import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
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
            {/* <Container>
                <Row>
                    <Col lg={4} md={6} sm={12}>
                        <img style={{ width: '100px' }} src={strTeamBadge} alt="" />
                        <h1>{strTeam}</h1>
                        <p>Sports Type: {strSport}</p>
                        <Link to={`/team/${idTeam}`}>
                            <button className="btn btn-warning">Explore</button>
                        </Link>
                    </Col>
                </Row>
            </Container> */}
        </div>
        </div>
    );
};

export default Team;