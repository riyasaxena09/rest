import CartIcon from "../Cart/CartIcon";
import classes from './Headercardbutton.module.css';
function Headercardbutton(props){
    return(
        <button className={classes.button}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Your cart</span>
            <span className={classes.badge}>3</span>
        </button>
    )
}
export default Headercardbutton;