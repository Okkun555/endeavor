import './TrainingItemList.css';
import AddButton from '../../ui/AddButton/AddButton';
import { useNavigate } from 'react-router-dom';

const TrainingItemList = () => {
  const navigate = useNavigate();

  const onClickAddButton = () => navigate('/training/item');

  return (
    <>
      <div className="btn-container">
        <AddButton onClick={onClickAddButton} />
      </div>
    </>
  );
};

export default TrainingItemList;
