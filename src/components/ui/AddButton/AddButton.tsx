import { FC } from 'react';
import { IoMdAddCircle } from 'react-icons/io';

type AddButtonPropsType = {
  onClick: () => void;
};

// FIXME: カラーをprimaryなどで管理せずファイルで管理する
const AddButton: FC<AddButtonPropsType> = ({ onClick }) => (
  <IoMdAddCircle onClick={onClick} size={64} color="blue" />
);

export default AddButton;
