import { Fragment } from "react";
import Headercardbutton from "./Headercardbutton";
import mealsImage from '../../assets/gmail_logo_PNG3.png'
import classes from './Header.module.css'
const Header=(props)=>{
    return(
        <Fragment>
            <header className={classes.header}>
<h1>ReactMeals</h1>
<Headercardbutton></Headercardbutton>
            </header>
            <div className={classes["main-image"]}>
                <img src={mealsImage} alt='A rest'/>
            </div>
        </Fragment>
    );
    }
    export default Header;