import Current from "./Current";

function AboutMe() {
  return (
    <div className="container-fluid">
      <h4>
        My graphic design experience spans over 15 years and multiple
        industries, but my favourite projects have been working with my
        freelance clients.{" "}
        <a className="text-highlight" href="www.jenluchka.com">
          Some of my notables can be found here
        </a>
        . My current passion project is working with Generation X+ to assist
        with teaching minor tech tips and tricks to make their lives easier.{" "}
        <a className="text-highlight" href="www.jenluchka.com">
          {" "}
          Find out more{" "}
          <span className="fa-duotone fa-circle-arrow-right"></span>
        </a>
        <Current />
      </h4>
    </div>
  );
}

export default AboutMe;
