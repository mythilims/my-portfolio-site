import React from 'react';

function WorkExperience() {
  const projects = [
    {
      title: 'Zinger',
      company: 'Rasi Infotech',
      description: 'Its Jewelry store management software encompasses essential features such as POS (point of sale), customer management, accounting, inventory control, catalog management, and robust businessintelligence tools',
      tech: ['React.js', 'Reactstrap', 'Bootstrap'],
    },
    {
      title: 'enProject',
      company: 'Rasi Infotech',
      description: 'Project management software platform is meticulously crafted toempower individuals and teams in efficiently planning, organizing, and executing projects. Offering a centralized hub, it streamlines task management, timelines, resource allocation, and communication, ensuring seamless project coordination and successDeveloped a task manager with filtering, editing, and local storage integration using custom hooks.',
      tech: ['React.js', 'Reactstrap', 'Bootstrap'],
    },
    {
      title: 'Kvb',
      company: 'Rasi Infotech',
      description: 'This software is used for Jewellery auditing purpose in bank side to check whether jewelleries are in safe mode or missing One tag is attached for each jewellery which tag number is unique no & is generated from software & Audit details also created.RIFD based antenna setup arranged in bank side. Auditing process starts while employee cross this RFID setup. Based on the reader, the status of the jewellery updated',
      tech: ['React.js', 'Laravel', 'MySQL', 'Chart.js'],
    },

    {
      title: 'Pocket Academy',
      company: 'Rasi Infotech',
      description: 'Pocket Academy software streamlines the delivery of tutoring services and academic assistance to students, both online and in person,simplifying the entire process for educators and learners a like',
      tech: ['Html', 'Css', 'Javascript', 'Laravel'],
    },
  ];

  return (
    <section id="work" className="py-5"
    // style={{ backgroundColor: '#f4f0ff' }}
    >
      <div
        className=" w-100 text-center fw-bold py-3 shadow "
        style={{
          backgroundColor: '#fff',
          color: '#4b0082',
          fontSize: '26px',
          borderBottom: '2px solid  #11998e',
          zIndex: 1050,
        }}
      >
        Experience
      </div>
      <div className="container mt-4">


        <div className="row justify-content-center">
          {projects.map((project, index) => (
            <div className="col-12 col-md-10 mb-4" key={index}>
              <div className="card border-start border-2 shadow-sm "
                style={{ borderColor: '#11998e' }}
              >
                <div className="card-body">
                  <h5 className="card-title fw-semibold" style={{ color: 'rgb(75, 0, 130)' }}>{project.title}</h5>
                  <h6 className="card-subtitle text-muted">{project.company}</h6>
                  <p className="text-secondary small mb-2">{project.duration}</p>
                  <p className="card-text">{project.description}</p>
                  <div className="d-flex flex-wrap gap-2 mt-2">
                    {project.tech.map((tech, i) => (
                      <span
                        className="badge rounded-pill commonBgColor"
                        key={i}
                        style={{
                          // background: 'linear-gradient(90deg, #11998e, #38ef7d)',
                          color: 'rgb(75, 0, 130)',
                          fontWeight: 600,
                          fontSize: '0.8rem',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
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

export default WorkExperience;
