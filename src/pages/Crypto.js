import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Stats from '../components/Crypto/Stats';

const Crypto = () => (
  <Main
    title="Crypto"
    description="My Current Crypto Holdings"
  >
    <article className="post" id="crypto">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/crypto">Crypto</Link></h2>
        </div>
      </header>
      <Stats />
    </article>
  </Main>
);

export default Crypto;
