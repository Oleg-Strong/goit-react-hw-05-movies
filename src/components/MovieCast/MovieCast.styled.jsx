import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const Item = styled.li`
  overflow: hidden;
  width: 250px;

  border-radius: 5px;
  object-fit: cover;
  box-shadow: 0px 0px 9px 3px rgba(0, 0, 0, 0.8);
`;

export const Photo = styled.img`
  width: 100%;
  height: 300px;
`;

export const Rol = styled.p`
  padding: 10px;
  color: white;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
`;
