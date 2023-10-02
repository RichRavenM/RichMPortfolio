import techLogos from "../data/techLogos";

const Tech = () => {
  return (
    <div className="tech">
      <ul className="techlist">
        {techLogos.map((logo) => {
          return (
            <li key="logo.name">
              <img className="techLogo" src={logo.url}></img>
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default Tech;
