import React from "react";
import GalleryItem from "./GalleryItem";

const Gallery = props => {
  const { images, topic } = props;
  return (
    <div className="photo-container">
      <h2>{topic}</h2>
      <ul>
        {images.map(image => (
          <GalleryItem
            url={`https://farm${image.farm}.staticflickr.com/${image.server}/${
              image.id
            }_${image.secret}.jpg`}
            key={image.id}
          />
        ))}{" "}
      </ul>
    </div>
  );
};

export default Gallery;
