const Header = () => {
  return (
    <div className="Header">
      <div className="intro">
        <h1>Richard Morris</h1>
        <h2>Full-Stack Developer</h2>
      </div>
      <div>
        <img id="profile-pic" src="https://i.imgur.com/CSGCR.jpeg"></img>
        <div className="personal-info">
          <p>Manchester, UK</p>
          <p>07921 521 108</p>
          <p>richard.s.morris93@googlemail.com</p>
          <a href="https://www.linkedin.com/in/rich-morris-a93603286/">
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
  );
};

export default Header;
