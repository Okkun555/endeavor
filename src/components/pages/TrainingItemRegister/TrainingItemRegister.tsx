import { FC } from 'react';
import { Container } from 'react-bootstrap';
import ItemForm from '../../features/trainining-item/ItemForm/ItemForm';
import Toolbar from '../../ui/Toolbar/Toolbar';

const TrainingItemRegister: FC = () => {
  const title = '種目の追加';

  return (
    <>
      <Toolbar title={title} isMobile={true} />

      <Container>
        <ItemForm formType="create" />
      </Container>
    </>
  );
};

export default TrainingItemRegister;
