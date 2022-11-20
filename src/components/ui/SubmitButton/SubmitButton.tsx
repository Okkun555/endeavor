import { FC } from 'react';
import { Button } from 'react-bootstrap';

type PropsType = {
  text: string;
  color: string;
  size: 'lg' | 'sm';
  width: number;
  onClick: () => void;
};

const SubmitButton: FC<PropsType> = ({ text, size, width, onClick }) => {
  return (
    <Button size={size} onClick={onClick}>
      {text}
    </Button>
  );
};

export default SubmitButton;
