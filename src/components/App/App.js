import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Button } from '../Button/Button';
import { Modal } from '../Modal/Modal';
import css from '../Modal/Modal.module.css';

// 23818596-d5461ac6688865132aed17576;

//https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12

export class App extends Component {
  state = {
    picturs: [],
    pictureName: '',
    page: 1,
    showModal: false,
    // inLoading: false,
    error: null,
  };

  async componentDidUpdate(_, prevState) {
    console.log('PrevState.pictureName', prevState.pictureName);
    console.log('this.state.pictureName', this.state.pictureName);
    const prevName = prevState.pictureName;
    const nextName = this.state.pictureName;
    // this.setState({ inLoading: true });
    try {
      if (prevName !== nextName || prevState.page !== this.state.page) {
        console.log('різні');
        // this.setState({ inLoading: true });

        await fetch(
          `https://pixabay.com/api/?q=${nextName}&page=${this.state.page}&key=23818596-d5461ac6688865132aed17576&image_type=photo&orientation=horizontal&per_page=12`
        )
          .then(res => res.json())
          .then(picturs => {
            console.log('picturt', picturs);

            if (this.state.page === 1) {
              console.log('11111111111111111111');
              this.setState({ picturs: picturs.hits });
            } else {
              this.setState(data => ({
                picturs: [...prevState.picturs, ...picturs.hits],
              }));
            }

            console.log('picturt 2', picturs.hits);
            console.log('page', this.state.page);
            console.log('PrevState.picturt 1', prevState.picturs);
          });
      }
    } catch (error) {
      console.log(error);

      this.setState({ error: 'что то пошло не так!' });
    } finally {
      // this.setState({ inLoading: false });
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
    this.setState(state => ({ showModal: !state.showModal }));
  };

  // gatBigImg = e => {
  //   console.log(e);
  //   this.setState(state => ({ showModal: !state.showModal }));
  // };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.onChang} />

        {/* {this.state.inLoading && (
          <p>завантажується...</p>
        )} */}
        {this.state.error && <p style={{ color: 'red' }}>{this.state.error}</p>}
        {this.state.picturs && (
          <ImageGallery
            pictureArr={this.state.picturs}
            oupenModal={this.togglModal}
            shouModal={this.state.showModal}
          />
        )}
        {this.state.picturs.length >= 12 && <Button onClick={this.loadMore} />}
      </div>
    );
  }
}



    // {
    //   /* {this.state.showModal && (
    //       <Modal onClose={this.togglModal}>
    //         <div>hsksr;</div>
    //         <button
    //           type="button"
    //           className={css.modal__button}
    //           onClick={this.togglModal}
    //         >
    //           X
    //         </button>
    //       </Modal>
    //     )} */
    // }
    // {
    //   /* {this.state.error && <p>Щось пішло не такБ спробуйте ще раз</p>} */
    // }
    // {
    //   /* {this.state.inLoading & this.state.picturt ? (
    //       <p>завантажуэться...</p>
    //     ) : (
    //       <ImageGallery
    //         pictureArr={this.state.picturt}
    //         oupenModal={this.gatBigImg}
    //         shouModal={this.state.showModal}
    //       />
    //     )} */
    // }