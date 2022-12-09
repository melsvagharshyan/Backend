import styles from './Dialog.module.scss';
import React from 'react'
import { useAppDispatch } from '../app/hooks';
import { deleteProduct } from '../app/Slices/getProductsSlice';
import Button from '@mui/material/Button';


type dialogProps = {
    item: { id: string, brand: string } | any,
    setDialog: (val: boolean) => void
}

const Dialog: React.FC<dialogProps> = ({ item, setDialog }) => {
    const dispatch = useAppDispatch();

    const Delete = () => {
        dispatch(deleteProduct(item.id));
        setDialog(false);
    }

    return (
        <div className={styles.deleteContainer}>
            <div className={styles.isDelete}>
                <h3>Are you sure you want to delete ?</h3>
                <div className={styles.item_name}><h4>{item.brand}</h4></div>
                <div className={styles.buttons}>
                    <Button variant="contained" onClick={() => Delete()} className={styles.yes}>Yes</Button>
                    <Button variant="contained" className={styles.no} onClick={() => setDialog(false)}>No</Button>
                </div>
            </div>
        </div>
    )
}


export default Dialog;