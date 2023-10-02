import FadeInSection from "./FadeInSection";

const Header = () => {
  return (
    <>
      <div className="Header Header-is-big">
        <div className="intro">
          <h1>Richard Morris</h1>
          <h2>Full-Stack Developer</h2>
        </div>
        <div>
          <div className="personal-info">
            <img
              id="profile-pic"
              src="https://i.postimg.cc/NFbdm1wH/20231002-160350.jpg"
            ></img>
            <p>Manchester, UK</p>
            <p>07921 521 108</p>
            <p>richard.s.morris93@googlemail.com</p>
            <a
              className="link"
              href="https://www.linkedin.com/in/rich-morris-a93603286/"
            >
              <img
                className="profile-link"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1280px-LinkedIn_Logo.svg.png"
              ></img>
            </a>
            <br />
            <a href="https://github.com/RichRavenM/">
              <img
                className="profile-link"
                src="https://static.vecteezy.com/system/resources/previews/016/833/880/non_2x/github-logo-git-hub-icon-with-text-on-white-background-free-vector.jpg"
              ></img>
            </a>
          </div>
        </div>
      </div>
      <div className="Header Header-is-small">
        <h1>Richard Morris</h1>
        <img
          id="profile-pic"
          src="https://i.postimg.cc/NFbdm1wH/20231002-160350.jpg"
        ></img>
        <FadeInSection>
          <div className="mobile-info">
            <h2>Full-Stack Developer</h2>
            <p>Manchester, UK</p>
            <p>07921 521 108</p>
            <p>richard.s.morris93@googlemail.com</p>
            <a
              className="link"
              href="https://www.linkedin.com/in/rich-morris-a93603286/"
            >
              <img
                className="profile-link"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1280px-LinkedIn_Logo.svg.png"
              ></img>
            </a>
            <br />
            <a href="https://github.com/RichRavenM/">
              <img
                className="profile-link"
                src="https://static.vecteezy.com/system/resources/previews/016/833/880/non_2x/github-logo-git-hub-icon-with-text-on-white-background-free-vector.jpg"
              ></img>
            </a>
          </div>
        </FadeInSection>
      </div>
    </>
  );
};

export default Header;
