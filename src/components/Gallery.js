import React from 'react';
import '../style/Gallery.css';  

const Gallery = () => {
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

  return (
    <>
    <div>
        <h1 className='gallery'>Gallery</h1>
    </div>
    <div className="image-gallery">
      {images.map((imageUrl, index) => (
        <img
          key={index}
          src={imageUrl}
          alt={`Image ${index + 1}`}
          className="gallery-image"
        />
      ))}
    </div>
    </>
  );
};

export default Gallery;
