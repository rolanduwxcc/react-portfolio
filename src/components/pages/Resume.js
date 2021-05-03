import React from "react";

const Resume = () => (
  <div>
    <br />
    <h1>Curriculum Vitae</h1>
    <br />

    <div>
      <a href="../../assets/resume.txt" download>
        <h3>Resume</h3>
      </a>
    </div>

    <br />

    <div>
      <h3>Front-End Knowledge</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>Responsive Design</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>
    </div>

    <div>
      <h3>Back-End Knowledge</h3>
      <ul>
        <li>APIs</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>SQLite, MySQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>RESTful APIs</li>
      </ul>
    </div>
  </div>
);

export default Resume;
