import { FC } from 'react';
import { Button } from 'react-bootstrap';

type PropsType = {
  text: string;
  color: string;
  size: 'lg' | 'sm';
  width: number;
};

const SubmitButton: FC<PropsType> = ({ text, size, width }) => {
  return (
    <Button size={size} type="submit">
      {text}
    </Button>
  );
};

export default SubmitButton;
