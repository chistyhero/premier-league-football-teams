import React, { useEffect, useState } from 'react';
import AllTeams from '../AllTeams/AllTeams';
import Header from '../Header/Header';
import style from './Home.css';

const Home = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League'
        fetch(url)
            .then(res => res.json())
            .then(data => setTeams(data.teams))
    }, [])
    return (
        <div>
            <div className="teams-div ">
                <div className="row col-lg-12 row-col-md-4 col-sm-12 g-6 gx-5 justify-content-center  ">
                    {
                        teams.map(allTeams => <AllTeams allTeams={allTeams}></AllTeams>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;