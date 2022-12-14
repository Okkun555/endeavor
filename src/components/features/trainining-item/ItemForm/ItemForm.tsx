import { FC, useMemo } from 'react';
import './ItemForm.css';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ItemFormInputType } from '../types';
import {
  REQUIRE_MESSAGE,
  SELECT_REQUIRE_MESSAGE,
} from '../../../../config/message';
import SubmitButton from '../../../ui/SubmitButton/SubmitButton';
import { FormType } from '../../common/types';
import { useLoading } from '../../../../hooks/useLoading';
import { useItemForm } from './useItemForm';
import { Col, Form, Row } from 'react-bootstrap';

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
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group as={Row} controlId="name" className="mb-3">
        <Form.Label column="sm" sm={2}>
          種目名
        </Form.Label>
        <Col sm={5}>
          <Form.Control
            placeholder="種目名を入力してください"
            type="text"
            {...register('name', {
              required: `種目名${REQUIRE_MESSAGE}`,
            })}
          />
        </Col>
        {errors.name && (
          <Form.Text className="text-danger ml-2">
            {errors.name.message}
          </Form.Text>
        )}
      </Form.Group>

      <Form.Group as={Row} controlId="part" className="mb-3">
        <Form.Label column="sm" sm={2}>
          対象部位
        </Form.Label>
        <Col sm={5}>
          <Form.Select
            {...register('part', {
              required: `対象部位${SELECT_REQUIRE_MESSAGE}`,
            })}
          />
        </Col>
        {errors.part && (
          <Form.Text className="text-danger ml-2">
            {errors.part.message}
          </Form.Text>
        )}
      </Form.Group>

      <Form.Group as={Row} controlId="unit" className="mb-3">
        <Form.Label column="sm" sm={2}>
          重量単位
        </Form.Label>
        <Col sm={5}>
          <Form.Select
            {...register('unit', {
              required: `重量単位${SELECT_REQUIRE_MESSAGE}`,
            })}
          />
        </Col>
        {errors.unit && (
          <Form.Text className="text-danger ml-2">
            {errors.unit.message}
          </Form.Text>
        )}
      </Form.Group>

      <SubmitButton
        text={buttonText}
        size="sm"
        color="primary"
        isLoading={isLoading}
      />
    </Form>
  );
};

export default ItemForm;
