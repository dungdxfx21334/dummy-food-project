import classes from './AvailableMeals.module.css'
import DUMMY_MEALS from '../../data/dummy-meals'
import Card from '../UI/Card'
import MealItem from './MealItem/MealItem'

const AvailableMeals = () => {
  const mealItems = DUMMY_MEALS.map(meal => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    ></MealItem>
  ))
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealItems}</ul>
      </Card>
    </section>
  )
}

export default AvailableMeals
