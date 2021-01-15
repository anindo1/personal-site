import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <header>
        <Link to="/"><h2>Anindya De</h2></Link>
      </header>
    </section>

    <section className="blurb">
      <h2>What am I up to right now?</h2>
      <p>Right now, I am doing a 8 month internship until September 2021 at SAP
        as a software developer!
      </p>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Anindya De <Link to="/">anindyade.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
