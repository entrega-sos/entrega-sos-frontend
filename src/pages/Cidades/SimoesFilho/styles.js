import styled from 'styled-components';
import { darken } from 'polished';

//
// HEADER

export const HeaderContainer = styled.header`
  background: none;
  height: 70px;
  margin-top: -70px;
  display: ${props => (props.show || props.card ? 'flex' : 'none')};
  justify-content: space-between;
  align-items: center;

  svg {
    margin: 0 15px;
  }
`;

export const HeaderButton = styled.button`
  display: ${props => (props.show ? 'flex' : 'none')};

  background: none;
  border: none;
  margin-right: 15px;
  margin-bottom: 2px;
`;

export const HeaderButton2 = styled.button`
  display: ${props => (props.card ? 'flex' : 'none')};

  background: none;
  border: none;
  margin-right: 15px;
  margin-bottom: 2px;
`;
//
//

export const Container = styled.div`
  width: 100%;
  height: 100px;

  margin: 40px auto;

  @media (max-width: 425px) {
    margin: 15px auto;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.div`
  text-align: center;
  color: #212529;

  display: flex;
  flex-direction: column;

  strong {
    font-size: 22px;
    color: #212529;
    margin-bottom: 20px;
    font-style: italic;

    @media (max-width: 425px) {
      margin-bottom: 10px;
    }
  }

  span {
    font-size: 20px;
    font-weight: 500;
  }

  p {
    color: #212529;
    margin-bottom: 10px;
    font-size: 15px;
  }
`;

export const GoBack = styled.button`
  display: ${props => (props.show ? 'flex' : 'none')};
  justify-content: flex-start;
  align-items: center;
  border: none;
  font-size: 14px;
  font-weight: 500;
  color: #f8930d;
  margin-left: 15px;
  margin-top: -20px;

  svg {
    margin-right: 5px;
  }
`;

export const Options = styled.div`
  max-width: 1000px;
  display: ${props => (props.visible ? 'flex' : 'none')};

  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Bairro = styled.button`
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

//
//
//
// LOJAS
//
//
//

export const Stores = styled.div`
  max-width: 1000px;
  display: ${props => (props.show ? 'flex' : 'none')};
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Places = styled.button`
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

  div.title {
    font-weight: bold;
  }

  div.info,
  div.horario {
    font-size: 12px;
  }

  span {
    color: #000;
  }
`;

//
//
//
// ESTABELECIMENTO
//
//
//

export const StoreCard = styled.div`
  width: 95%;
  background: #fafafa;
  padding: 20px 40px;
  display: ${props => (props.card ? 'flex' : 'none')};
  flex-direction: column;
  border: none;
  border-top: 7px solid #f8930d;
  border-radius: 4px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 425px) {
    width: 95%;
    padding: 5px;
  }
`;

