import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import SingleTeamShow from '../SingleTeamShow/SingleTeamShow';
import style from './SingleTeam.css';
import male from '../../images/male.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faArrowRight, faUsers, faFlagCheckered, faBirthdayCake, faHandshake, faShareAltSquare } from '@fortawesome/free-solid-svg-icons'
import Header2 from '../Header2/Header2';
import { createContext } from 'react';
export const teamContext = createContext();

const SingleTeam = () => {
  const { idTeam } = useParams()
  const [team, setTeam] = useState([]);
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setTeam(data.teams[0]))
  }, [idTeam])
  const {
    strTeam,
    strLeague,
    intFormedYear,
    strGender,
    strCountry,
    strStadiumDescription,
    strDescriptionEN
  } = team;
  return (
    <>
      <div>
        <teamContext.Provider value={[team, setTeam]}>
          <Header2></Header2>
        </teamContext.Provider>
        <div className="container  mt-2">
          <div class="container container-3 overflow-hidden bg-primary mb-2 mt-3 ">
            <div class="row gx-5">
              <div class="col">
                <div class="p-3 ">
                  <h3>{strLeague}</h3>
                  <hr />
                  <h4><FontAwesomeIcon icon={faUsers} /> Team: {strTeam}</h4>
                  <h4><FontAwesomeIcon icon={faBirthdayCake} /> Founded: {intFormedYear}</h4>
                  <h4><FontAwesomeIcon icon={faHandshake} /> Gender: {strGender}</h4>
                  <h4><FontAwesomeIcon icon={faFlagCheckered} /> Country: {strCountry}</h4>
                </div>
              </div>
              <div class="col">
                <div class="p-3  ">
                  <img className="rounded" src={male} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div>
          </div>
        </div>
        <div className="container  mt-4">
          <p>{strStadiumDescription}</p>
          <p>{strDescriptionEN}</p>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div><h1><FontAwesomeIcon icon={faShareAltSquare} /></h1></div>
      </div>
    </>
  );
};

export default SingleTeam;