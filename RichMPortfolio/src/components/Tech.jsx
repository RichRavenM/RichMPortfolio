import techLogos from "../data/techLogos";

const Tech = () => {
  return (
    <div className="tech">
      {techLogos.map((logo) => {
        return <img className="techLogo" src={logo.url}></img>;
      })}
    </div>
  );
};

export default Tech;
