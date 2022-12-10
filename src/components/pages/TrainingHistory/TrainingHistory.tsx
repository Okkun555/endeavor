import { useNavigate } from 'react-router-dom';

const TrainingHistory = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>History</div>
      <button onClick={() => navigate('/training/items')}>Items</button>
    </>
  );
};

export default TrainingHistory;
