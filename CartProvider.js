import CartContext from "./cart-context";
import { useReducer } from "react";
const defaultcart={
    items:[],
totalAmount:0
}
const cartReducer=(state,action)=>{
    if(action.type==='ADD'){
        const updatedtotalAmount=
        state.totalAmount + action.item.price * action.item.amount;

        const existingCartItemIndex=state.items.findIndex(
            (item)=>item.id===action.item.id
        );
const exisitingCartItem=state.items[existingCartItemIndex];
let updatedItems;

if(exisitingCartItem){
const updatedItem={
    ...exisitingCartItem,
    amount:exisitingCartItem.amount+action.item.amount,
};
updatedItems=[...state.items];
updatedItems[existingCartItemIndex]=updatedItem;
}else{
    
    updatedItems=state.items.concat(action.item)
}
return{
    items:updatedItems,
    totalAmount:updatedtotalAmount ,
};
    }
    if(action.type==='REMOVE'){
        const existingCartItemIndex=state.items.findIndex(
            (item)=>item.id===action.id
        );
        const existingItem=state.items[existingCartItemIndex];
        const updatedtotalAmount=
        state.totalAmount - existingItem.price ;
let updatedItems;
if(existingItem.amount===1){
updatedItems=state.items.filter(item=>item.id!==action.id)
}else{
const updatedItem={...existingItem,amount:existingItem.amount-1};
updatedItems=[...state.items]
updatedItems[existingCartItemIndex]=updatedItem;
}
return{
    items:updatedItems,
    totalAmount:updatedtotalAmount ,
}
    }
return defaultcart;
};
const CartProvider=(props)=>{
    const [cartState,dispatchCartaction]=useReducer(cartReducer,defaultcart);
   
    const addItemtocarthandler=(item)=>{
dispatchCartaction({type:'ADD',item:item})
    }
    const removeItemtocarthandler=(id)=>{
        dispatchCartaction({type:'REMOVE',id:id})
    }
    const cartContext={
        items:cartState.items,
    totalAmount:cartState.totalAmount,
    addItem:addItemtocarthandler,
    removeItem:removeItemtocarthandler
    };
    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartProvider;