import React from 'react';

const LatestNews = () => {
  return (
    <div className="latest-news-area section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <span className="wow fadeInDown" data-wow-delay=".2s">
                latest news
              </span>
              <h2 className="wow fadeInUp" data-wow-delay=".4s">
                Latest News & Blog
              </h2>
              <p className="wow fadeInUp" data-wow-delay=".6s">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="single-news wow fadeInUp" data-wow-delay=".2s">
              <div className="image">
                <img
                  className="thumb"
                  src="assets/images/blog/blog-grid1.jpg"
                  alt="#"
                />
                <div className="meta-details">
                  <img src="assets/images/blog/author.jpg" alt="#" />{' '}
                  <span>BY TIM NORTON</span>
                </div>
              </div>
              <div className="content-body">
                <h4 className="title">
                  <a href="blog-single-sidebar.html">
                    Make your team a Design driven company
                  </a>
                </h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="single-news wow fadeInUp" data-wow-delay=".4s">
              <div className="image">
                <img
                  className="thumb"
                  src="assets/images/blog/blog-grid2.jpg"
                  alt="#"
                />
                <div className="meta-details">
                  <img src="assets/images/blog/author.jpg" alt="#" />{' '}
                  <span>BY TIM NORTON</span>
                </div>
              </div>
              <div className="content-body">
                <h4 className="title">
                  <a href="blog-single-sidebar.html">
                    The newest web framework that changed the world
                  </a>
                </h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="single-news wow fadeInUp" data-wow-delay=".6s">
              <div className="image">
                <img
                  className="thumb"
                  src="assets/images/blog/blog-grid3.jpg"
                  alt="#"
                />
                <div className="meta-details">
                  <img src="assets/images/blog/author.jpg" alt="#" />{' '}
                  <span>BY TIM NORTON</span>
                </div>
              </div>
              <div className="content-body">
                <h4 className="title">
                  <a href="blog-single-sidebar.html">
                    5 ways to improve user retention for your startup
                  </a>
                </h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
