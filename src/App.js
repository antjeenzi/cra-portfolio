import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="nav">
        <div class="contactMe">
          <a href="mailto:antje.enzi@gmail.com?subject=Let's%20chat!&amp;body=Please%20reply%20with%20more%20info!">
            <img src="http://gdurl.com/JeSA" alt="chat logo" />
            Contact Me
          </a>
        </div>
        <div class="navIcons">
          <a href="https://bit.ly/2tlevDW">
            <img src="http://gdurl.com/xMXh" alt="youtube logo" />
          </a>
          <a href="#">
            <img src="http://gdurl.com/MOBy" alt="behance logo" />
          </a>
          <a href="#">
            <img src="http://gdurl.com/Un9R" alt="dribble logo" />
          </a>
        </div>
      </div>
      <div class="landing">
        <div class="landingWrapper">
          <div class="langingL">
            <h1>Antje Enzi.</h1>
            <p>
              Hello, my name is Antje Enzi. I am an
              <br /> aspiring Web Developer &amp;{' '}
              <span class="blue">Product Designer</span>.
            </p>
            <ul>
              <li>
                <p>Website Development</p>
              </li>
              <li>
                <p>UI/UX Consulting</p>
              </li>
              <li>
                <p>Design</p>
              </li>
            </ul>
          </div>
          <div class="langingR">
            <img
              src="http://gdurl.com/naXv"
              alt="LaMonte Fields pic"
              width="300px"
            />
          </div>
        </div>
        <img src="http://gdurl.com/kfDQ" alt="scroll down" class="scroll" />
      </div>

      <div class="skills">
        <h2>Skills</h2>
        <p>
          Over 48 hours of web development experience using
          <br /> these programs.{' '}
        </p>
        <div class="programs">
          <img src="http://gdurl.com/ziVh" alt="Xd icon" />
          <img src="http://gdurl.com/V3u2" alt="Ps icon" />
          <img src="http://gdurl.com/BMy6" alt="Ai icon" />
          <img src="http://gdurl.com/cLC4" alt="Ae icon" />
        </div>
      </div>

      <div class="work clearfix">
        <div class="workText">
          <h1>Shopping App</h1>
          <a href="#">
            <h5>View Project</h5>
          </a>
          <div class="underline"></div>
        </div>
        <ul>
          <li>
            <a href="#">
              <img src="http://gdurl.com/ofjk" alt="dribble icon" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="http://gdurl.com/JxAX" alt="behance icon" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="http://gdurl.com/w3SZ" alt="youtube icon" />
            </a>
          </li>
        </ul>
        <img src="http://gdurl.com/rUgY" alt="project image" class="workImg" />
      </div>

      <div class="work2 clearfix">
        <div class="workText">
          <h1>Social App</h1>
          <a href="#">
            <h5>View Project</h5>
          </a>
          <div class="underline"></div>
        </div>
        <ul>
          <li>
            <a href="#">
              <img src="http://gdurl.com/ofjk" alt="dribble icon" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="http://gdurl.com/JxAX" alt="behance icon" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="http://gdurl.com/w3SZ" alt="youtube icon" />
            </a>
          </li>
        </ul>
        <img src="http://gdurl.com/wcd1" alt="project image" class="workImg" />
      </div>

      <div class="footer">
        <a href="https://github.com/lfields90">
          <h3 class="blue">More on Github</h3>
        </a>
        <div class="underlineSmall"></div>
      </div>
    </div>
  );
}

export default App;
