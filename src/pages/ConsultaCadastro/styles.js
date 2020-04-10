import styled from 'styled-components';
// import { Link } from 'react-router-dom';

import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  height: 100px;

  margin: 40px auto;

  @media (max-width: 425px) {
    margin: 5px auto;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  margin: 20px 50px 50px;

  @media (max-width: 425px) {
    margin: 15px 50px 50px;
  }
`;

export const Text = styled.div`
  text-align: left;

  strong {
    font-size: 22px;
    color: #212529;
    font-style: italic;
    margin-bottom: 10px;
  }

  span {
    font-size: 14px;
    color: #212529;
    font-style: italic;
    font-weight: 500;
    margin-top: 10px;
  }

  p {
    font-size: 19px;
    color: #212529;
    font-style: italic;
    font-weight: 500;

    @media (max-width: 425px) {
      font-size: 18px;
      color: #212529;
      font-style: italic;
      font-weight: 600;
    }
  }
`;

export const ButtonAdd = styled.button`
  width: 300px;
  padding: 18px;
  border-radius: 4px;
  border: none;
  border-top: 3px solid #f8930d;

  background: #fafafa;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 10px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);

  transition: background 0.2s;

  &:hover {
    background: ${darken(0.03, '#fafafa')};
  }

  svg {
    margin-right: 10px;
  }

  a {
    text-align: center;
    width: 220px;
    color: #000;
  }

  @media (max-width: 1265px) {
    margin-left: 0;
    width: 500px;
  }

  @media (max-width: 1154px) {
    margin-left: 0;
    width: 500px;
  }

  @media (max-width: 425px) {
    margin-left: 0;
    margin-top: 0;
    width: 330px;
    padding: 10px;
  }
`;

export const Options = styled.div`
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media (max-width: 425px) {
    max-width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    div {
      margin: 7px 5px;
    }
  }
`;

export const Bairro = styled.button`
  width: 300px;
  height: 30px;
  border-radius: 4px;
  border: none;
  border-top: 3px solid #f8930d;

  background: #fafafa;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 10px;

  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);

  transition: background 0.2s;

  &:hover {
    background: ${darken(0.03, '#fafafa')};
  }

  span {
    margin-left: 8px;
    color: #000;
  }
`;
