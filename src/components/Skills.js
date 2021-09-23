import WOW from 'wow.js';
import illustration from '../img/skills/skills.svg';

const wow = new WOW();
wow.init();

const Skills = () => {
  return (
    <section className="position-relative py-md-7 py-5">
      <div className="container my-2 my-md-0">
        <div className="row align-items-center">
          <div className="col-lg-6 offset-lg-1 col-md-7 text-md-start text-center">
            <div className="mx-md-0 mx-auto" style={{ maxWidth: '500px' }}>
              <h2 className="wow fadeInUp mb-md-3 mb-3" data-wow-delay=".3s">
                Skills I've Aquired
              </h2>
              <div
                className="wow fadeInUp d-md-flex align-items-start d-block mb-4 pb-2"
                data-wow-delay=".5s"
              >
                <div>
                  <i
                    className="bitIcon-js-sq"
                    style={{ color: '#bfbfbf', fontSize: 60 }}
                  ></i>
                  <i
                    className="bitIcon-html5-sq"
                    style={{ color: '#bfbfbf', fontSize: 60 }}
                  ></i>
                  <i
                    className="bitIcon-css3-sq"
                    style={{ color: '#bfbfbf', fontSize: 60 }}
                  ></i>
                  <i
                    className="bitIcon-sass-seal-sq"
                    style={{ color: '#bfbfbf', fontSize: 60 }}
                  ></i>
                  <i
                    className="bitIcon-java-sq"
                    style={{ color: '#bfbfbf', fontSize: 60 }}
                  ></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5 mb-md-0 mb-5 pb-md-0 pb-3">
            <img
              className="d-block mx-md-0 mx-auto"
              src={illustration}
              alt="Illustration"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
