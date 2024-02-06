import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import '../style/Gallery.css'

const images = [
  "https://images.pexels.com/photos/18418266/pexels-photo-18418266/free-photo-of-a-yellow-pipe-is-connected-to-a-concrete-wall.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/17807506/pexels-photo-17807506/free-photo-of-two-beautiful-white-swans-swimming-in-the-lake-jovan-vasiljevic-photography.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/13623210/pexels-photo-13623210.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/20013050/pexels-photo-20013050/free-photo-of-three-fingered-jack-at-sunset.png?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/20013185/pexels-photo-20013185/free-photo-of-a-small-bird-sitting-on-a-branch-in-the-woods.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/18687545/pexels-photo-18687545/free-photo-of-a-fruit-stand-with-many-different-types-of-fruit.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/19723129/pexels-photo-19723129/free-photo-of-rocks-on-sea-shore-in-town-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/4767578/pexels-photo-4767578.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/13398438/pexels-photo-13398438.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/19408674/pexels-photo-19408674/free-photo-of-the-view-of-the-water-and-clock-tower-in-venice.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
];

const LightboxExample = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <div className="image-grid">
      {images.map((image, index) => (
        <div key={index} className="image-item" onClick={() => openLightbox(index)}>
          <img src={image} alt={`Image ${index}`} />
        </div>
      ))}

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
        />
      )}
    </div>
  );
};

export default LightboxExample;
