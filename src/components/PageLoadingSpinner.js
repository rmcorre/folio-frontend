import React from 'react';

const PageLoadingSpinner = () => {
  return (
    <div className="page-loading active">
      <div className="page-loading-inner">
        <div className="page-spinner"></div>
        <span>Loading...</span>
      </div>
    </div>
  );
};

export default PageLoadingSpinner;
