import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Anindya De's Personal Website"}
  >
    <article className="post" id="index">
      <h2>About me</h2>
      <p>
        <b>Sup Sup!</b>
        <br />
        Here are some things about me:
        <br />
        <ul>
          <li>I code cool
            {' '}<Link to="/Projects">projects </Link>
          </li>
          <li>I have a sick food blog where I honestly review restaurants around the globe -
            <a href="https://flavorchasers.com/">{' '}Flavor Chasers</a>
          </li>
          <li>Play League of Legends - username: <a href="https://na.op.gg/summoner/userName=anindo">Anindo</a>, current rank: d3</li>
          <li>Watch and play basketball - favourite player: James Harden, favourite team: Nets</li>
          <li>I love losing all my software eng income on crypto!
            If you want to lose money with me, check out my
            {' '}<Link to="/crypto">current holdings</Link>
          </li>
        </ul>
      </p>
    </article>
  </Main>
);

export default Index;
