import React from 'react';
import Shuffle from 'shufflejs';

import apologeticRobot from '../img/around/portfolio/01.jpg';
import womanWalking from '../img/around/portfolio/02.jpg';
import oilBottle from '../img/around/portfolio/03.jpg';
import smilingWoman from '../img/around/portfolio/04.jpg';
import drink from '../img/around/portfolio/05.jpg';
import love from '../img/around/portfolio/06.jpg';

const PortfolioAround = () => {
  return (
    // Portfolio
    <section class="overflow-hidden" id="portfolio">
      <div class="container py-lg-7 py-md-6 py-5 my-2 my-md-0">
        <h2 class="mb-3 text-center">My portfolio</h2>
        <p class="mb-4 pb-md-2 text-muted text-center">
          Most recent projects I have completed
        </p>
        <div class="masonry-filterable">
          {/* Portfolio nav (Filters) */}
          <nav
            class="pb-3 mb-4"
            data-simplebar
            data-simplebar-auto-hide="false"
          >
            <ul class="masonry-filters nav nav-tabs justify-content-sm-center flex-nowrap text-nowrap mb-0">
              <li class="nav-item">
                <a class="nav-link active" href="#" data-group="all">
                  All
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" data-group="illustrations">
                  Illustrations
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" data-group="packaging">
                  Packaging
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" data-group="branding">
                  Branding
                </a>
              </li>
            </ul>
          </nav>
          {/* Portfolio grid */}
          <div class="masonry-grid" data-columns="3">
            {/* Portfolio item */}
            <article class="masonry-grid-item" data-groups='["branding"]'>
              <a class="card card-hover h-100 border-0 shadow" href="#">
                <img
                  class="card-img-top"
                  src={apologeticRobot}
                  alt="Article image"
                />
                <div class="card-body text-center">
                  <h3 class="h5 mb-1">Apologetic robot holding flowers</h3>
                  <span class="fs-sm text-muted">Branding</span>
                </div>
              </a>
            </article>
            {/* Portfolio item */}
            <article class="masonry-grid-item" data-groups='["illustrations"]'>
              <a class="card card-hover h-100 border-0 shadow" href="#">
                <img
                  class="card-img-top"
                  src={womanWalking}
                  alt="Article image"
                />
                <div class="card-body text-center">
                  <h3 class="h5 mb-1">Woman walking her small dog</h3>
                  <span class="fs-sm text-muted">Illustrations</span>
                </div>
              </a>
            </article>
            {/* Portfolio item */}
            <article class="masonry-grid-item" data-groups='["branding"]'>
              <a class="card card-hover h-100 border-0 shadow" href="#">
                <img class="card-img-top" src={oilBottle} alt="Article image" />
                <div class="card-body text-center">
                  <h3 class="h5 mb-1">Oil bottle branding</h3>
                  <span class="fs-sm text-muted">Branding</span>
                </div>
              </a>
            </article>
            {/* Portfolio item */}
            <article class="masonry-grid-item" data-groups='["illustrations"]'>
              <a class="card card-hover h-100 border-0 shadow" href="#">
                <img
                  class="card-img-top"
                  src={smilingWoman}
                  alt="Article image"
                />
                <div class="card-body text-center">
                  <h3 class="h5 mb-1">Smiling woman</h3>
                  <span class="fs-sm text-muted">Illustrations</span>
                </div>
              </a>
            </article>
            {/* Portfolio item */}
            <article class="masonry-grid-item" data-groups='["packaging"]'>
              <a class="card card-hover h-100 border-0 shadow" href="#">
                <img class="card-img-top" src={drink} alt="Article image" />
                <div class="card-body text-center">
                  <h3 class="h5 mb-1">Drink can design</h3>
                  <span class="fs-sm text-muted">Packaging</span>
                </div>
              </a>
            </article>
            {/* Portfolio item */}
            <article class="masonry-grid-item" data-groups='["illustrations"]'>
              <a class="card card-hover h-100 border-0 shadow" href="#">
                <img class="card-img-top" src={love} alt="Article image" />
                <div class="card-body text-center">
                  <h3 class="h5 mb-1">I love you hand gesture</h3>
                  <span class="fs-sm text-muted">Illustrations</span>
                </div>
              </a>
            </article>
          </div>
        </div>
        <div class="pt-3 text-center">
          <a class="btn btn-primary" href="#">
            <i class="ai-refresh-cw me-2"></i>Load more
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioAround;
