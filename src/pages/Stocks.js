import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Stats from '../components/Stocks/Stats';

const Stocks = () => (
  <Main
    title="Stocks"
    description="My stock history"
  >
    <article className="post" id="stocks">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/stocks">Stocks</Link></h2>
        </div>
      </header>
      <Stats />
    </article>
  </Main>
);

export default Stocks;
