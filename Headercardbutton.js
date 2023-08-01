import CartIcon from "../Cart/CartIcon";
import { useContext } from "react";
import Cartcontext from "../../store/cart-context";
import classes from './Headercardbutton.module.css';
function Headercardbutton(props){
  
   const ctx=useContext(Cartcontext);
   const num=ctx.items.reduce((concur,item)=>{
     return concur+item.amount;
   },0);
    console.log(props)
    return(
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Your cart</span>
            <span className={classes.badge}>{num}</span>
        </button>
    )
}
export default Headercardbutton;