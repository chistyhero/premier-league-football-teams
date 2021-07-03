import React, { useEffect, useState } from 'react';
import style from './AllTeams.css';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import SingleTeam from '../SingleTeam/SingleTeam';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const AllTeams = (props) => {
  const { idTeam, strTeam, strAlternate, strTeamBadge } = props.allTeams;
  const history = useHistory()
  const handleClick = idTeam => {
    const url = `/team/${idTeam}`
    history.push(url)
  }
  return (
    <div class="ml-3 mr-3 ">
      <div class="card mt-5 shadow-lg p-21 mb-2 bg-body rounded">
        <img src={strTeamBadge} class="card-img-top div-image pt-4" alt="" />
        <div class="card-body ">
          <h5 class="card-title">{strTeam}</h5>
          <p class="card-text">{strAlternate}</p>
          <button onClick={() => handleClick(idTeam)} className="btn btn-primary">Explore <FontAwesomeIcon icon={faArrowRight} /> </button>
        </div>
      </div>
    </div>
  );
};

export default AllTeams;



