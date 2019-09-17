import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';

const Nav = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
`;

const Landing = styled.div`
  height: 100vh;
  position: relative;
`;

const LandingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;

const ContactMeImg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  display: inline-block;
  vertical-align: middle;
`;

const ContactMe = styled.div`
  flex: 1;
`;

const ContactMeLink = styled.a`
  color: #ff3367;
  text-decoration: none;
  display: inline-block;
  vertical-align: middle;
`;

const NavIcons = styled.div`
  flex: 1;
  text-align: right;
`;

const NavIconsImg = styled.img`
  width: 20px;
  height: 20px;
`;

const NavIconsLink = styled.a`
  margin-left: 40px;
  display: inline-block;
  vertical-align: middle;
`;

const Purple = styled.span`
  color: #844fff;
`;
const UnList = styled.ul`
  list-style: none;
  margin-top: 30px;
  line-height: 30px;
`;

function App() {
  return (
    <div className="App">
      <Nav>
        <ContactMe>
          <ContactMeLink href="mailto:antje.enzi@gmail.com?subject=Let's%20chat!&amp;body=Please%20reply%20with%20more%20info!">
            <ContactMeImg src="chat logo.png" alt="chat logo" />
            Contact Me
          </ContactMeLink>
        </ContactMe>
        <NavIcons>
          <NavIconsLink href="https://www.linkedin.com/in/antje-enzi-3b318a15/ttps://bit.ly/2tlevDW">
            <NavIconsImg src="003-linkedin.png" alt="linkedin logo" />
          </NavIconsLink>
          <NavIconsLink href="https://twitter.com/Anjilo16">
            <NavIconsImg src="002-twitter.png" alt="twitter logo" />
          </NavIconsLink>
          <NavIconsLink href="https://www.facebook.com/antje.lorenz.1291">
            <NavIconsImg src="001-facebook.png" alt="facebook logo" />
          </NavIconsLink>
        </NavIcons>
      </Nav>
      <Landing>
        <LandingWrapper>
          <div class="langingL">
            <h1>Antje Enzi.</h1>
            <p>
              Hello, my name is Antje Enzi. I am an
              <br /> aspiring Web Developer &amp;{' '}
              <Purple>Product Designer</Purple>.
            </p>
            <UnList>
              <li>
                <p>Website Development</p>
              </li>
              <li>
                <p>UI/UX Consulting</p>
              </li>
              <li>
                <p>Design</p>
              </li>
            </UnList>
          </div>
          <div class="landingR">
            <img
              src="Antje_edited.jpg"
              alt="picture of Antje Enzi"
              width="300px"
            />
          </div>
        </LandingWrapper>
        <img src="http://gdurl.com/kfDQ" alt="scroll down" class="scroll" />
      </Landing>

      <div class="skills">
        <h2>Skills</h2>
        <p>
          Over 10 days of web development experience using
          <br /> these technologies.{' '}
        </p>
        <div class="programs">
          <img src="html5_logo.png" alt="HTML icon" />
          <img src="css3_logo.png" alt="CSS icon" />
          <img src="JS_logo.png" alt="JavaScript icon" />
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
        <UnList>
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
        </UnList>
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
        <UnList>
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
        </UnList>
        <img src="http://gdurl.com/wcd1" alt="project image" class="workImg" />
      </div>

      <div class="footer">
        <a href="https://github.com/antjeenzi">
          <h3 class="blue">More on Github</h3>
        </a>
        <div class="underlineSmall"></div>
      </div>
    </div>
  );
}

export default App;
