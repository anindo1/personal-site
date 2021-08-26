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
          <li>I play League of Legends - username: <a href="https://na.op.gg/summoner/userName=anindo">Anindo</a>, current rank: d3</li>
          <li>
            I watch and play basketball - favourite player: James Harden, favourite team: Nets
          </li>
          <li>I am deep into crypto and NFTs! You can find my crypto portfolio on my
            {' '}<Link to="/crypto">current holdings page</Link> and my NFT portfolio on opensea, my account name is
            <a href="https://opensea.io/Anindo"> Anindo</a>
          </li>
          <li>I have an upcoming sick food blog where I will honestly review restaurants -
            COMING SOON
          </li>
        </ul>
      </p>
    </article>
  </Main>
);

export default Index;
