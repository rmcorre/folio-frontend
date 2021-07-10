import React from 'react';

const PageLoadingSpinner = () => {
  return (
    <div class="page-loading active">
      <div class="page-loading-inner">
        <div class="page-spinner"></div>
        <span>Loading...</span>
      </div>
    </div>
  );
};

export default PageLoadingSpinner;
