import styled from 'styled-components';
import { darken } from 'polished';

export const LoginContainer = styled.div`
  width: 100%;
  height: 90%;

  display: ${props => (props.visible ? 'flex' : 'none')};
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

//
//
//
// CADASTRO
//
//
//

export const Container = styled.div`
  width: 100%;
  display: ${props => (props.show ? 'flex' : 'none')};

  margin: 40px auto;
`;

export const Content = styled.div`
  display: ${props => (props.show ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  form {
    width: 95%;
    background: #fafafa;
    padding: 20px 40px;

    border: none;
    border-top: 7px solid #f8930d;
    border-radius: 4px;

    @media (max-width: 425px) {
      width: 95%;
      padding: 5px;
    }

    aside {
      margin-top: 20px;
      display: flex;

      justify-content: flex-end;

      @media (max-width: 425px) {
        margin-top: 20px;
        display: flex;

        justify-content: center;
      }
    }
  }
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

export const Personal = styled.div`
  display: flex;

  padding-bottom: 20px;
  border-bottom: 2px solid #eee;

  @media (max-width: 425px) {
    display: flex;

    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const PersonalContent = styled.div`
  display: flex;
  flex-direction: column;

  width: 600px;

  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 300px;

    margin-top: 20px;
  }

  nav {
    strong {
      margin-left: 8px;
      font-size: 20px;
      font-style: italic;
    }
  }

  div {
    display: flex;
    flex-direction: column;

    justify-content: flex-start;
    align-items: flex-start;

    @media (max-width: 425px) {
      display: flex;
      flex-direction: column;

      justify-content: center;
      align-items: center;
    }

    input {
      width: 300px;
      padding: 10px;

      border: none;
      border-radius: 3px;

      border: 1px solid #eee;

      color: #666;
      margin-top: 5px;

      @media (max-width: 425px) {
        width: 350px;
      }
    }
  }

  span {
    margin-top: 10px;

    @media (max-width: 425px) {
      align-self: flex-start;
      font-weight: 500;
    }
  }

  :last-child {
    margin-left: 30px;
    @media (max-width: 425px) {
      margin-left: 0px;
    }
  }
`;

export const Address = styled.div`
  display: flex;

  padding: 20px 0;
  border-bottom: 2px solid #eee;

  @media (max-width: 425px) {
    display: flex;

    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const AddressContent = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 300px;

    margin-top: 20px;
  }

  nav {
    strong {
      margin-left: 8px;
      font-size: 20px;
      font-style: italic;
    }
  }

  main {
    width: 100%;
    display: flex;
    flex-direction: row;

    @media (max-width: 425px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      width: 100%;
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      margin-right: 70px;

      @media (max-width: 425px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        width: 350px;

        margin-right: 0px;
      }

      span {
        margin-top: 10px;

        @media (max-width: 425px) {
          align-self: flex-start;
          font-weight: 500;
        }
      }

      input {
        width: 300px;
        padding: 10px;

        border: none;
        border-radius: 3px;

        border: 1px solid #eee;

        color: #666;
        margin-top: 5px;

        @media (max-width: 425px) {
          width: 350px;
        }
      }

      select {
        width: 300px;
        height: 40px;
        padding: 10px;

        font-size: 14px;
        color: #666;

        border: none;
        border-radius: 3px;

        border: 1px solid #eee;

        background: #fff;
        margin-top: 5px;

        @media (max-width: 425px) {
          width: 350px;
        }
      }
    }
  }
`;

export const Other = styled.div`
  display: flex;

  padding: 20px 0;

  @media (max-width: 425px) {
    display: flex;

    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const OtherContent = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 300px;
  }

  nav {
    strong {
      margin-left: 8px;
      font-size: 20px;
      font-style: italic;
    }
  }

  div {
    display: flex;
    justify-content: space-between;

    @media (max-width: 425px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      width: 100%;
    }

    main {
      display: flex;
      flex-direction: column;

      justify-content: flex-start;
      align-items: flex-start;

      @media (max-width: 425px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        width: 350px;
      }

      span {
        margin-top: 10px;

        @media (max-width: 425px) {
          align-self: flex-start;
          font-weight: 500;
        }
      }

      input {
        width: 300px;
        padding: 10px;

        border: none;
        border-radius: 3px;

        border: 1px solid #eee;

        color: #666;
        margin-top: 5px;

        @media (max-width: 425px) {
          width: 350px;
        }
      }

      select {
        width: 300px;
        height: 40px;
        padding: 10px;

        font-size: 14px;
        color: #666;

        border: none;
        border-radius: 3px;

        border: 1px solid #eee;

        background: #fff;
        margin-top: 5px;

        @media (max-width: 425px) {
          width: 350px;
        }
      }
    }
  }
`;

export const Payment = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;

  @media (max-width: 425px) {
    input.input {
      padding: 0;
      margin: 0;
    }
  }

  .row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media (max-width: 425px) {
      justify-content: flex-start;
    }

    span.radio {
      margin-right: 10px;

      @media (max-width: 425px) {
        margin-right: 0px;
      }
    }

    .input {
      padding: none;
    }
  }

  span {
    margin-bottom: 7px;
  }

  div {
    display: block;

    div {
      display: flex;
      flex-direction: row;

      @media (max-width: 425px) {
        flex-direction: row;
        justify-content: flex-start;
      }
    }
  }
`;

export const ConfirmButton = styled.button`
  width: 200px;
  padding: 10px;
  border-radius: 4px;
  border: none;
  border-top: 3px solid #ff5400;

  background: #f8930d;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;

  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);

  transition: background 0.2s;

  &:hover {
    background: ${darken(0.03, '#f8930d')};
  }

  span {
    margin-left: 5px;
    color: #fff;
  }

  @media (max-width: 425px) {
    margin-bottom: 20px;
  }
`;
