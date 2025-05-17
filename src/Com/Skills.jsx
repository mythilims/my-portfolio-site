import React from 'react';

function Skills() {
  const skills = [
    { name: 'HTML', percent: 90 },
    { name: 'CSS', percent: 85 },
    { name: 'JavaScript', percent: 80 },
    { name: 'React.js', percent: 75 },
    { name: 'Bootstrap', percent: 80 },
    {
      name: 'Reactstrap', percent: 80
    },
    // { name: 'Redux', percent: 70 },
    { name: 'Git', percent: 85 },
    {
      name: 'github', percent: 80
    },

  ];

  return (
    <section id="skills"
    //  style={{ backgroundColor: '#f9f9ff' }}
    >
      {/* Fixed Header */}
      <div
        className="mt-5 w-100 text-center fw-bold py-3 shadow"
        style={{
          backgroundColor: '#fff',
          color: 'rgb(75, 0, 130)',
          fontSize: '26px',
          borderBottom: '2px solid  rgb(75, 0, 130)',
          zIndex: 1050
        }}
      >
        My Skills
      </div>

      {/* Skills Section */}
      <div className="container py-5">
        <div className="row justify-content-center">
          {skills.map(({ name, percent }, index) => (
            <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4" key={index}>
              <div className="card h-100 shadow-sm border-0" style={{ borderRadius: '15px' }}>
                <div className="card-body">
                  <h6 className="fw-bold text-uppercase mb-2" style={{ color: '#4b0082' }}>
                    {name}
                  </h6>
                  <div className="progress" style={{ height: '20px', borderRadius: '20px' }}>
                    <div
                      className="progress-bar text-end pe-2 fw-semibold commonBgColor"
                      role="progressbar"
                      style={{
                        width: `${percent}%`,
                        color: 'rgb(75, 0, 130)',

                        // background: 'linear-gradient(90deg,  #11998e, #38ef7d)',
                        borderRadius: '20px',
                      }}
                      aria-valuenow={percent}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {percent}%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
