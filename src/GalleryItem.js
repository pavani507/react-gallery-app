import React from "react";

const GalleryItems = props => {
  return (
    <li className="photo-container li:hover img">
      <img src={props.url} alt="" />
    </li>
  );
};

export default GalleryItems;
