import { FC } from 'react';
import Button from 'react-bootstrap/Button';

type PropsType = {
  text: string;
  color: string;
  size: 'lg' | 'sm';
  onClickLink: () => void;
};

const LinkButton: FC<PropsType> = ({ text, color, size, onClickLink }) => {
  const style = size === 'lg' ? { width: '340px' } : { width: '260px' };

  return (
    <Button variant={color} onClick={onClickLink} size={size} style={style}>
      {text}
    </Button>
  );
};

export default LinkButton;
