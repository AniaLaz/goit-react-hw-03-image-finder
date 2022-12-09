import { Component } from 'react';
import css from '../Modal/Modal.module.css';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      console.log('yfnbcyekb esx');
      console.log('e', e.code);
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={css.backdrop}>
        <div className={css.modal}>
          {this.props.children}
          модалка
        </div>
      </div>,
      modalRoot
    );
  }
}
