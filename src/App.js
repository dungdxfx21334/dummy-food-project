import './App.css'
import { useState } from 'react'
import CartContextProvider from './store/CartContextProvider'
import Header from './components/Layout/Header'

import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart'

function App () {
  const [cartIsShown, setCartIsShown] = useState(false)

  const showCartHandler = () => {
    setCartIsShown(true)
  }

  const hideCartHandlder = () => {
    setCartIsShown(false)
  }
  return (
    <CartContextProvider>
      <Header onShowCard={showCartHandler}></Header>
      <main>
        <Meals></Meals>
      </main>
      {cartIsShown && <Cart onHideCart={hideCartHandlder}></Cart>}
    </CartContextProvider>
  )
}

export default App
