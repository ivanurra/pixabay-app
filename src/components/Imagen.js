import React from "react";

const Imagen = ({ imagen }) => {
  const { largeImageURL, likes, previewURL, tags, views } = imagen;
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card">
          <img src={previewURL} alt={tags} className="card-img-top" />
        <div className="card-body">
        <p className="card-text">Likes: {likes} &#10084;</p>
        <p className="card-text">Views: {views}</p>
        </div>
        <div className="card-footer">
        <a href={largeImageURL} target="_blank" rel="noreferrer" className="btn btn-primary btn-block">
          Link to Image
        </a>
        </div>
      </div>
    </div>
  );
};

export default Imagen;
