import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Button } from '../Button/Button';
import { Modal } from "../Modal/Modal";
import css from '../Modal/Modal.module.css';
  


// 23818596-d5461ac6688865132aed17576;

//https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12

export class App extends Component {
  state = {
    picturt: [],
    pictureName: '',
    page: 1,
    showModal: false,
  };

  componentDidUpdate(_, PrevState) {
    console.log('PrevState.pictureName', PrevState.pictureName);
    console.log('this.state.pictureName', this.state.pictureName);
    const prevName = PrevState.pictureName;
    const nextName = this.state.pictureName;
    if (prevName !== nextName || PrevState.page !== this.state.page) {
      console.log('різні');
      fetch(
        `https://pixabay.com/api/?q=${nextName}&page=${this.state.page}&key=23818596-d5461ac6688865132aed17576&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(res => res.json())
        .then(picturt => {
          console.log('picturt', picturt);
          this.setState({ picturt: picturt.hits });
          // this.setState(data => ({
          //   picturt: [...PrevState.picturt, picturt.hits],
          // }));
          console.log('picturt 2', picturt.hits);
          console.log('page', this.state.page);
          console.log('PrevState.picturt 1', PrevState.picturt);
          return;
        });
    }
  }

  onChang = pictureName => {
    this.setState({
      page: 1,
      pictureName: '',
    });
    console.log('pictureName_onChang ', pictureName);
    this.setState({ pictureName });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  togglModal = () => {
    this.setState(state => (
     { showModal: !state.showModal,}
    ));
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.onChang} />
        {this.state.showModal && (
          <Modal onClose={this.togglModal}>
            <div>hsksr;</div>
            <button
              type="button"
              className={css.modal__button}
              onClick={this.togglModal}
            >
              X
            </button>
          </Modal>
        )}
        {this.state.picturt && (
          <ImageGallery
            pictureArr={this.state.picturt}
            oupenModal={this.togglModal}
            shouModal={this.state.showModal}
          />
        )}
        <Button onClick={this.loadMore} />
      </div>
    );
  }
}
