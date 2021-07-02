import React from 'react';

const NewsLetter = () => {
  return (
    <section className="newsletter-area section">
      <div className="container">
        <div className="row ">
          <div className="col-lg-8 col-12">
            <div className="subscribe-text wow fadeInLeft" data-wow-delay=".2s">
              <h6>Sign up for Newsletter</h6>
              <p className="">
                Sign Up and start using a free account <br /> to see what it's
                all about.
              </p>
              <form
                action="mail/mail.php"
                method="get"
                target="_blank"
                className="newsletter-inner"
              >
                <input
                  name="EMAIL"
                  placeholder="Your email address"
                  className="common-input"
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'Your email address'"
                  required=""
                  type="email"
                />
                <div className="button">
                  <button className="btn">Subscribe Now!</button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <div
              className="mini-call-action wow fadeInRight"
              data-wow-delay=".4s"
            >
              <h4>Do you want to grow your online business with Massive?</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <div className="button">
                <a href="#" className="btn">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
