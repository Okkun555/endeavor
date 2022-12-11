import { FC, useMemo } from 'react';
import './ItemForm.css';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ItemFormInputType, itemTypes, targetParts, units } from '../types';
import { REQUIRE_MESSAGE } from '../../../../config/message';
import SubmitButton from '../../../ui/SubmitButton/SubmitButton';
import { FormType } from '../../common/types';
import { useLoading } from '../../../../hooks/useLoading';
import { useItemForm } from './useItemForm';

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

  const { isLoading, startLoading, endLoading } = useLoading();
  const { postRegisterItem } = useItemForm();

  const onSubmit: SubmitHandler<ItemFormInputType> = async (values) => {
    startLoading();
    await postRegisterItem({ ...values });
    endLoading();
  };

  return (
    <div className="item-form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="item-form-content">
          <div className="form-group mt-3">
            <label htmlFor="name">種目名</label>
            <input
              {...register('name', { required: `種目名${REQUIRE_MESSAGE}` })}
              className="form-control mt-1"
              id="name"
            />
            <p className="text-danger mt-2 mb-0" style={{ fontSize: '12px' }}>
              {errors.name?.message}
            </p>
          </div>

          <div className="form-group mt-3">
            <label htmlFor="part">対象部位</label>
            <select
              {...register('part', {
                required: `対象部位${REQUIRE_MESSAGE}`,
              })}
              className="form-select mt-1"
              id="part"
            >
              {targetParts.map((part) => (
                <option value={part.value} key={part.value}>
                  {part.label}
                </option>
              ))}
            </select>
            <p className="text-danger mt-2 mb-0" style={{ fontSize: '12px' }}>
              {errors.part?.message}
            </p>
          </div>

          <div className="form-group mt-3">
            <label htmlFor="unit">重量の単位</label>
            <select
              {...register('unit', {
                required: `重量の単位${REQUIRE_MESSAGE}`,
              })}
              className="form-select mt-1"
              id="unit"
            >
              {units.map((unit) => (
                <option value={unit.value} key={unit.value}>
                  {unit.label}
                </option>
              ))}
            </select>
            <p className="text-danger mt-2 mb-0" style={{ fontSize: '12px' }}>
              {errors.unit?.message}
            </p>
          </div>

          <div className="form-group mt-3">
            <label htmlFor="type">区分</label>
            <select
              {...register('type', {
                required: `区分${REQUIRE_MESSAGE}`,
              })}
              className="form-select mt-1"
              id="training-type"
            >
              {itemTypes.map((itemType) => (
                <option value={itemType.value} key={itemType.value}>
                  {itemType.label}
                </option>
              ))}
            </select>
            <p className="text-danger mt-2 mb-0" style={{ fontSize: '12px' }}>
              {errors.type?.message}
            </p>
          </div>

          <div className="form-group mt-3">
            <label htmlFor="memo">メモ</label>
            <textarea
              {...register('memo', {})}
              className="form-control mt-1"
              id="memo"
            />
          </div>

          <div className="d-grid mt-4">
            <SubmitButton
              text={buttonText}
              size="sm"
              color="primary"
              isLoading={isLoading}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ItemForm;
