import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;

  @media (max-width: 425px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 50px;

  .box {
    display: flex;

    @media (max-width: 1054px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    @media (max-width: 425px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  @media (max-width: 425px) {
    flex-direction: column;
    margin: 10px 20px;
  }
  @media (max-width: 1054px) {
    flex-direction: column;
  }
`;

export const Title = styled.span`
  font-size: 8rem;
  font-weight: 500;
  font-style: italic;
  color: #212529;

  @media (max-width: 425px) {
    display: none;
    font-size: 4.5rem;
    text-align: center;
    order: 1;
  }
`;

export const TextBox = styled.div`
  margin-left: 10px;

  @media (max-width: 425px) {
    margin-left: 0px;
  }

  p {
    margin-bottom: 20px;
    text-justify: newspaper;
    font-size: 2rem;
    line-height: 3rem;
    font-weight: 500;
    color: #212529;
    img {
      vertical-align: middle;
    }

    @media (max-width: 425px) {
      font-size: 1.5rem;
      line-height: 2.5rem;
      order: 2;

      text-align: justify;
    }
  }
`;

export const ImageBox = styled.div`
  margin-right: 10px;
  img {
    width: 500px;

    @media (max-width: 1137px) {
      width: 400px;
      order: 3;
      margin-bottom: 20px;
    }

    @media (max-width: 1054px) {
      width: 300px;
      order: 3;
      margin-bottom: 20px;
    }

    @media (max-width: 425px) {
      width: 300px;
      order: 3;
      margin-bottom: 20px;
    }
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  max-width: 620px;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: flex-end;
  position: absolute;
  top: 400px;
  left: 65px;

  @media (max-width: 1265px) {
    display: flex;
    max-width: 400px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 430px;
    left: 15px;
  }

  @media (max-width: 1154px) {
    display: flex;
    max-width: 400px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 530px;
    left: 65px;
  }

  @media (max-width: 1054px) {
    position: relative;
    max-width: 500px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
  }

  @media (max-width: 425px) {
    position: relative;
    width: 300px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
  }
`;

export const ButtonSearch = styled.button`
  width: 300px;
  padding: 18px;
  border-radius: 4px;
  border: none;
  border-top: 3px solid #ff5400;

  background: #f8930d;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 10px;

  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);

  transition: background 0.2s;

  &:hover {
    background: ${darken(0.03, '#f8930d')};
  }

  span {
    margin-left: 5px;
    color: #fff;
  }

  @media (max-width: 1265px) {
    margin-right: 0;
    width: 500px;
  }

  @media (max-width: 1154px) {
    margin-right: 0;
    width: 500px;
  }

  @media (max-width: 1054px) {
    margin-right: 0;
    width: 500px;
  }

  @media (max-width: 425px) {
    margin-right: 0;
    width: 300px;
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
    width: 300px;
  }
`;

export const ButtonBoxBottom = styled.div`
  display: flex;
  max-width: 610px;
  margin-top: 10px;

  @media (max-width: 1265px) {
    width: 500px;
  }

  @media (max-width: 1154px) {
    width: 500px;
  }

  @media (max-width: 425px) {
    width: 300px;
  }
`;

export const ButtonVoluntarios = styled.div`
  width: 620px;
  padding: 18px;
  border-radius: 4px;
  border: none;
  border-top: 3px solid #f8930d;

  background: #fafafa;

  display: flex;
  justify-content: center;
  align-items: center;

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
`;
