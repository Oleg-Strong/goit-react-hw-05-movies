import styled from '@emotion/styled/macro';
import { Form, Field } from 'formik';
import { FcSearch } from 'react-icons/fc';
export const FormWrapper = styled(Form)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
`;

export const FormInput = styled(Field)`
  padding: 10px;
  font-size: 20px;
  font-weight: 500;
  color: #474747;
  background-color: transparent;
  border-radius: 10px;
  border: none;
  border-bottom: 2px solid black;
  outline: transparent;
  box-shadow: 0px 12px 12px -4px rgba(0, 0, 0, 0.59);
`;

export const ButtontIcon = styled(FcSearch)`
  width: 30px;
  height: 30px;
  transition: all 250ms;
`;

export const FormButtont = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;

  &:hover ${ButtontIcon} {
    transform: scale(1.4);
  }
`;
export const Message = styled.div`
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
  color: white;
  text-shadow: 0 0 5px rgb(255, 221, 0), 0 0 10px rgb(255, 221, 0),
    0 0 15px rgb(255, 221, 0), 0 0 20px rgb(255, 221, 0),
    0 0 30px rgb(255, 221, 0), 0 0 40px rgb(255, 221, 0),
    0 0 55px rgb(255, 221, 0), 0 0 75px rgb(255, 221, 0);
`;
