import React, { useState } from "react";
import ghLogo from '../../assets/img/github/GitHub-Mark-32px.png';
import movieNews from '../../assets/img/movie-news.png';
import budgetTracker from '../../assets/img/budget-tracker.png';
import thatOneAnswer from '../../assets/img/that-one-answer.jpg';
import weatherDashboard from '../../assets/img/weather-dashboard.png';
import workDay from '../../assets/img/work-day.png';
import passwordGenerator from '../../assets/img/password-generator.png';
import familygraph from '../../assets/img/family-graph.png';
import runbuddy from '../../assets/img/runbuddy-400.png';
import cliEmployeeDB from '../../assets/img/cli-screenshot.png';


const Projects = () => {

  const [projectList] = useState([
    {
      name: 'Movie News',
      category: 'commercial',
      description: 'JavaScript, Web APIs',
      deployedAtLink: 'https://rolanduwxcc.github.io/project-bmw/',
      gitHubRepoLink: 'https://github.com/rolanduwxcc/project-bmw',
      screenshot: movieNews,
    },
    {
      name: 'Budget Tracker',
      category: 'TBD',
      description: 'JS, Node, Express, Mongoose/MongoDB',
      deployedAtLink: 'https://shielded-sierra-69449.herokuapp.com/',
      gitHubRepoLink: 'https://github.com/rolanduwxcc/budget-tracker',
      screenshot: budgetTracker,
    },
    {
      name: 'That One Answer',
      category: 'commercial',
      description: 'JavaScript, Node, MySQL, Sequelize, Express',
      deployedAtLink: 'https://salty-spire-96574.herokuapp.com/',
      gitHubRepoLink: 'https://github.com/AdamR-Work/That-One-Answer',
      screenshot: thatOneAnswer,
    },
    {
      name: 'Weather Dashboard',
      category: 'commercial',
      description: 'JavaScript, APIs, HTML, CSS',
      deployedAtLink: 'https://rolanduwxcc.github.io/ch6-weather-dashboard/',
      gitHubRepoLink: 'https://github.com/rolanduwxcc/ch6-weather-dashboard',
      screenshot: weatherDashboard,
    },
    {
      name: 'Work Day Scheduler',
      category: 'commercial',
      description: 'JavaScript, HTML, CSS',
      deployedAtLink: 'https://rolanduwxcc.github.io/ch5-work-day-scheduler/',
      gitHubRepoLink: 'https://github.com/rolanduwxcc/ch5-work-day-scheduler',
      screenshot: workDay,
    },
    {
      name: 'Password Generator',
      category: 'commercial',
      description: 'JavaScript',
      deployedAtLink: 'https://rolanduwxcc.github.io/ch3-password-generator/',
      gitHubRepoLink: 'https://github.com/rolanduwxcc/ch3-password-generator',
      screenshot: passwordGenerator,
    },
    {
      name: 'Family Graph',
      category: 'commercial',
      description: 'MERN Stack',
      deployedAtLink: 'hhttps://blooming-reaches-99223.herokuapp.com/',
      gitHubRepoLink: 'https://github.com/rolanduwxcc/family-graph',
      screenshot: familygraph,
    },
    {
      name: 'Run Buddy',
      category: 'commercial',
      description: 'HTML CSS',
      deployedAtLink: 'hhttps://blooming-reaches-99223.herokuapp.com/',
      gitHubRepoLink: 'https://github.com/rolanduwxcc/run-buddy',
      screenshot: runbuddy,
    },
    {
      name: 'CLI Employee Database',
      category: 'commercial',
      description: 'JavaScript, Node, Inquirer, MySQL',
      deployedAtLink: 'https://github.com/rolanduwxcc/ch12-company-database',
      gitHubRepoLink: 'https://github.com/rolanduwxcc/ch12-company-database',
      screenshot: cliEmployeeDB,
    },

  ]);

  return (
    <div>
      <br />
      <h1>Projects</h1>
      <div className="card-columns">
        {projectList.map((project, i) => (
          <div className="card mb-3" style={{ width: '18rem' }}>
            <img
              src={project.screenshot}
              alt={project.name}
              className="card-img-top"
              key={project.name}
            />
            <div className="card-body">
              <a className="card-title" href={project.deployedAtLink} target='_blank' rel="noreferrer">
                {project.name}
              </a>
              <p className="card-text">
                <a href={project.gitHubRepoLink} target='_blank' rel="noreferrer">
                  <img src={ghLogo} alt="GitHub Logo" />
                </a>
                <span>   </span>{project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
