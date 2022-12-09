import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useAppDispatch } from '../app/hooks'
import { getFormData } from '../app/Slices/getProductsSlice'
import { setAdmin } from '../app/Slices/getProductsSlice'
import { VscChromeClose } from "react-icons/vsc";
import styles from './AdminPanel.module.scss'



const AdminPanel: React.FC = () => {
  const dispatch = useAppDispatch();
  type formStateType = {
    brand: string,
    price: number,
    description: string,
    category: string,
    gender: string,
    image: string,
    rate: number,
    count: number
  }

  const {
    register,
    reset,
    handleSubmit,
    formState: {
      isSubmitSuccessful,
      errors
    }
  } = useForm<formStateType>({ "mode": "onSubmit" });

  const onSubmit = handleSubmit(({ brand, price, description, category, gender, image, count }) => {
    const sendingData = {
      brand,
      price: Number(price),
      description,
      category,
      gender,
      image,
      rating: {
        count: Number(count)
      }
    }
    dispatch(getFormData(sendingData));
    dispatch(setAdmin(false));

  });

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful])

  return (
    <div className={styles.admin_panel}>
      <VscChromeClose size={40} className={styles.close_button} onClick={() => dispatch(setAdmin(false))} />
      <form onSubmit={onSubmit}>
        <input type="text" required {...register("brand")} placeholder="Brand" />
        <input type="text" required {...register("price")} placeholder="Price" />
        <input type="text" required {...register("description")} placeholder="Description" />
        <input type="text" required {...register("category")} placeholder="Category" />
        <input type="text" required {...register("gender")} placeholder="Gender" />
        <input type="text" required {...register("image")} placeholder="Image" />
        <input type="text" required {...register("count")} placeholder="Count" />
        <input type="submit" value="ADD" />
      </form>
    </div>
  )
}


export default AdminPanel;