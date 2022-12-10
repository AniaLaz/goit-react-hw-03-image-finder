import css from '../ImageGalleryItem/ImageGalleryItem.module.css';
import { Component } from 'react';
import { Modal } from '../Modal/Modal';
import cssModal from '../Modal/Modal.module.css';

export class ImageGalleryItem extends Component {
  // state = {
  //   urlBig: '',
  // };

  // onClickUrlBig = () => {
  //   this.setState({ urlBig: this.props.largeImageURL });
  //   this.props.oupenModal();
  //   console.log('this.state.urlBig', this.state.urlBig);
  // }

  render() {
    return (
      <>
        <li className={css.imageGalleryItem} onClick={this.props.oupenModal}>
          <img
            className={css.imageGalleryItemImage}
            src={this.props.webformatURL}
            alt={this.props.tags}
            url={this.props.largeImageURL}
          />
        </li>
        {this.props.shouModal && (
          <Modal
            onClose={this.props.oupenModal}
            shouModal={this.props.shouModal}
          >
            <img
              className={css.imageGalleryItemImage}
              src={this.props.largeImageURL}
              // src={this.state.urlBig}
              alt={this.props.tags}
            />
            <button
              type="button"
              className={cssModal.modal__button}
              onClick={this.props.oupenModal}
            >
              X
            </button>
          </Modal>
        )}
      </>
    );
  }
}
