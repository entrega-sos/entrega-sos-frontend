import styled from 'styled-components';
// import { Link } from 'react-router-dom';

// import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -60px;

  @media (max-width: 425px) {
    margin-top: 320px;
  }
`;

export const Content = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 10px;

  @media (max-width: 425px) {
    margin: 10px;
    width: 415px;
  }
`;

export const Text = styled.div`
  margin-bottom: 20px;

  text-align: center;

  span {
    font-size: 20px;
    font-weight: 500;
  }

  p {
    margin-top: 10px;
    font-size: 15px;
  }
`;

export const Card = styled.div`
  width: 100%;
  border-top: 2px solid #eee;

  padding: 20px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  section {
    width: 400px;
    padding: 10px;
    border-radius: 4px;
    border: none;
    border-top: 3px solid #f8930d;

    background: #fafafa;

    display: flex;

    align-items: center;
    justify-content: center;

    margin-top: 20px;

    @media (max-width: 425px) {
      width: 380px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;

      &:first-child {
        margin-top: 0px;
      }
    }

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      img {
        width: 60px;
        height: 60px;
        border-radius: 30px;
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
        margin-right: 10px;
      }

      div.name {
        width: 150px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        p {
          font-size: 12px;
          margin-top: 5px;
        }
      }
    }

    aside {
      width: 125px;

      strong {
        margin-bottom: 2px;
      }

      div {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;

        a {
          color: #000;
          margin-right: 4px;
        }
      }
    }
  }
`;
