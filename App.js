import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

import Cart from './components/Cart/Cart';
import { Fragment,useState } from 'react';
function App() {
  const [cartv,setCart]=useState(false);
  function setHandler(){
    setCart(true);
  }
  function hideHandler(){
    setCart(false);
  }

  return (
    <Fragment>
   {cartv && <Cart onClose={hideHandler}/>}
     <Header onShowCart={setHandler} ></Header>
   
     <main>
      <Meals></Meals>
     </main>
    </Fragment>
  );
}

export default App;
