import React, { useEffect, useState } from 'react';
import AdminPanel from '../AdminPanel/AdminPanel';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { getProducts, deleteProduct, setAdmin } from '../app/Slices/getProductsSlice';
import Dialog from '../Dialog/Dialog';
import styles from './Products.module.scss';



const Products: React.FC = () => {
    const { products, admin } = useAppSelector(state => state.productsData);
    const dispatch = useAppDispatch();
    const [dialog, setDialog] = useState<boolean>(false);
    const [item, setItem] = useState<{ id: string, brand: string }>();

    useEffect(() => {
        dispatch(getProducts());
    }, [])


    const setter = ({ id, brand }: { id: string, brand: string }) => {
        setItem({ id, brand });
        setDialog(true);
    }



    return (
        <div className={styles.products}>
            <div className={styles.add_product} onClick={() => dispatch(setAdmin(true))}>
                <img src={"../../Images/plus.png"} alt="plus" />
            </div>
            {
                products.map((p) => {
                    return (
                        <div className={styles.product_item} key={p._id}>
                            <img src={p.image} alt="nkar" />
                            <img className={styles.remove_button} src={"../../Images/remove.png"} alt="remove" onClick={() => setter({ id: p._id, brand: p.brand })} />
                        </div>
                    )
                })
            }
            {dialog && <Dialog item={item} setDialog={setDialog} />}
            {admin && <AdminPanel />}
        </div>
    )
}


export default Products;