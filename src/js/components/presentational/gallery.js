import React from "react";

// console.log("TEST :", photo.id, props.photoId);

const Gallery = props => {
  const photosVertical = props.productPhotos.map(photo => (
    <tr class="photosContainer">
      <div
        className={
          photo.id == props.photo.id ? "selectedThumbnail" : "thumbnail"
        }
      >
        <img
          class={"photosVertical"}
          onClick={props.clickPhoto}
          id={photo.id}
          src={photo.url}
          alt={`photo ${photo.id} for product ${photo.product_id}: 
        ${props.productName}`}
        />
      </div>
    </tr>
  ));
  const photosHorizontal = props.productPhotos.map(photo => (
    <td class="photosContainer">
      <div
        className={
          photo.id == props.photo.id ? "selectedThumbnail" : "thumbnail"
        }
      >
        <img
          class={"photosHorizontal"}
          onClick={props.clickPhoto}
          id={photo.id}
          src={photo.url}
          alt={`photo ${photo.id} for product ${photo.product_id}: 
        ${props.productName}`}
        />
      </div>
    </td>
  ));

  if (props.fullScreen === false) {
    return <table>{photosVertical}</table>;
  } else {
    return <table>{photosHorizontal}</table>;
  }
};

export default Gallery;
