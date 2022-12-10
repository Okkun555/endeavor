import { FC, useMemo } from 'react';
import './ItemForm.css';
import { useForm } from 'react-hook-form';
import { ItemFormInputType, parts } from '../types';
import { REQUIRE_MESSAGE } from '../../../../config/message';
import SubmitButton from '../../../ui/SubmitButton/SubmitButton';
import { FormType } from '../../common/types';

type ItemFormPropsType = {
  formType: FormType;
};

const ItemForm: FC<ItemFormPropsType> = ({ formType }) => {
  const buttonText = useMemo(
    () => (formType === 'create' ? '登録' : '編集'),
    []
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ItemFormInputType>({
    mode: 'onSubmit',
    defaultValues: {
      name: '',
      part: 1,
      unit: 1,
      type: 1,
      memo: '',
    },
  });

  return (
    <div className="item-form-container">
      <form>
        <div className="item-form-content">
          <div className="form-group mt-3">
            <label htmlFor="name">種目名</label>
            <input
              {...register('name', { required: `種目名${REQUIRE_MESSAGE}` })}
              className="form-control mt-1"
              id="name"
            />
          </div>

          <div className="form-group mt-3">
            <label htmlFor="part">対象部位</label>
            <select
              {...register('part', {
                required: `対象部位${REQUIRE_MESSAGE}`,
              })}
              className="form-control mt-1"
              id="part"
            ></select>
          </div>

          <div className="form-group mt-3">
            <label htmlFor="unit">重量の単位</label>
            <select className="form-control mt-1" id="unit"></select>
          </div>

          <div className="form-group mt-3">
            <label htmlFor="training-type">区分</label>
            <select className="form-control mt-1" id="training-type"></select>
          </div>

          <div className="form-group mt-3">
            <label htmlFor="memo">メモ</label>
            <textarea className="form-control mt-1" id="memo" />
          </div>

          <div className="d-grid mt-4">
            <SubmitButton
              text={buttonText}
              size="sm"
              color="primary"
              isLoading={false}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ItemForm;
