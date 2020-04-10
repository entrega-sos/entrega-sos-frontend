import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  height: 100px;

  margin: 40px auto;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 20px 50px 50px;
`;

export const Text = styled.div`
  margin-bottom: 30px;

  text-align: center;

  span {
    font-size: 20px;
    font-weight: 500;
  }

  p {
    margin-top: 20px;
    font-size: 15px;
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

  margin-bottom: 20px;

  :first-child {
    margin-left: 0;
  }

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
