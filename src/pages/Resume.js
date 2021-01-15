import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

function Resume() {
  window.open('https://drive.google.com/file/d/1nShjris2TkdGQ5Um4G2hEwiwxhFcWAnx/view');
  return (
    <Main
      title="Stocks"
      description="My stock history"
    >
      <article className="post" id="stocks">
        <header>
          <div className="title">
            <h2 data-testid="heading"><Link to="/resume">Click here to open my resume again!</Link></h2>
          </div>
        </header>
      </article>
    </Main>
  );
}

export default Resume;
