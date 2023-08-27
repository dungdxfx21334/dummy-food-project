import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'

import CartContext from '../../store/cart-context'
import { useContext, useState, useEffect } from 'react'

const HeaderCartButton = props => {
  const cartCtx = useContext(CartContext)
  const { item } = cartCtx

  const [btnIsHightlighted, setBtnIsHighlighted] = useState(false)

  const numberOfCardItems = cartCtx.item.reduce((curNumber, item) => {
    return curNumber + item.amount
  }, 0)
  const btnClasses = `${classes.button} ${
    btnIsHightlighted ? classes.bump : ''
  }`

  useEffect(() => {
    if (item.length === 0) {
      return
    }
    setBtnIsHighlighted(true)
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false)
    }, 300)
    return () => {
      clearTimeout(timer)
    }
  }, [item])

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCardItems}</span>
    </button>
  )
}

export default HeaderCartButton
