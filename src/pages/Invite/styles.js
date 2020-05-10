import styled from 'styled-components';
import { shade } from 'polished';
import { device } from './device';

export const Container = styled.div`
  max-width: 2256px;
  width: 100%;
  display: flex;
  height: 100vh;
  flex: 1;
`;

export const Content = styled.div`
  flex-direction: column;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  header{
    margin-bottom: 140px;
    display: flex;
    background: #f7f7f7;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 56px;

    img {
      margin-right: 11px;
    }

    p {
      font-family: 'Roboto 'sans-serif;
      font-style: normal;

      strong{
        color: #1f1f1f;
        font-weight: bold;
        line-height: 23px;
        font-size: 20px;
      }

    }

  }

`;

export const Main = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 528px;
  margin-right: 40px;

  max-width: 1900px;
  width: 100%;

  h3 {
      font-weight: bold;
      font-size: 47px;
      line-height: 55px;
    }

    p {
      font-weight: 500;
      font-size: 21px;
      line-height: 25px;

  }
`;

export const SectionOne = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40.95px;

  div {
    margin-left: 54.6px;

  }

`;

export const DescriptionOne = styled.div`
    margin-bottom: 60px;

  h2 {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 47.1518px;
    line-height: 55px;
  }

  p {
    line-height: 35px;
    font-size: 25px;
    color: #141414;

    opacity: 0.5;
  }

  strong{
    font-size: 29.7801px;
  }

`;

export const Circle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 40.95px;

    width: 164px;
    height: 164px;
    border-radius: 50%;
    background: #29D8DA;
    color: #fff;
    `;

export const DescriptionTwo = styled.div`
   margin-bottom: 60px;
  h2 {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 47.1518px;
    line-height: 55px;
  }

  p {
    line-height: 35px;
    font-size: 25px;
    color: #141414;

    opacity: 0.5;
  }

  strong{
    font-size: 29.7801px;
  }

`;

export const SectionTwo = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40.95px;
  margin-right: 40px;

  div {
    margin-left: 54.6px;

  }

`;

export const CircleTwo = styled.div`
 display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 40.95px;

    width: 164px;
    height: 164px;
    border-radius: 50%;
    background: #2978DA;
    color: #fff;

`;

export const Footer = styled.footer`
height: 100vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
background: #F3DB7C;
margin-bottom: -77.43px;
flex: 1;


input {

  width: 339px;
  height: 65px;
  margin-right: 11px;
  background: #fff;
  border: 1px solid #d8d8d8;

  font-size: 21.6px;
  line-height: 26px;
  color: #b8b8b8;
    padding-left: 69px;


  &::placeholder {
    color: #b8b8b8;
    font-size: 21.6px;
    line-height: 26px;

  }

}
  svg {
    position: absolute;
    margin-top:  19.5px;
    margin-left: 27px;
    color: #b8b8b8;
    text-align: center;
  }
`;

export const Button = styled.button`
  width: 689px;
  height: 68px;
  background: #E89615;
  border: 0;
  color:#fff;
  cursor: pointer;
  margin-top: 16px;
  transition:  0.2s;

  font-size: 25.92px;
  line-height: 30px;

  &:hover {
    background: ${shade(0.2, '#E89615')};
  }

  `;