export const Personal = styled.div`
  display: ${props => (props.card ? 'flex' : 'none')};

  padding-bottom: 20px;
  border-bottom: 2px solid #eee;

  @media (max-width: 425px) {
    display: ${props => (props.card ? 'flex' : 'none')};

    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

export const PersonalContent = styled.div`
  display: flex;
  flex-direction: column;

  width: 600px;

  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    width: 350px;

    margin-top: 20px;
    margin-left: 20px;
  }

  nav {
    p {
      margin-top: 10px;
      margin-right: 5px;
      font-size: 16px;
    }

    strong {
      margin-left: 8px;
      font-size: 20px;
      font-style: italic;

      @media (max-width: 425px) {
        font-size: 20px;
        font-style: italic;
      }
    }
  }

  div {
    display: flex;
    flex-direction: row;

    justify-content: flex-start;
    align-items: center;

    @media (max-width: 425px) {
      display: flex;
      flex-direction: row;

      justify-content: flex-start;
      align-items: center;
    }
  }

  svg {
    margin-right: 5px;
  }

  span {
    font-weight: bold;
    margin-top: 10px;
    margin-right: 5px;

    @media (max-width: 425px) {
      align-self: flex-start;
      font-weight: bold;

      margin-top: 10px;
      margin-right: 5px;
    }
  }

  p {
    margin-top: 10px;
    font-weight: 500;

    font-size: 16px;
  }

  a {
    margin-top: 10px;
    margin-right: 5px;
    font-size: 16px;
  }

  main {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;

    button {
      border: none;
      padding: 10px;
      width: 545px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
      background: #f8930d;

      @media (max-width: 425px) {
        width: 350px;
        margin-top: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      @media (max-width: 375px) {
        width: 300px;
        margin-top: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      @media (max-width: 320px) {
        width: 250px;
        margin-top: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      margin-top: 20px;
      > a {
        color: #fff;
        margin-top: 0px;
        margin-right: 0px;
        margin-left: 5px;
      }
    }

    @media (max-width: 425px) {
      display: flex;
      flex-wrap: none;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;

      width: 350px;
    }

    @media (max-width: 375px) {
      display: flex;
      flex-wrap: none;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;

      width: 300px;
    }

    @media (max-width: 320px) {
      display: flex;
      flex-wrap: none;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;

      width: 250px;
    }

    div {
      margin-top: 10px;

      :last-child {
        margin-left: 10px;

        @media (max-width: 425px) {
          margin-left: 0px;
        }

        @media (max-width: 320px) {
          margin-left: 0px;
          width: 230px;
        }
      }

      strong {
        font-weight: 500;

        @media (max-width: 320px) {
          width: 230px;
        }

        > span {
          border: none;

          img {
            vertical-align: middle;
          }
        }
      }
    }
  }

  :last-child {
    margin-left: 30px;

    @media (max-width: 425px) {
      margin-left: 20px;
    }
  }
`;

export const Address = styled.div`
  display: flex;

  padding: 20px 0;
  border-top: 2px solid #eee;

  @media (max-width: 425px) {
    margin-left: 20px;
    display: flex;

    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }

  @media (max-width: 375px) {
    margin-left: 20px;
    display: flex;

    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }

  @media (max-width: 320px) {
    margin-left: 20px;
    display: flex;

    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

export const AddressContent = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    width: 350px;
  }

  @media (max-width: 320px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    width: 250px;
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
      align-items: flex-start;
      justify-content: flex-start;

      width: 350px;
    }

    @media (max-width: 320px) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;

      width: 300px;
    }

    div {
      display: flex;

      margin-right: 70px;

      span {
        font-weight: bold;
        margin-top: 10px;
        margin-right: 5px;
      }

      p {
        margin-top: 10px;
        font-weight: 500;

        font-size: 16px;
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

  @media (max-width: 320px) {
    margin-left: 20px;
    display: flex;

    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

export const OtherContent = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    width: 350px;
  }

  @media (max-width: 375px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    width: 300px;
  }

  @media (max-width: 320px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    width: 280px;
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
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;

      width: 100%;
    }

    @media (max-width: 320px) {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;

      width: 250px;
    }

    main {
      display: flex;
      flex-direction: column;

      justify-content: flex-start;
      align-items: flex-start;

      span {
        font-weight: bold;
        margin-right: 5px;
        margin-top: 10px;

        @media (max-width: 425px) {
          align-self: flex-start;
          font-weight: bold;
          margin-top: 10px;
          margin-right: 5px;
        }

        @media (max-width: 320px) {
          align-self: flex-start;
          font-weight: bold;
          margin-top: 10px;
          margin-right: 5px;
        }
      }

      p {
        margin-top: 10px;
        font-weight: 500;

        font-size: 16px;
      }

      div.pagamento-box {
        display: flex;
        flex-wrap: wrap;

        @media (max-width: 320px) {
          width: 150px;
        }
      }
      p.pagamento {
        margin-right: 10px;
      }
    }
  }
`;

export const Payment = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 425px) {
    flex-direction: row;
  }

  div.pagamento-box {
    display: flex;
    flex-direction: row;
  }

  p.pagamento {
    margin-right: 10px;
  }
`;
