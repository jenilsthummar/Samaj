import React, { useState } from 'react';
import '../style/Gallery.css'; // Assuming you have a CSS file
import { FiChevronLeft, FiChevronRight,FiZoomIn,FiZoomOut, FiX } from "react-icons/fi";


const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

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
    "https://images.pexels.com/photos/19408674/pexels-photo-19408674/free-photo-of-the-view-of-the-water-and-clock-tower-in-venice.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"               
  ];

  const openImage = (index) => {
    setSelectedImage(images[index]);
    setSelectedImageIndex(index);
  };

  const handleZoomIn = () => {
    const selectedImageElement = document.querySelector('.selected-image');
    if (selectedImageElement) {
      const currentScale = parseFloat(selectedImageElement.style.transform.split('(')[1].split(')')[0]);
      selectedImageElement.style.transform = `scale(${currentScale + 0.1})`;
    }
  };

  const handleZoomOut = () => {
    const selectedImageElement = document.querySelector('.selected-image');
    if (selectedImageElement) {
      const currentScale = parseFloat(selectedImageElement.style.transform.split('(')[1].split(')')[0]);
      selectedImageElement.style.transform = `scale(${Math.max(0.1, currentScale - 0.1)})`; // Prevent negative zoom
    }
  };

  const handlePreviousImage = () => {
    if (selectedImageIndex > 0) {
      setSelectedImage(images[selectedImageIndex - 1]);
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  const handleNextImage = () => {
    if (selectedImageIndex < images.length - 1) {
      setSelectedImage(images[selectedImageIndex + 1]);
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  return (
    <div className="gallery-container">
     <h3>Gallery</h3>
      <div className="image-gallery">
        {images.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Image ${index + 1}`}
            className="gallery-image"
            onClick={() => openImage(index)}
          />
        ))}
      </div>
      {selectedImage && (
        <div className="selected-image-container">
          <button className="previous-button" onClick={handlePreviousImage}><p><FiChevronLeft /></p></button>
          <img
            src={selectedImage}
            alt="Selected Image"
            className="selected-image"
            style={{ transform: 'scale(1.2)' }} 
          />
          <button className="next-button" onClick={handleNextImage}><p><FiChevronRight /></p></button>
          <div className='top'>
              <div>
                  <button className="close-button" onClick={() => setSelectedImage(null)}><p><FiX /></p></button>
              </div>
              <div className="zoom-controls">
                  <button className="zoom-in" onClick={handleZoomIn}><p><FiZoomIn /></p></button>
                  <button className="zoom-out" onClick={handleZoomOut}><p><FiZoomOut /></p></button>
              </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;