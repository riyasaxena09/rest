import Cartcontext from "./cart-context"
const CartProvider=props=>{
    const add=(item)=>{}
    const rem=(id)=>{}
    const cartContext={
        items:[],
totalAmount:0,
addItem:add,
removeItem:rem
    }
return <Cartcontext.Provider value={cartContext}>
{props.children}
</Cartcontext.Provider>


}
export default CartProvider;