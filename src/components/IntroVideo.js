import React, { useState, useEffect } from 'react';
import GLightBox from 'glightbox';

const IntroVideo = () => {
  const [glightbox, setGlightbox] = useState();

  useEffect(() => {
    setGlightbox(
      GLightBox({
        href: 'https://www.youtube.com/watch?v=r44RKWyfcFw&fbclid=IwAR21beSJORalzmzokxDRcGfkZA1AtRTE__l5N4r09HcGS5Y6vOluyouM9EM',
        type: 'video',
        source: 'youtube', //vimeo, youtube or local
        width: 900,
        autoplayVideos: true,
      })
    );
  }, []);

  return (
    <section className="intro-video-area overlay section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title white-text">
              <span className="wow fadeInDown" data-wow-delay=".2s">
                Create your own experience
              </span>
              <h2 className="wow fadeInUp" data-wow-delay=".4s">
                Ready to grow faster?
              </h2>
              <p className="wow fadeInUp" data-wow-delay=".6s">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="intro-video-play">
              <div className="row justify-content-center">
                <div className="col-lg-10 col-12">
                  <div className="play-thumb wow zoomIn" data-wow-delay=".2s">
                    <a
                      href="https://www.youtube.com/watch?v=r44RKWyfcFw&fbclid=IwAR21beSJORalzmzokxDRcGfkZA1AtRTE__l5N4r09HcGS5Y6vOluyouM9EM"
                      className="glightbox video"
                    >
                      <i className="lni lni-play"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroVideo;
