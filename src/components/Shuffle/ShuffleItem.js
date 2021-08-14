import React from 'react';

const ShufflePhotoItem = ({
  id,
  username,
  category,
  src,
  href,
  name,
  dataGroup,
}) => {
  return (
    <article
      key={id}
      className="masonry-grid-item"
      data-groups={`["${dataGroup}"]`}
    >
      <a className="card card-hover h-100 border-0 shadow" href={href}>
        <img className="card-img-top" src={src} alt="Article image" />
        <div className="card-body text-center">
          <h3 className="h5 mb-1">{name}</h3>
          <span className="fs-sm text-muted">{category}</span>
        </div>
      </a>
    </article>
  );
};

export default ShufflePhotoItem;
