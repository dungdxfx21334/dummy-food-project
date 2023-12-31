import classes from './MealItemForm.module.css'
import { useRef, useState } from 'react'

import Input from '../../UI/Input'
const MealItemForm = props => {
  const [amountIsValid, setAmountIsValid] = useState(true)
  const amountInputRef = useRef(null)
  const submitHandler = event => {
    event.preventDefault()
    const enteredAmount = amountInputRef.current.value
    const enteredAmountNumber = +enteredAmount

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false)
      return
    }

    props.onAddToCart(enteredAmountNumber)
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label='Amount'
        input={{
          type: 'number',
          id: 'amount_' + props.id,
          max: '5',
          min: '1',
          defaultValue: '1',
          step: '1'
        }}
      ></Input>
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  )
}

export default MealItemForm
