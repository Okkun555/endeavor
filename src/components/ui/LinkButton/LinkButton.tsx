import { FC } from 'react';
import Button from 'react-bootstrap/Button';

type PropsType = {
  text: string;
  color: string;
  onClickLink: () => void;
};

const LinkButton: FC<PropsType> = ({ text, color, onClickLink }) => {
  return (
    <Button variant={color} onClick={onClickLink}>
      {text}
    </Button>
  );
};

export default LinkButton;
