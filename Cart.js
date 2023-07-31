import classes from './Cart.module.css';
import Modal from '../UI/Model';
function Cart(props){
   const cartItems=( <ul className={classes['cart-item']}>
        {[{id:'c1', name:'sushil',amount:2, price:12.00}].map((item)=>(
            <li>{item.name}</li>
        ))}
    </ul>
   );
return(
    <Modal>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>35.5</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']}>close</button>
            <button className={classes.button}>button</button>
        </div>
        </Modal>
);
};
export default Cart;