import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import animatedPic from "../../assets/Animated.webp";
import zenmode from "../../assets/zenmode.jpeg";
import portfolio from "../../assets/portfolio.png";
import {
  ExperiencesData,
  ProjectsData,
  AchievementsData,
} from "../utils/resumeData";

const About = () => {
  return (
    <div className="about-me-container">
      <div className="image-container">
        <img
          src={animatedPic}
          alt="Geeky Illustration"
          className="about-image"
        />
      </div>
      <div className="text-container">
        <h2>Hey I'm Ajay V P,</h2>
        <p>
          A highly motivated Full Stack Developer with hands-on experience in
          javascript based technologies and microservices-based architecture.
          Committed to continuous learning and eager to leverage technical
          skills to tackle real-world challenges. With hands-on experience in
          client interactions, demos, and sprint planning within Agile
          environments, I delivered 8+ web applications, covering end-to-end
          development, production support, new feature integration, and full
          lifecycle projects from scratch.
        </p>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Skills</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Languages / Frameworks</td>
            <td>Javascript, Node.js, Angular 8+, Hasura, C++</td>
          </tr>
          <tr>
            <td>Libraries</td>
            <td>React.js</td>
          </tr>
          <tr>
            <td>Database</td>
            <td>MySQL, MongoDB</td>
          </tr>
          <tr>
            <td>Protocols</td>
            <td>HTTP/S, Socket.IO</td>
          </tr>
          <tr>
            <td>Utilities</td>
            <td>Docker, Redis, Git, AWS</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const WorkExperience = () => {
  const experiences = ExperiencesData;
  return (
    <div>
      <h2 className="workexp-header">Work Experience</h2>
      <div className="work-experience">
        {experiences.map((experience, index) => (
          <div key={index} className="experience-card">
            <h2 className="exp-company-name">{experience.companyName}</h2>
            <p className="title-dates">
              <span className="exp-title">{experience.title}</span> •{" "}
              <span className="dates">
                {experience.startDate} - {experience.endDate}
              </span>
            </p>
            <ul className="responsibilities">
              {experience.responsibilities.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
            <p className="skills">
              <strong>Skills Used:</strong> {experience.skills.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = ProjectsData;
  return (
    <div className="projects-container">
      <h2 className="projects-header">Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h2 className="project-name">
              {project.name}
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                <FaGithub />
              </a>
              {project.demoLink && (
                <a
                  href={project.name.includes("Portfolio") ? "#" : project.demoLink}
                  target={project.name.includes("Portfolio") ? "" : "_blank"}
                  rel="noopener noreferrer"
                  className="demo-link"
                >
                  <FaExternalLinkAlt />
                </a>
              )}
            </h2>
            <div className="image-container">
              <img
                src={project.name.includes("Portfolio") ? portfolio : zenmode}
                alt="Geeky Illustration"
                className="image-project"
              />
            </div>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Achievements = () => {
  const achievements = AchievementsData;
  return (
    <div className="achievements-container">
      <h2>Achievements</h2>
      <ul>
        {achievements.map((achievement, index) => (
          <li key={index} className="achievement-item">
            <h3 className="achievement-title">{achievement.title}</h3>
            <p className="achievement-description">
              {achievement.description}{" "}
              <span className="achievement-date">({achievement.date})</span>{" "}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Body = () => {
  return (
    <div className="app-body">
      <section className="section-container" id="about">
        <About />
      </section>
      <section className="section-container" id="skills">
        <Skills />
      </section>
      <section className="section-container" id="work">
        <WorkExperience />
      </section>
      <section className="section-container" id="projects">
        <Projects />
      </section>
      <section className="section-container" id="achievements">
        <Achievements />
      </section>
    </div>
  );
};

export default Body;
