import { Fragment } from 'react';
import  ReactDOM  from 'react-dom';
import classes from './Model.module.css';
import { createPortal } from 'react-dom';
function Backdrop(props){
    return(
        <div className={classes.Backdrop}></div>
    )
}
function ModalOverlay(props){
    return(
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
};
let prt=document.getElementById('overlays');
function Modal(props){
    return(
       <Fragment>
        {ReactDOM.createPortal(<Backdrop/>,prt)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,prt)}
       </Fragment>
    )
}
export default Modal;