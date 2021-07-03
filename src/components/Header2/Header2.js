import React, { useContext } from 'react';
import { teamContext } from '../SingleTeam/SingleTeam';
import style from './Header2.css';

const Header2 = () => {
    const headerData = useContext(teamContext);
    console.log(headerData)
    const [{ strTeamBadge }] = headerData;
    return (
        <div class="stadium-2">
            <div class="header2-style">
                <img class="pt-6" src={strTeamBadge} alt="" />
            </div>
        </div>
    );
};

export default Header2;

