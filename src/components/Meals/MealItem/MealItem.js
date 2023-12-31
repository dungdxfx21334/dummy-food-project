import classes from './MealItem.module.css'

import { useContext } from 'react'
import CartContext from '../../../store/cart-context'

import MealItemForm from './MealItemForm'
const MealItem = props => {
  const cartCtx = useContext(CartContext)
  const price = `$${props.price.toFixed(2)}`
  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    })
  }
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <p className={classes.description}>{props.description}</p>
        <p className={classes.price}>{price}</p>
      </div>
      <div>
        <MealItemForm
          id={props.id}
          onAddToCart={addToCartHandler}
        ></MealItemForm>
      </div>
    </li>
  )
}
export default MealItem
