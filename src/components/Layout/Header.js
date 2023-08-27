import { Fragment } from 'react'

import headerImg from '../../assets/meals.jpg'

import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

const Header = props => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={props.onShowCard}></HeaderCartButton>
      </header>
      <div className={classes['main-image']}>
        <img src={headerImg} alt='full of good food!'></img>
      </div>
    </Fragment>
  )
}
export default Header
