import projectData from "../data/projectData";
import FadeInSection from "./FadeInSection";

const Projects = () => {
  return (
    <div className="Projects">
      <h1 style={{ textAlign: "center" }}>Projects</h1>
      <ul className="project-list project-is-big">
        {projectData.map((project) => {
          return (
            <FadeInSection>
              <li key={project.id} className="project">
                <a href={project.website}>
                  <h2 className="project-name">{project.name}</h2>
                </a>
                <div className="project-bulk">
                  <img className="project-image" src={project.image}></img>
                  <div className="project-info">
                    <p className="description">"{project.description}"</p>
                    <ul className="project-logos">
                      {project.tech.map((logo) => {
                        return (
                          <li key={Math.random()}>
                            <img
                              className="project-logo"
                              src={logo}
                              alt="logo"
                            />
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="project-types">
                    <h3>{project.type}</h3>
                    <a href={project.github}>
                      <img
                        className="profile-link"
                        src="https://static.vecteezy.com/system/resources/previews/016/833/880/non_2x/github-logo-git-hub-icon-with-text-on-white-background-free-vector.jpg"
                      ></img>
                    </a>
                  </div>
                </div>
              </li>
            </FadeInSection>
          );
        })}
      </ul>
      <ul className="project-list project-is-small">
        {projectData.map((project) => {
          return (
            <FadeInSection>
              <li key={project.id} className="project">
                <a href={project.website}>
                  <h2 className="project-name">{project.name}</h2>
                </a>
                <h3>{project.type}</h3>

                <img className="project-image" src={project.image}></img>

                <p className="description">"{project.description}"</p>
                <ul className="project-logos">
                  {project.tech.map((logo) => {
                    return (
                      <li key={Math.random()}>
                        <img className="project-logo" src={logo} alt="logo" />
                      </li>
                    );
                  })}
                </ul>

                <div className="project-types">
                  <a href={project.github}>
                    <img
                      className="profile-link"
                      src="https://static.vecteezy.com/system/resources/previews/016/833/880/non_2x/github-logo-git-hub-icon-with-text-on-white-background-free-vector.jpg"
                    ></img>
                  </a>
                </div>
              </li>
            </FadeInSection>
          );
        })}
      </ul>
    </div>
  );
};

export default Projects;
