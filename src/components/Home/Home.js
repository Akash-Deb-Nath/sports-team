import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';
import './Home.css'


const Home = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
            .then(res => res.json())
            .then(data => setTeams(data.teams))
    }, [])
    return (
        <div>
            <div className='banner'>
                <h1>Sports Team</h1>
            </div>
            <div className="row">
                <div className="col-4">
                    {
                        teams.map(team => <Team team={team} id={team.teamId}></Team>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;