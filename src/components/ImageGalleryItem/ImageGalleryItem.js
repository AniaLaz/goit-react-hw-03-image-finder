import css from '../ImageGalleryItem/ImageGalleryItem.module.css';
import { Modal } from '../Modal/Modal';

export const ImageGalleryItem = ({ pictureArr, oupenModal, shouModal }) => (
  <>
    {pictureArr.map(picture => (
      <li
        key={picture.id}
        className={css.imageGalleryItem}
        onClick={oupenModal}
      >
        <img
          className={css.imageGalleryItemImage}
          src={picture.webformatURL}
          alt={picture.tags}
        />
        
        {/* {{shouModal} && <Modal oupenModal={oupenModal} />} */}
      </li>
    ))}
  </>
);
