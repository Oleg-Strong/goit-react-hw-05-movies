import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;

  flex-direction: column;
  gap: 20px;

  padding-bottom: 30px;
`;
export const Author = styled.h2`
  display: flex;
  align-items: center;
  gap: 20px;
  color: #8a8a8a;
  text-shadow: 0 0 5px rgb(0, 0, 0), 0 0 10px rgb(0, 0, 0),
    0 0 15px rgb(0, 0, 0), 0 0 20px rgb(0, 0, 0), 0 0 30px rgb(0, 0, 0),
    0 0 40px rgb(0, 0, 0), 0 0 55px rgb(0, 0, 0), 0 0 75px rgb(0, 0, 0);
`;

export const AuthorText = styled.p`
  margin-top: 20px;
  padding-left: 50px;
  padding-right: 40px;
  font-size: 15px;
  font-weight: 500;
  color: rgb(0, 0, 0);
`;

export const AuthorName = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: rgb(255, 255, 255);
`;
