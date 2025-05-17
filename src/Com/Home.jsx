import React from 'react';
import myPhoto from '../assets/profile.png';
import cv from '../assets/s_mythili.pdf';

function Home() {
  return (
    <div className="container py-5">
      <div className="row align-items-center gy-4 mt-4">
        {/* Left Column: Text + Buttons */}
        <div className="col-12 col-md-8 text-md-start text-center">
          <h1 className="fs-1 mb-2 commonTextBlueColor">Hello, I'm Mythili</h1>
          <h2 className="fs-3 mb-3 text-dark">Creative Frontend Developer</h2>
          <p className="fs-5 text-secondary" style={{ lineHeight: '1.8' }}>
            I build responsive, user-friendly web applications with <strong>React.js</strong>, <strong>JavaScript (ES6+)</strong>, and <strong>HTML5</strong>.
            I focus on creating engaging UI experiences with high performance and clean, scalable code.
          </p>
          <p className="fs-5 text-secondary mt-3" style={{ lineHeight: '1.8' }}>
            With over 6+ years of hands-on experience, I mentor junior developers, collaborate in Agile teams, and enjoy solving real-world frontend challenges.
          </p>

          <div className="d-flex gap-3 flex-wrap mt-4 justify-content-md-start justify-content-center">
            <a
              href="https://www.linkedin.com/in/smythili"
              className="btn commonBgColor d-flex align-items-center justify-content-center"
              style={{ width: '40px', height: '40px', padding: 0, borderRadius: '0' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-linkedin text-white fs-5"></i>
            </a>

            <a
              href="https://github.com/mythilims"
              className="btn commonBgColor d-flex align-items-center justify-content-center"
              style={{ width: '40px', height: '40px', padding: 0, borderRadius: '0' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-github text-white fs-5"></i>
            </a>

            <a
              href={cv}
              download
              className="btn commonBgColor d-flex align-items-center gap-2"
              style={{
                padding: '0 15px',
                fontSize: '14px',
                fontWeight: 'bold',
                borderRadius: '0',
                height: '40px',
              }}
            >
              <i className="fa fa-download text-white fs-5"></i> CV
            </a>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="col-12 col-md-4 d-flex justify-content-center mt-md-0 mt-4">
          <div className="col-12 col-md-4 d-flex justify-content-center mt-md-0 mt-4">
            <div className="commonBgColor d-flex justify-content-center align-items-center  p-2 profile-wrapper" style={{ width: '320px', height: '320px' }}>
              <img src={myPhoto} alt="Mythili" className=" profile-img" style={{ width: '300px', height: '300px', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
