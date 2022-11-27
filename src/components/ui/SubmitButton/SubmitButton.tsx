import { FC } from 'react';
import { Button } from 'react-bootstrap';

type PropsType = {
  text: string;
  color: string;
  size: 'lg' | 'sm';
  isLoading: boolean;
};

const SubmitButton: FC<PropsType> = ({ text, size, isLoading }) => {
  return isLoading ? (
    <Button size={size} type="submit" disabled>
      <span
        className="spinner-border spinner-border-sm"
        role="status"
        aria-hidden="true"
      ></span>
      <span style={{ marginLeft: '8px' }}>waiting...</span>
    </Button>
  ) : (
    <Button size={size} type="submit">
      {text}
    </Button>
  );
};

export default SubmitButton;
