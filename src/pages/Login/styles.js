import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  height: 90%;

  display: flex;
  justify-content: center;
  align-items: center;
  background: #f8930d;
`;

export const LoginContent = styled.div`
  width: 30%;
  background: #fafafa;
  padding: 20px;

  width: 310px;

  border: none;
  border-top: 7px solid #eee;
  border-radius: 4px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 425px) {
    width: 250px;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 425px) {
    width: 210px;
  }

  strong {
    font-size: 16px;
    margin-bottom: 10px;
  }

  input {
    padding: 10px;
    border: none;
    height: 45px;
    border-radius: 4px;

    color: #666;

    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
  }
`;

export const LoginButton = styled.button`
  margin-top: 20px;
  height: 45px;
  width: 100%;
  border: none;
  border-radius: 4px;

  background: #f8930d;

  transition: background 0.2s;

  &:hover {
    background: ${darken(0.03, '#f8930d')};
  }

  span {
    font-size: 16px;
    color: #fff;
    font-weight: bold;
  }
`;

export const TextButton = styled.button`
  margin-top: 20px;
  height: 20px;
  width: 100%;
  border: none;
  border-radius: 4px;

  span {
    font-size: 14px;
    color: #f8930d;
    font-weight: 500;
  }
  background: none;
`;
