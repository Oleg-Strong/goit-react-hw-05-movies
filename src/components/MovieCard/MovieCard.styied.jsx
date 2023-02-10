import styled from '@emotion/styled';
const reatingColor = value => {
  let normalazedValue = Number(value.slice(0, -1));

  if (normalazedValue <= 40) {
    return 'rgb(255, 0, 0)';
  } else if (normalazedValue > 40 && normalazedValue < 70) {
    return 'rgb(255, 247, 0)';
  } else if (normalazedValue >= 70) {
    return 'rgb(87, 217, 0)';
  }
};

export const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 15px;
  padding: 30px;
  border-radius: 5px;
  box-shadow: inset 0px 0px 17px 7px rgba(0, 0, 0, 0.72);
`;

export const MovieTitle = styled.h2`
  margin-bottom: 30px;
  text-align: center;
  font-weight: 700;
  font-size: 40px;
  color: white;
  text-shadow: 0 0 5px rgb(252, 5, 5), 0 0 10px rgb(252, 5, 5),
    0 0 15px rgb(252, 5, 5), 0 0 20px rgb(252, 5, 5), 0 0 30px rgb(252, 5, 5),
    0 0 40px rgb(252, 5, 5), 0 0 55px rgb(252, 5, 5), 0 0 75px rgb(252, 5, 5);
`;

export const CategoryTitle = styled.h3`
  margin-bottom: 12px;
  font-size: 20px;

  color: #8a8a8a;
  text-shadow: 0 0 5px rgb(0, 0, 0), 0 0 10px rgb(0, 0, 0),
    0 0 15px rgb(0, 0, 0), 0 0 20px rgb(0, 0, 0), 0 0 30px rgb(0, 0, 0),
    0 0 40px rgb(0, 0, 0), 0 0 55px rgb(0, 0, 0), 0 0 75px rgb(0, 0, 0);
`;
export const CategoryText = styled.p`
  margin-bottom: 20px;
  font-size: 15px;
  font-weight: 500;
  color: rgb(0, 0, 0);
`;
export const Score = styled.span`
  padding: 5px;
  font-size: 20px;
  color: #000000;
  text-shadow: none;
  background-color: ${props => reatingColor(props.score)};

  border-radius: 7px;
`;

export const Picture = styled.img`
  border-radius: 5px;
  height: 500px;
`;
