import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import css from '../ImageGallery/ImageGallery.module.css';

export const ImageGallery = ({ pictureArr, oupenModal }) => {
  return (
    <ul className={css.imageGallery}>
      <ImageGalleryItem pictureArr={pictureArr} oupenModal={oupenModal} />
    </ul>
  );
};
