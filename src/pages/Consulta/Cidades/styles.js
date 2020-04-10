import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  justify-content: center;
  align-items: center;

  margin: 20px 50px 50px;

  @media (max-width: 425px) {
    margin: 15px 50px 50px;
  }
`;

export const Text = styled.div`
  text-align: center;

  strong {
    font-size: 22px;
    color: #212529;
    font-style: italic;
  }

  p {
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 15px;
    color: #212529;

    @media (max-width: 425px) {
      margin-top: 10px;
    }
  }
`;

export const Selector = styled.div`
  max-width: 1000px;
`;

export const Options = styled.div`
  display: flex;

  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled(Link)`
  width: 300px;
  padding: 20px;
  border-radius: 4px;
  border: none;
  border-top: 3px solid #f8930d;

  background: #fafafa;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 15px;

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
