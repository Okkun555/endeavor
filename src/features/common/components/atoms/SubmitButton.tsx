import { FC } from 'react';
import styled from 'styled-components';
import {
  DisableButton,
  DisableText,
  HoverButton,
  Main,
  White,
} from '../../../../config/color';

type PropsType = {
  text: string;
  disabled: boolean;
};

const SubmitButton: FC<PropsType> = ({ text, disabled = false }) => {
  return <Button disabled={disabled}>{text}</Button>;
};

export default SubmitButton;

const Button = styled.button`
  background-color: ${Main};
  color: ${White};
  border: 0;
  border-radius: 5px;
  padding: 8px 16px;
  font-size: 16px;

  &:hover {
    background-color: ${HoverButton};
    cursor: pointer;
  }

  &:disabled {
    background-color: ${DisableButton};
    color: ${DisableText}
    cursor: not-allowed;
  }
`;
