import React from 'react';
import {
  Container,
  Content,
  Main,
  Circle,
  CircleTwo,
  SectionOne,
  SectionTwo,
  Footer,
  Button,
  DescriptionOne,
  DescriptionTwo,
} from './styles';
import logoImg from '../../assets/logo.svg';
import { FiMail, FiLock } from 'react-icons/fi';

const Invite = () => {
  return (
    <>
      <Container>
        <Content>
          <header>
            <img src={logoImg} alt="logo" />
            <p>
              <strong>Jifcast Pro</strong> lets you create{' '}
              <strong>micro-podcasts</strong> and{' '}
              <strong>broadcast LIVE </strong>{' '}
            </p>
          </header>
          <Main>
            <SectionOne>
              <Circle>
                <h3>5 min</h3>
                <p>podcasts</p>
              </Circle>
              <DescriptionOne>
                <h2>Why 5 minute podcast?</h2>
                <p>
                  <strong>Less effort</strong>, More returns <br />
                  <strong>Previews</strong> for your main podcast
                </p>
              </DescriptionOne>
            </SectionOne>

            <SectionTwo>
              <CircleTwo>
                <h3>LIVE</h3>
                <p>broadcst</p>
              </CircleTwo>

              <DescriptionTwo>
                <h2>Why LIVE broadcast?</h2>
                <p>
                  <strong>Engage</strong> your existing audience
                  <br />
                  <strong>Discover</strong> new audience
                </p>
              </DescriptionTwo>
            </SectionTwo>
          </Main>

          <Footer>
            <form>
              <div>
                <FiMail size={27} />
                <input type="text" placeholder="Email" />
                <FiLock size={27} />

                <input type="password" placeholder="Password" />
              </div>

              <Button type="submit">Get Started </Button>
            </form>
          </Footer>
        </Content>
      </Container>
    </>
  );
};

export default Invite;
