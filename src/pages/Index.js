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
        Hello! I am a software developer who loves developing exciting, innovative projects.
        I am also really passionate about learning more about the stock market -
        who doesn&apos;t love the chance to make money! I have
        even included a section in this website where I show my entire
        <Link to="/stocks"> stock portfolio</Link> if anyone is curious.
        In my free time outside of coding and investing, I love playing
        League of Legends (currently hardstuck diamond 4), watching
        basketball (Nets fan because of Harden), playing card games like Poker and Blackjack,
        and playing chess.
      </p>
      <p>Feel free to check out my {' '}
        <Link to="/stocks">stock portfolio</Link> to know all about my current and past positions, as well as how much money I am making! {' '}
        Or you can check out my <Link to="/projects">projects</Link>, {' '}
        <a href="https://drive.google.com/file/d/1nShjris2TkdGQ5Um4G2hEwiwxhFcWAnx/view?usp=sharing">resume, </a>
        or <Link to="/contact">contact</Link> me!
      </p>
      <h2>About the website</h2>
      <p>Welcome to my website that was adapted from <a href="https://mldangelo.github.io/personal-site/">Michael D&apos;Angelo&apos;s website. </a>
        This is an <a href="ENTER MY GITHUB LINK">open source project</a> that you are free to adapt and use for yourself!
      </p>
    </article>
  </Main>
);

export default Index;
