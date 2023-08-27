import { Fragment } from 'react'
import classes from './Modal.module.css'
import { createPortal } from 'react-dom'

const BackDrop = props => {
  return <div className={classes.backdrop} onClick={props.onClick}></div>
}

const ModalOverlay = props => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  )
}

const modalElement = document.getElementById('overlays')

const Modal = props => {
  return (
    <Fragment>
      {createPortal(
        <BackDrop onClick={props.onClick}></BackDrop>,
        modalElement
      )}
      {createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        modalElement
      )}
    </Fragment>
  )
}

export default Modal
