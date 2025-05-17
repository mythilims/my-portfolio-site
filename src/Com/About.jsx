import React from 'react';

function AboutMeWithEducation() {
  return (
    <section id="about" className="py-5">
      <div
        className="w-100 text-center fw-bold py-3 shadow"
        style={{
          backgroundColor: '#fff',
          color: '#4b0082',
          fontSize: '26px',
          borderBottom: '2px solid #11998e',
          zIndex: 1050
        }}
      >
        About Me
      </div>
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <p className="fs-5 text-center text-dark" style={{ lineHeight: '1.8' }}>
              I'm <span className="aboFontColor">Mythili</span>, a passionate and experienced Front-End Developer from{' '}
              <span className="aboFontColor">Salem</span>. With over{' '}
              <span className="aboFontColor">6+ years</span> in the industry, I've built dynamic web applications using{' '}
              <span className="aboFontColor">React.js</span>, <span className="aboFontColor"></span>, and modern JavaScript.
              I began my career working with <span className="aboFontColor">HTML, CSS, JS, and Laravel</span> before transitioning into React.
              I also contribute by mentoring juniors, handling code reviews, and resolving live production issues.
            </p>

            {/* Professional Summary */}
            <div className="mt-4 p-4 shadow rounded" style={{ backgroundColor: '#f9fafb', color: '#333' }}>
              <h3 className="fw-bold text-center  mb-3" style={{ color: 'rgb(75, 0, 130)' }}> Professional Summary</h3>
              <div
                className="d-flex justify-content-between align-items-center mt-3"
                style={{
                  backgroundColor: '#f0f4f8',
                  color: '#4b0082',
                  padding: '10px 20px',
                  borderRadius: '8px',
                  fontWeight: '600',
                  fontSize: '16px',
                }}
              >
                <div>Front-end Developer @ Rasi Infotech</div>
                <div className="text-center" style={{ flex: '1' }}>
                  Salem, Tamil Nadu
                </div>
                <div style={{ textAlign: 'right', minWidth: '120px' }}>2018 - 02/2025</div>
              </div>
              <div className="mt-4">
                <h3 className="fw-bold aboFontColor mb-3 text-center">Key Responsibilities</h3>
                <ul
                  style={{
                    listStyleType: 'none',
                    paddingLeft: 0,
                    // maxWidth: '00px',
                    margin: '0 auto',
                    color: '#333',
                    fontSize: '16px',
                    lineHeight: '1.7',
                  }}
                >
                  {[
                    'Develop and maintain responsive web applications using React.js, JavaScript (ES6+), HTML5, and CSS3, ensuring performance and cross-browser compatibility.',
                    'Lead code reviews, enforce best practices, and ensure scalable, maintainable code.',
                    'Mentor junior developers, providing training and technical support to enhance team productivity.',
                    'Troubleshoot and resolve front-end bugs and client-specific issues in real-time and use Git for version control and ensure smooth integration across projects.',
                    'Collaborate with cross-functional teams to implement new features and deliver solutions in an Agile environment.',
                  ].map((item, index) => (
                    <li
                      key={index}
                      style={{
                        position: 'relative',
                        paddingLeft: '30px',
                        marginBottom: '15px',
                      }}
                    >
                      <span
                        style={{
                          position: 'absolute',
                          left: 0,
                          top: '4px',
                          width: '18px',
                          height: '18px',
                          background: 'linear-gradient(90deg, #11998e, #38ef7d)',
                          borderRadius: '50%',
                        }}
                      ></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* <p>
                I have been working as a Front-End Developer since 2018, currently employed at <strong>Rasi Infotech</strong>.
                I specialize in developing and maintaining responsive web applications with React.js, JavaScript (ES6+), HTML5, and CSS3, ensuring excellent performance and cross-browser compatibility.
              </p>
              <p>
                I lead code reviews to enforce best practices and deliver scalable, maintainable code. As a mentor, I provide guidance and technical support to junior developers, boosting overall team productivity.
              </p>
              <p>
                I excel at troubleshooting front-end bugs and resolving client-specific issues in real-time, using Git for version control to ensure smooth collaboration. I work closely with cross-functional teams to implement new features and deliver solutions in Agile environments.
              </p> */}
            </div>
          </div>
        </div>

        <h2
          className="text-center fw-bold mt-5 mb-4"
          style={{
            backgroundColor: '#fff',
            color: '#4b0082',
            fontSize: '26px',
          }}
        >
          Education
        </h2>

        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="border-start border-4 ps-4" style={{ borderColor: '#8a2be2' }}>
              <div className="mb-5 position-relative">
                <div className="circleDot"></div>
                <h5 className="fw-bold mb-1 aboFontColor">Postgraduate (PG)</h5>
                <p className="text-muted mb-1">Masters Of Computer Application(MCA) - Periyar University, Salem, Tamil Nadu</p>
                <small className="text-secondary">2015 - 2017</small>
              </div>
              <div className="mb-3 position-relative">
                <div className="circleDot"></div>
                <h5 className="fw-bold mb-1 aboFontColor">Undergraduate (UG)</h5>
                <p className="text-muted mb-1">Bachelor of Computer Applications(BCA) - SSWC</p>
                <small className="text-secondary">2012 - 2015</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMeWithEducation;
