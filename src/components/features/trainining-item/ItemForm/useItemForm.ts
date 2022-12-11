import { addDoc, collection } from 'firebase/firestore';
import { useCallback } from 'react';
import { db } from '../../../../config/firebase';
import { ItemFormInputType } from '../types';

export const useItemForm = () => {
  // FIXME: Firebaseのポスト処理をまとめて定義できない？
  const postRegisterItem = useCallback(
    async (formValues: ItemFormInputType) => {
      try {
        const { name, part, unit, type, memo } = formValues;
        const trainingItemCollectionRef = collection(db, 'training_items');
        const documentRef = await addDoc(trainingItemCollectionRef, {
          name,
          part,
          unit,
          type,
          memo,
        });

        console.log(documentRef);
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
    []
  );

  return {
    postRegisterItem,
  };
};
